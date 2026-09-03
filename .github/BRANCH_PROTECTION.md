# Configuración de GitHub — Protección de ramas y buenas prácticas

Guía paso a paso para dejar el repositorio con un flujo seguro:
`feature/*` → `dev` → **PR** → `main` → despliegue automático.

La rama `main` es la que se despliega a producción (S3 + CloudFront). Debe
estar protegida para que **nada** llegue a ella sin pasar por PR y por el CI.

---

## 1. Proteger la rama `main`

En GitHub: **Settings → Branches → Add branch ruleset** (o "Add rule" en la
vista clásica de *Branch protection rules*).

### Con Rulesets (recomendado, UI nueva)

1. Ve a **Settings → Rules → Rulesets → New ruleset → New branch ruleset**.
2. **Ruleset Name**: `protect-main`.
3. **Enforcement status**: `Active`.
4. **Target branches → Add target → Include by pattern**: escribe `main`.
5. Marca estas reglas (**Branch rules**):
   - ✅ **Restrict deletions** (no se puede borrar `main`).
   - ✅ **Require a pull request before merging**
     - Required approvals: `1` (o `0` si trabajas en solitario; ver nota abajo).
     - ✅ Dismiss stale pull request approvals when new commits are pushed.
   - ✅ **Require status checks to pass**
     - ✅ Require branches to be up to date before merging.
     - En **Add checks**, busca y añade: `Lint, Typecheck & Build`
       (es el nombre del job del workflow). Así ningún PR se mergea si el CI falla.
   - ✅ **Block force pushes**.
6. **Create**.

> **Nota si trabajas solo/a**: GitHub no te deja aprobar tu propio PR. Si eres
> el único colaborador y pusiste "Required approvals: 1", no podrás mergear.
> Opciones: (a) pon required approvals en `0` pero mantén los status checks
> obligatorios, o (b) deja que un segundo colaborador apruebe.

### Con Branch protection rules (UI clásica)

1. **Settings → Branches → Add branch protection rule**.
2. **Branch name pattern**: `main`.
3. Marca:
   - ✅ Require a pull request before merging (Approvals: 1 o 0).
   - ✅ Require status checks to pass before merging →
     busca y selecciona **`Lint, Typecheck & Build`**.
   - ✅ Require branches to be up to date before merging.
   - ✅ Do not allow bypassing the above settings.
4. **Create**.

---

## 2. (Opcional) Proteger también `dev`

Buena práctica: exigir que el CI pase también antes de mergear a `dev`.

1. Repite el proceso anterior con un ruleset `protect-dev` apuntando a `dev`.
2. Reglas mínimas sugeridas:
   - ✅ Require status checks to pass → `Lint, Typecheck & Build`.
   - ✅ Block force pushes.
   - Los "Required approvals" puedes dejarlos en `0` para agilizar.

---

## 3. Fijar `main` como rama por defecto y `dev` para el día a día

- **Settings → General → Default branch**: mantén `main` como default (es lo que
  ven los visitantes del repo), pero **desarrolla en `dev`**.
- Al abrir PRs, GitHub propondrá la base correcta; asegúrate de que los PR de
  features vayan a `dev`, y solo el PR de publicación vaya de `dev` a `main`.

---

## 4. Flujo de trabajo diario

```bash
# 1. Nueva funcionalidad, partiendo de dev
git checkout dev
git pull origin dev
git checkout -b feature/mi-mejora

# 2. Trabaja y verifica localmente (igual que el CI)
pnpm run lint
pnpm run typecheck
pnpm run build

# 3. Sube y abre PR hacia dev
git push -u origin feature/mi-mejora
# En GitHub: Compare & pull request  →  base: dev  ←  compare: feature/mi-mejora
```

Cuando `dev` acumula cambios listos para producción:

```
# En GitHub: New pull request  →  base: main  ←  compare: dev
# Al aprobar y mergear, el workflow despliega a S3 + CloudFront automáticamente.
```

---

## 5. Buenas prácticas adicionales

- **Commits pequeños y descriptivos**; usa mensajes en imperativo
  (p. ej. "Añade selector de cánticos a Completas").
- **Un PR = un propósito.** Evita mezclar refactors con features.
- **Nunca** subas secretos. Las llaves de AWS viven en *GitHub Secrets*
  (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`), nunca en el código.
- **Borra las ramas** de feature tras mergear (GitHub ofrece un botón "Delete
  branch" en el PR). Activa **Settings → General → Automatically delete head
  branches** para que se limpien solas.
- Revisa la pestaña **Actions** tras cada merge a `main` para confirmar que el
  despliegue terminó en verde.

---

## Referencia rápida de la infraestructura

| Recurso                     | Valor                                            |
| --------------------------- | ------------------------------------------------ |
| Bucket S3                   | `dailyofficeacc-site`                            |
| CloudFront Distribution ID  | `E3F8LA1GVS2JTB`                                 |
| URL de producción           | `https://d39xew2a81v4n8.cloudfront.net`          |
| Región                      | `us-east-1`                                      |
| Usuario IAM de despliegue   | `github-deploy-dailyofficeacc` (permisos mínimos) |

Los detalles completos de la infraestructura están en `DEPLOYMENT.md`.
