# Despliegue: S3 + CloudFront vía GitHub Actions

Este proyecto se exporta como sitio **estático** (`next build` → carpeta `out/`)
y se despliega a **Amazon S3** servido por **CloudFront**. El CI/CD vive en
`.github/workflows/deploy.yml`.

- **CI** (lint + typecheck + build): en cada push y en cada PR.
- **Deploy** (S3 sync + invalidación CloudFront): solo al hacer push/merge a `main`.

La autenticación con AWS usa **llaves de acceso IAM** de un usuario dedicado
con permisos mínimos, guardadas como *GitHub Secrets*.

---

## Infraestructura ya aprovisionada

Estos recursos ya existen en la cuenta AWS `009245113723` (región `us-east-1`):

| Recurso                     | Valor                                              |
| --------------------------- | -------------------------------------------------- |
| Bucket S3 (privado)         | `dailyofficeacc-site`                              |
| Origin Access Control (OAC) | `dailyofficeacc-oac`                               |
| CloudFront Distribution ID  | `E3F8LA1GVS2JTB`                                   |
| Dominio CloudFront          | `d39xew2a81v4n8.cloudfront.net`                    |
| URL de producción           | `https://d39xew2a81v4n8.cloudfront.net`            |
| Usuario IAM de despliegue   | `github-deploy-dailyofficeacc`                     |

El bucket es privado (bloqueo total de acceso público); solo la distribución
CloudFront puede leerlo, mediante OAC + una *bucket policy* con condición
`AWS:SourceArn`. El usuario IAM solo puede: `s3:ListBucket/GetObject/PutObject/
DeleteObject` sobre ese bucket y `cloudfront:CreateInvalidation` sobre esa
distribución.

---

## GitHub — Secrets y Variables

Configurados en **Settings → Secrets and variables → Actions**.

### Secrets

| Nombre                  | Descripción                                  |
| ----------------------- | -------------------------------------------- |
| `AWS_ACCESS_KEY_ID`     | Access key del usuario IAM de despliegue.    |
| `AWS_SECRET_ACCESS_KEY` | Secret key del usuario IAM de despliegue.    |

### Variables

| Nombre                        | Valor                                   |
| ----------------------------- | --------------------------------------- |
| `AWS_REGION`                  | `us-east-1`                             |
| `S3_BUCKET`                   | `dailyofficeacc-site`                   |
| `CLOUDFRONT_DISTRIBUTION_ID`  | `E3F8LA1GVS2JTB`                        |
| `SITE_URL`                    | `https://d39xew2a81v4n8.cloudfront.net` |

---

## Cómo se dispara un despliegue

El flujo recomendado es vía Pull Request (ver `.github/BRANCH_PROTECTION.md`):

```
feature/*  →  dev  →  PR  →  main  →  (deploy automático)
```

Al mergear a `main`, el workflow:
1. Corre CI (lint, typecheck, build → genera `out/`).
2. Sube `out/` a S3 con dos estrategias de caché.
3. Invalida la caché de CloudFront (`/*`).

Sigue la ejecución en la pestaña **Actions**.

---

## Recrear la infraestructura desde cero (referencia)

Si alguna vez hay que recrearla, estos son los pasos con AWS CLI. Reemplaza los
valores de ejemplo (`009245113723`, nombres) según corresponda.

### 1. Bucket S3 privado

```bash
aws s3api create-bucket --bucket dailyofficeacc-site --region us-east-1
aws s3api put-public-access-block --bucket dailyofficeacc-site \
  --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

### 2. OAC + distribución CloudFront

```bash
aws cloudfront create-origin-access-control --origin-access-control-config \
  "Name=dailyofficeacc-oac,SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=s3"
# Luego crear la distribución con ese OAC, DefaultRootObject=index.html,
# ViewerProtocolPolicy=redirect-to-https y custom error 403/404 → /404.html.
```

### 3. Bucket policy (solo CloudFront puede leer)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontOAC",
      "Effect": "Allow",
      "Principal": { "Service": "cloudfront.amazonaws.com" },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::dailyofficeacc-site/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::009245113723:distribution/E3F8LA1GVS2JTB"
        }
      }
    }
  ]
}
```

### 4. Usuario IAM de despliegue + llaves

```bash
aws iam create-user --user-name github-deploy-dailyofficeacc
aws iam put-user-policy --user-name github-deploy-dailyofficeacc \
  --policy-name deploy-permissions --policy-document file://deploy-permissions.json
aws iam create-access-key --user-name github-deploy-dailyofficeacc
```

`deploy-permissions.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3Sync",
      "Effect": "Allow",
      "Action": ["s3:ListBucket", "s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": [
        "arn:aws:s3:::dailyofficeacc-site",
        "arn:aws:s3:::dailyofficeacc-site/*"
      ]
    },
    {
      "Sid": "CloudFrontInvalidate",
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::009245113723:distribution/E3F8LA1GVS2JTB"
    }
  ]
}
```

Pon las llaves resultantes en los GitHub Secrets `AWS_ACCESS_KEY_ID` y
`AWS_SECRET_ACCESS_KEY`.

---

## (Opcional) Dominio propio

1. Solicita un certificado en **ACM** en `us-east-1` (CloudFront exige esa región).
2. En la distribución CloudFront, añade tu dominio en **Alternate domain names
   (CNAME)** y asocia el certificado.
3. En tu DNS (Route 53 u otro), crea un registro `A`/`ALIAS` (o `CNAME`)
   apuntando al dominio de CloudFront.
4. Actualiza la variable `SITE_URL` en GitHub y el valor por defecto en
   `layout.tsx`, `robots.ts` y `sitemap.ts` (o define `NEXT_PUBLIC_SITE_URL`).

---

## CloudFront Function: URLs "bonitas" → index.html

Como el sitio es un export estático con `trailingSlash: true`, cada ruta vive en
`ruta/index.html`. S3 + CloudFront con OAC solo resuelven `index.html` de forma
automática en la raíz, **no** en subcarpetas. Sin un rewrite, abrir
`/oficio/oracion-matutina` (p. ej. al pegar el enlace en un chat, que suele
quitar la barra final) devolvía **404**.

Solución: una **CloudFront Function** (viewer-request) llamada
`dailyofficeacc-rewrite` asociada a la distribución, que reescribe:

```
/oficio/oracion-matutina   -> /oficio/oracion-matutina/index.html
/oficio/oracion-matutina/  -> /oficio/oracion-matutina/index.html
/icon.png                  -> (sin cambios; tiene extensión)
```

El código versionado está en `.github/cloudfront-rewrite.js`. Para recrearla:

```bash
aws cloudfront create-function --name dailyofficeacc-rewrite \
  --function-config "Comment=Rewrite pretty URLs to index.html,Runtime=cloudfront-js-2.0" \
  --function-code fileb://.github/cloudfront-rewrite.js
# probar con: aws cloudfront test-function ...
# publicar:   aws cloudfront publish-function --name dailyofficeacc-rewrite --if-match <ETag>
# y asociarla al DefaultCacheBehavior como event-type viewer-request.
```

---

## Notas

- **Fuentes de Google**: la app usa `next/font/google` (Cinzel, EB Garamond).
  El build las descarga en tiempo de compilación. Si un build falla con
  `Failed to fetch ... from Google Fonts`, conviene auto-hospedarlas con
  `next/font/local`.
- **Estrategia de caché**: los assets con hash (`/_next/...`) se sirven con
  `max-age=31536000, immutable`; el HTML con `max-age=0, must-revalidate`. Por
  eso el workflow hace dos `s3 sync` distintos y luego invalida CloudFront.
- **Seguridad de las llaves**: son credenciales de larga duración. Si en el
  futuro se quiere máxima seguridad, se puede migrar a OIDC (autenticación
  federada sin llaves).
