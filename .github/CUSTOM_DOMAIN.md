# Subdominio propio: oficio-diario.david-barrera.com

Guía para servir el sitio bajo un subdominio de `david-barrera.com` a través de la
distribución CloudFront existente (`E3F8LA1GVS2JTB`).

## Contexto de tu infraestructura

- **Dominio**: `david-barrera.com` gestionado en **Route 53** (hosted zone
  `Z0978174T55EICD31LX4`), misma cuenta AWS (`009245113723`).
- **Distribución CloudFront**: `E3F8LA1GVS2JTB` → `d39xew2a81v4n8.cloudfront.net`.
- **Subdominio objetivo**: `oficio-diario.david-barrera.com`.

> Nota sobre mayúsculas: el DNS no distingue mayúsculas/minúsculas, así que
> `Oficio-Diario.David-Barrera.com` y `oficio-diario.david-barrera.com` son lo
> mismo. Por convención se usan minúsculas.

---

## Paso 1 — Certificado SSL en ACM (región us-east-1)

CloudFront **exige** que el certificado esté en `us-east-1`.

```bash
aws acm request-certificate \
  --domain-name oficio-diario.david-barrera.com \
  --validation-method DNS \
  --region us-east-1
```

Anota el `CertificateArn` devuelto.

## Paso 2 — Validar el certificado por DNS (Route 53)

ACM da un par CNAME de validación. Como el dominio está en Route 53, se puede
crear automáticamente. Obtén el registro:

```bash
aws acm describe-certificate --certificate-arn <CERT_ARN> --region us-east-1 \
  --query "Certificate.DomainValidationOptions[0].ResourceRecord"
```

Crea ese CNAME en la hosted zone `Z0978174T55EICD31LX4` (con `change-resource-record-sets`
usando UPSERT). ACM pasa a `ISSUED` en unos minutos.

## Paso 3 — Añadir el subdominio a CloudFront

En la distribución `E3F8LA1GVS2JTB`:
- **Alternate domain names (CNAMEs)**: añadir `oficio-diario.david-barrera.com`.
- **Custom SSL certificate**: seleccionar el certificado ACM del paso 1.

(Consola: CloudFront → Distributions → E3F8LA1GVS2JTB → General → Settings → Edit.
CLI: `get-distribution-config` + `update-distribution` añadiendo `Aliases` y
`ViewerCertificate.ACMCertificateArn`.)

## Paso 4 — Registro DNS del subdominio (Route 53)

Un registro **A tipo ALIAS** que apunte a CloudFront. El HostedZoneId de CloudFront
es siempre `Z2FDTNDATAQYW2` (valor fijo de AWS).

```json
{
  "Changes": [{
    "Action": "UPSERT",
    "ResourceRecordSet": {
      "Name": "oficio-diario.david-barrera.com",
      "Type": "A",
      "AliasTarget": {
        "HostedZoneId": "Z2FDTNDATAQYW2",
        "DNSName": "d39xew2a81v4n8.cloudfront.net",
        "EvaluateTargetHealth": false
      }
    }
  }]
}
```

```bash
aws route53 change-resource-record-sets \
  --hosted-zone-id Z0978174T55EICD31LX4 \
  --change-batch file://alias.json
```

## Paso 5 — Actualizar la URL del sitio

Una vez propague (CloudFront `Deployed` + DNS, ~5–20 min):

1. GitHub → Settings → Secrets and variables → Actions → Variables:
   `SITE_URL = https://oficio-diario.david-barrera.com`
2. En el código, actualizar el valor por defecto en `src/app/layout.tsx`,
   `src/app/robots.ts` y `src/app/sitemap.ts` (o definir `NEXT_PUBLIC_SITE_URL`).
3. Commit → PR a `main` → el deploy regenera `robots.txt`/`sitemap.xml` con la URL nueva.

## Verificación

```bash
curl -s -o NUL -w "%{http_code}\n" https://oficio-diario.david-barrera.com/
```

Debe devolver `200`. El dominio `d39xew2a81v4n8.cloudfront.net` seguirá funcionando
en paralelo (no se rompe nada).
