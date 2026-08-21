# Contribución

Gracias por tu interés en contribuir a **Oración Común en Línea** (DailyOfficeACC).

## Cómo contribuir

### Reportar errores
- Abre un *issue* describiendo el error, la página afectada y los pasos para reproducirlo.
- Si es un error litúrgico (texto incorrecto, referencia bíblica equivocada), incluye la referencia correcta del LOC 1928.

### Correcciones de texto litúrgico
- Todo el texto litúrgico proviene del **Libro de Oración Común de 1928** en español (LOC 1928).
- Las correcciones deben citarse contra la fuente original.
- Los salmos están en `app/src/data/psalms.ts`.
- Las colectas/epístolas/evangelios en `app/src/data/collects.ts`.
- El leccionario en `app/src/lib/lectionary.ts`.

### Desarrollo
1. Haz un fork del repositorio.
2. Crea una rama: `git checkout -b feature/mi-mejora`
3. Instala dependencias: `pnpm install`
4. Ejecuta en desarrollo: `pnpm dev`
5. Haz tus cambios y verifica que compila: `pnpm tsc --noEmit`
6. Crea un Pull Request con una descripción clara.

### Estructura del proyecto
```
DailyOfficeACC/
├── app/                    # Aplicación Next.js
│   ├── src/
│   │   ├── app/           # Rutas (App Router)
│   │   ├── components/    # Componentes React
│   │   ├── data/          # Datos estáticos (salmos, colectas, fiestas)
│   │   └── lib/           # Lógica (calendario, leccionario)
│   ├── scripts/           # Scripts de extracción de datos
│   └── public/            # Assets estáticos
├── LOC1928.docx           # Fuente: Libro de Oración Común 1928
├── 2026 Ordo Kalendar.pdf # Referencia: Ordo del año
└── ACC-Logo.png           # Logo de la Iglesia Anglicana Católica
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
