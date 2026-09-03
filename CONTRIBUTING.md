# Contribución

Gracias por tu interés en contribuir a **Oración Común en Línea** (DailyOfficeACC).

## Cómo contribuir

### Reportar errores
- Abre un *issue* describiendo el error, la página afectada y los pasos para reproducirlo.
- Si es un error litúrgico (texto incorrecto, referencia bíblica equivocada), incluye la referencia correcta del LOC 1928.

### Correcciones de texto litúrgico
- Todo el texto litúrgico proviene del **Libro de Oración Común de 1928** en español (LOC 1928).
- Las correcciones deben citarse contra la fuente original.
- Los salmos están en `src/data/psalms.ts`.
- Las colectas/epístolas/evangelios en `src/data/collects.ts`.
- El leccionario en `src/lib/lectionary.ts`.

### Flujo de ramas (Git)

La rama `main` está **protegida** y es la que se despliega a producción. **No se hace push directo a `main`.** Todo cambio entra vía Pull Request desde `dev`.

```
feature/mi-cambio  ──PR──▶  dev  ──PR──▶  main  ──(deploy automático)──▶  S3 + CloudFront
```

1. Parte siempre de `dev` actualizada:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/mi-mejora
   ```
2. Instala dependencias: `pnpm install`
3. Desarrolla: `pnpm dev`
4. Antes de abrir el PR, verifica localmente (lo mismo que corre el CI):
   ```bash
   pnpm run lint
   pnpm run typecheck
   pnpm run build
   ```
5. Abre un PR de tu rama hacia **`dev`** con una descripción clara.
6. Cuando `dev` esté listo para publicar, se abre un PR de **`dev` → `main`**. Al mergear, el sitio se despliega solo.

> El workflow de CI (`.github/workflows/deploy.yml`) corre `lint`, `typecheck` y `build` en cada PR. El despliegue a S3 + CloudFront solo ocurre al hacer push/merge a `main`.

### Estructura del proyecto
```
DailyOfficeACC/
├── src/
│   ├── app/                  # Rutas (App Router) + metadata (icons, robots, sitemap)
│   ├── components/
│   │   ├── layout/           # Chrome del sitio: SiteHeader, Header, Footer
│   │   ├── views/            # Vistas de página: KalendarView, LeccionarioView, PsalterView, HourOffice
│   │   └── liturgical/       # Piezas litúrgicas: DailyReadings, DailyLesson, CanticleSelector,
│   │                         #   OccasionalPrayers, ChurchDayBanner, SeasonIndicator, DateDisplay
│   ├── data/                 # Datos estáticos (salmos, colectas, fiestas, cánticos, credos, biblia)
│   └── lib/                  # Lógica (calendar, ordo, lectionary, propers, hours, useMounted)
├── scripts/                  # Scripts de extracción de datos (utilidades manuales, no parte del build)
├── public/                   # Assets estáticos
├── .github/workflows/        # CI/CD (lint, typecheck, build, deploy a S3 + CloudFront)
├── LOC1928.docx              # Fuente: Libro de Oración Común 1928
├── 2026 Ordo Kalendar.pdf    # Referencia: Ordo del año
└── ACC-Logo.png              # Logo de la Iglesia Anglicana Católica
```

### Stack tecnológico
- **Next.js 16** con App Router
- **TypeScript**
- **Tailwind CSS 4**
- **Fuentes**: EB Garamond (cuerpo), Cinzel (títulos)

## Código de conducta
Este proyecto está al servicio de la Iglesia. Se espera respeto, caridad cristiana y colaboración constructiva de todos los contribuidores.

## Licencia
Las contribuciones se licencian bajo la misma licencia MIT del proyecto.
