# Despliegue: S3 + CloudFront vía GitHub Actions

Este proyecto se exporta como sitio **estático** (`next build` → carpeta `out/`) y se
despliega a **Amazon S3** servido por **CloudFront**. El CI/CD vive en
`.github/workflows/deploy.yml` y usa **OIDC** (sin llaves de acceso guardadas en GitHub).

- CI (lint + typecheck + build): en cada push y PR a `main`.
- Deploy (S3 sync + invalidación CloudFront): solo en push a `main`.

---

## 1. Requisitos previos

- AWS CLI configurada con un perfil con permisos de administración (solo para la
  configuración inicial de la infraestructura).
- Reemplaza los valores de ejemplo:
  - `mi-sitio-loc1928` → nombre único de tu bucket.
  - `123456789012` → tu Account ID de AWS.
  - `sebasgao05/DailyOfficeACC` → tu repo GitHub (`owner/repo`).
  - Región de ejemplo: `us-east-1`.

---

## 2. Crear el bucket S3 (privado)

El bucket **no** necesita acceso público: CloudFront lo lee vía OAC (Origin Access Control).

```bash
aws s3api create-bucket \
  --bucket mi-sitio-loc1928 \
  --region us-east-1

# Bloquear todo acceso público (CloudFront accede vía OAC, no públicamente)
aws s3api put-public-access-block \
  --bucket mi-sitio-loc1928 \
  --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

---

## 3. Crear la distribución CloudFront con OAC

La forma más simple desde la consola:

1. CloudFront → **Create distribution**.
2. **Origin domain**: selecciona tu bucket S3 (`mi-sitio-loc1928.s3...`).
3. **Origin access**: elige **Origin access control settings (recommended)** y crea un
   OAC nuevo. CloudFront te dará una **bucket policy** para pegar en S3 (paso 4).
4. **Default root object**: `index.html`.
5. **Viewer protocol policy**: Redirect HTTP to HTTPS.
6. (Recomendado) **Custom error responses**: para que las rutas resuelvan bien,
   mapea `403` y `404` → response page path `/404.html` con código `404`.
   > Nota: como usamos `trailingSlash: true`, cada ruta emite `ruta/index.html`.
   > CloudFront con `index.html` como root object sirve `/` correctamente. Para
   > subrutas tipo `/oficio/`, S3 sirve `/oficio/index.html` automáticamente porque
   > el objeto existe con esa key.

Anota el **Distribution ID** (ej. `E1ABCDEF2GHIJ`) y el dominio
(`dxxxxxxxx.cloudfront.net`).

---

## 4. Bucket policy para OAC

Pega la policy que sugiere CloudFront (o esta plantilla) en S3 → tu bucket →
Permissions → Bucket policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontOAC",
      "Effect": "Allow",
      "Principal": { "Service": "cloudfront.amazonaws.com" },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mi-sitio-loc1928/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::123456789012:distribution/E1ABCDEF2GHIJ"
        }
      }
    }
  ]
}
```

---

## 5. Configurar OIDC (autenticación sin llaves)

### 5.1 Crear el proveedor OIDC de GitHub (una sola vez por cuenta)

```bash
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com
```

Si ya existe (por ejemplo, otro repo lo creó), omite este paso.

### 5.2 Rol IAM que GitHub Actions asumirá

Crea `trust-policy.json` (limita el trust a tu repo y rama `main`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::123456789012:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:sebasgao05/DailyOfficeACC:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

```bash
aws iam create-role \
  --role-name github-deploy-dailyofficeacc \
  --assume-role-policy-document file://trust-policy.json
```

### 5.3 Permisos del rol (mínimos)

Crea `deploy-permissions.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3Sync",
      "Effect": "Allow",
      "Action": ["s3:ListBucket", "s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": [
        "arn:aws:s3:::mi-sitio-loc1928",
        "arn:aws:s3:::mi-sitio-loc1928/*"
      ]
    },
    {
      "Sid": "CloudFrontInvalidate",
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::123456789012:distribution/E1ABCDEF2GHIJ"
    }
  ]
}
```

```bash
aws iam put-role-policy \
  --role-name github-deploy-dailyofficeacc \
  --policy-name deploy-permissions \
  --policy-document file://deploy-permissions.json
```

Anota el ARN del rol: `arn:aws:iam::123456789012:role/github-deploy-dailyofficeacc`.

---

## 6. Configurar GitHub (Settings → Secrets and variables → Actions)

### Secrets

| Nombre                | Valor                                                         |
| --------------------- | ------------------------------------------------------------ |
| `AWS_DEPLOY_ROLE_ARN` | `arn:aws:iam::123456789012:role/github-deploy-dailyofficeacc` |

### Variables

| Nombre                        | Valor de ejemplo                    |
| ----------------------------- | ----------------------------------- |
| `AWS_REGION`                  | `us-east-1`                         |
| `S3_BUCKET`                   | `mi-sitio-loc1928`                  |
| `CLOUDFRONT_DISTRIBUTION_ID`  | `E1ABCDEF2GHIJ`                     |
| `SITE_URL`                    | `https://dxxxxxxxx.cloudfront.net`  |

> El workflow usa `secrets.AWS_DEPLOY_ROLE_ARN` y `vars.*` para el resto.

---

## 7. Disparar el despliegue

Cualquier push a `main` corre CI y, si pasa, despliega:

```bash
git add .
git commit -m "Deploy vía GitHub Actions a S3 + CloudFront"
git push origin main
```

Sigue la ejecución en la pestaña **Actions** del repo.

---

## 8. (Opcional) Dominio propio

1. Solicita un certificado en **ACM** en `us-east-1` (CloudFront exige esa región).
2. En la distribución CloudFront, añade tu dominio en **Alternate domain names (CNAME)**
   y asocia el certificado.
3. En tu DNS (Route 53 u otro), crea un registro `A`/`ALIAS` (o `CNAME`) apuntando al
   dominio de CloudFront.

---

## Notas

- **Fuentes de Google**: la app usa `next/font/google` (Cinzel, EB Garamond). El build
  las descarga en tiempo de compilación. Si algún build falla con `Failed to fetch ...
  from Google Fonts`, conviene auto-hospedarlas con `next/font/local`.
- **Estrategia de caché**: los assets con hash (`/_next/...`) se sirven con
  `max-age=31536000, immutable`; el HTML con `max-age=0, must-revalidate`. Por eso el
  workflow hace dos `s3 sync` distintos y luego invalida CloudFront.
