# Oración Común en Línea — DailyOfficeACC

**El Oficio Diario del Libro de Oración Común de 1928 en español**
Presentado por la Iglesia Anglicana Católica

![ACC Logo](ACC-Logo.png)

## Descripción

Aplicación web litúrgica que presenta el Oficio Diario completo según el Libro de Oración Común de 1928 (LOC 1928) en español. Inspirada en [commonprayeronline.com](https://commonprayeronline.com/), con autorización de su creador.

### Características

- **Oración Matutina y Vespertina** — Texto completo y verbatim del LOC 1928: sentencias por tiempo, exhortación, confesión, absolución, preces, cánticos y colectas, con salmos y lecturas del día
- **Cánticos con selector** — Alterna entre las opciones de cada oficio (p. ej. Te Deum / Benedictus es / Benedicite; Nunc Dimittis / Deus Misereatur / Benedic, anima mea)
- **Leccionario automático** — Salmos y lecciones calculados según la tabla del LOC 1928
- **Kalendario litúrgico** — Calendario visual con los colores del Ordo, precedencia y transferencia de fiestas, conmemoraciones y notas de rúbrica por día
- **Salterio completo** — 150 Salmos con ciclo de 30 días
- **Santa Comunión** — Orden con Propios del Día (Colectas, Epístolas, Evangelios)
- **La Letanía** — Texto íntegro de la Plegaria General
- **Oraciones y Acciones de Gracias** — Colección para diversas ocasiones
- **Oración Familiar** — Para uso en el hogar
- **Oficios Horarios** — Prima, Tercia, Sexta, Nona, Mediodía y Completas
- **Rúbricas y Siglas** — Páginas de reglas y tablas del LOC 1928 y glosario de abreviaturas del Ordo
- **Selector de fecha** — Navega el oficio de cualquier día del año litúrgico
- **Modo oscuro** — Tema cálido para lectura nocturna
- **Responsive** — Diseño adaptable a móvil y escritorio

## Tecnología

| Stack | Versión |
|-------|---------|
| Next.js | 16.3 (App Router, export estático) |
| React | 19.2 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Gestor | pnpm 11.9 |

## Instalación

```bash
pnpm install
pnpm dev
```

La aplicación se abre en `http://localhost:3000`.

Scripts disponibles:

```bash
pnpm dev        # servidor de desarrollo
pnpm build      # export estático a out/
pnpm start      # sirve el build
pnpm lint       # ESLint
pnpm typecheck  # tsc --noEmit
```

## Estructura

```
src/
├── app/                        # Rutas (App Router) + metadata (icons, robots, sitemap)
│   ├── oficio/                 # Matutina, Vespertina y horas menores (prima…completas)
│   ├── santa-comunion/         # Santa Comunión
│   ├── salterio/               # El Salterio (150 Salmos, ruta dinámica [id])
│   ├── kalendario/             # Calendario litúrgico (Ordo)
│   ├── leccionario/            # Leccionario del día
│   ├── letania/                # La Letanía
│   ├── oraciones/              # Oraciones y Acciones de Gracias
│   ├── familia/                # Oración Familiar
│   ├── oficios-horarios/       # Índice de horas menores
│   ├── colectas/               # Colectas, Epístolas y Evangelios
│   ├── rubricas/               # Reglas y tablas del LOC 1928
│   └── siglas/                 # Glosario de abreviaturas del Ordo
├── components/
│   ├── layout/                 # SiteHeader, Header, Footer, SectionNav, ScrollToTop
│   ├── liturgical/             # Oficios, cánticos, preces, credo, lecturas, banners
│   └── views/                  # KalendarView, LeccionarioView, PsalterView, HourOffice
├── data/                       # Contenido litúrgico (salmos, colectas, fiestas, cánticos,
│                               #   biblia, officeText, ordoNotes, oraciones, credos…)
└── lib/                        # Lógica (calendar, ordo, lectionary, propers, hours,
                                #   liturgicalColors, useMounted)
```

## Despliegue

La app se exporta como sitio estático (`pnpm build` → `out/`) y se despliega a **Amazon S3 + CloudFront** mediante **GitHub Actions**.

- CI (lint + typecheck + build): en cada push y PR.
- Deploy (S3 sync + invalidación de CloudFront): al hacer merge a `main`.

Detalles completos de la infraestructura en [DEPLOYMENT.md](DEPLOYMENT.md).
Flujo de ramas y protección en [.github/BRANCH_PROTECTION.md](.github/BRANCH_PROTECTION.md).

## Fuentes

- **LOC 1928** — Libro de Oración Común de 1928, traducción al español
- **Ordo Kalendar 2026** — Calendario litúrgico de la Iglesia Anglicana Católica
- **Biblia** — Texto bíblico de referencia: [conferenciaepiscopal.es/biblia](https://www.conferenciaepiscopal.es/biblia/)

## Licencia

MIT — Ver [LICENSE](LICENSE)

## Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md)

---

*Creado por [David Sebastián Barrera Gaona](https://david-barrera.com/)*

*Ad maiorem Dei gloriam*
