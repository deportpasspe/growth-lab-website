# Guía editorial — Growth Lab

## Idiomas (modelo unificado)

Cada página, servicio, insight o caso es **un solo documento** con pestañas **Español | English** en cada campo de texto. La estructura (page builder, imágenes, orden de nav) es compartida; solo se traduce el copy.

### Flujo editorial

1. **Crear** un documento (p. ej. Colecciones → Insights → Create).
2. Completar campos en pestaña **ES**.
3. Cambiar a pestaña **EN** y traducir, o usar **Assist → Translate** para generar EN desde ES.
4. **Publish** una sola vez — el sitio sirve `/es/…` y `/en/…` automáticamente.

Los slugs son distintos por idioma (`slug.es` / `slug.en`) porque las URLs están traducidas (`/es/servicios/clima-organizacional` vs `/en/services/organizational-climate`).

## Mapa página → documento Sanity

| Ruta (ejemplo ES / EN) | Documento | Ubicación en Studio |
| --- | --- | --- |
| `/es/` · `/en/` | `homePage` | Páginas → Home |
| `/es/nosotros` · `/en/about` | `aboutPage` | Páginas → Nosotros |
| `/es/metodologia` · `/en/methodology` | `methodologyPage` | Páginas → Metodología |
| `/es/reclutamiento` · `/en/recruitment` | `recruitmentPage` | Páginas → Reclutamiento |
| `/es/servicios` · `/en/services` | `servicesIndexPage` | Páginas → Servicios (índice) |
| `/es/servicios/:slug` · `/en/services/:slug` | `service` | Colecciones → Servicios |
| `/es/insights` · `/en/insights` | `insightsIndexPage` | Páginas → Insights (índice) |
| `/es/insights/:slug` | `insight` | Colecciones → Insights |
| `/es/casos-de-exito` · `/en/case-studies` | `caseStudiesIndexPage` | Páginas → Casos (índice) |
| `/es/casos-de-exito/:slug` · `/en/case-studies/:slug` | `caseStudy` | Colecciones → Casos de éxito |
| `/es/contacto` · `/en/contact` | `contactPage` | Páginas → Contacto |
| `/es/gracias` · `/en/thank-you` | `thankYouPage` | Páginas → Gracias |
| `/es/politica-de-privacidad` · `/en/privacy-policy` | `legalPage` | Páginas → Legales |
| (global) | `siteSettings` | Site settings |

## Añadir un servicio

1. Colecciones → Servicios → **Create**.
2. Título ES/EN, **slug ES** y **slug EN**, resumen y Page Builder.
3. **Show in navigation** + **Navigation order** para el mega-menú.
4. Publish — aparece en ES y EN.

## Publicar un Insight

1. Colecciones → Insights → Create.
2. Título, slugs ES/EN, excerpt, cover y body en ambos idiomas.
3. Publish — aparece en el grid de `/es/insights` y `/en/insights` sin editar el índice.

## Migración desde documentos duplicados

Si el dataset aún tiene pares `seed-*-es` / `seed-*-en`:

```bash
npm run migrate:i18n
```

Modo simulación: `npm run migrate:i18n -- --dry-run`

## Seed inicial (desarrollo)

```bash
npm run seed
```

El seed crea **un documento por entidad** (`homePage`, `service-clima`, etc.) con campos ES|EN ya fusionados.

Si migras desde pares antiguos `seed-*-es` / `seed-*-en`:

```bash
npm run migrate:i18n
npm run migrate:i18n:v5
```

`migrate:i18n:v5` convierte arrays i18n al formato v5 del plugin (`language` + `_type`), necesario para que Studio abra documentos como Home sin error.

Si ves **Unknown fields** o bloques en rojo tras migrar:

```bash
npm run repair:i18n          # simulación
npm run repair:i18n -- --apply
npm run validate:i18n        # debe terminar con 0 issues
```

Requiere `SANITY_API_WRITE_TOKEN` en `studio/.env`.

**Nota:** el bloque pageBuilder `metrics` usa `items[].value` como campo localizado (ES|EN). En cambio, `contactChannelItem.value`, `interestOptions[].value` y `caseStudy.metrics[].value` son strings planos. El script `repair:i18n` distingue ambos contextos automáticamente.

## Imágenes del CMS

Para subir assets de `frontend/public/assets/figma/` y poblar campos de imagen en Sanity:

```bash
npm run patch:images              # simulación (lista uploads y parches)
npm run patch:images -- --apply     # sube assets y actualiza documentos
npm run validate:images             # debe terminar con 0 issues
```

Tras cambios de schema que añadan campos `image`, ejecuta `npm run typegen` antes del patch.

Los íconos de `contactChannelItem` y `contentCard` son imágenes editables en Studio (no strings). Logo marquee usa placeholders hasta que el equipo suba logos reales.

### Selector visual de íconos

Los campos **Icon** en content cards, contact channels, metrics, related services y service catalog muestran un catálogo visual con thumbnails. Para añadir íconos nuevos al catálogo:

1. Coloca el SVG/PNG en `frontend/public/assets/figma/`
2. Regístralo en [`studio/src/lib/iconCatalog.ts`](studio/src/lib/iconCatalog.ts)
3. Ejecuta `npm run patch:images -- --apply` para subirlo a Sanity

Los thumbnails del picker se sirven desde el frontend (`SANITY_STUDIO_PREVIEW_URL`, p. ej. `http://localhost:4321`).

## Presentation (vista previa)

1. Configura `SANITY_STUDIO_PREVIEW_URL` y tokens en `.env`.
2. Abre **Presentation** en Studio — draft mode vía `/api/draft-mode/enable`.
3. Edita en contexto y publica desde el Studio.
