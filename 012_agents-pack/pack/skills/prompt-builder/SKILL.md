---
name: prompt-builder
description: "Escribir, mejorar o buscar un prompt listo por dominio (dev, negocio, marketing, research, n8n). Disparar con 'armá un prompt', 'mejorá este prompt', 'tenés un prompt para…'."
---

# Prompt Builder

La librería vive en la carpeta **`prompts/`** de este pack, organizada por dominio. Son
114 prompts en 11 archivos, más el método y un wizard.

Dos caminos. Elegí **uno**: no cargues los dos.

- **Ya existe un prompt para esto** → buscalo en la tabla de abajo y adaptalo.
- **No existe, hay que escribirlo** → leé `prompts/metodo.md`.

> Cargá **un solo archivo por vez**. Los 11 juntos son ~2.900 líneas: leerlos todos para
> usar un prompt es tirar el presupuesto de contexto a la basura.

## Camino 1 — Buscar en la librería

| Dominio | Archivo | Qué tiene |
|---|---|---|
| Código — generar | `prompts/desarrollo/generar-codigo.md` | 12 prompts: features, refactor, APIs, migración |
| Código — debuggear | `prompts/desarrollo/debugging.md` | 13 prompts: errores, stack traces, performance |
| Código — testear | `prompts/desarrollo/testing-y-review.md` | 14 prompts: unit, integración, code review |
| Datos y reportes | `prompts/negocio/analisis-de-datos.md` | 14 prompts: análisis, insights, dashboards |
| Research y síntesis | `prompts/negocio/research-y-sintesis.md` | 18 prompts: resumen, extracción, comparativas |
| Planificación | `prompts/negocio/planificacion.md` | 14 prompts: breakdown, roadmaps, priorización |
| Research profundo | `prompts/negocio/investigacion-profunda.md` | wizard interactivo, con fuentes citadas |
| SEO y contenido | `prompts/marketing/seo-y-contenido.md` | 9 prompts: artículos, keywords, optimización |
| Email | `prompts/marketing/email.md` | 9 prompts: secuencias, campañas, copy |
| Social y ads | `prompts/marketing/redes-y-ads.md` | 10 prompts: posts, creativos, copy pago |
| n8n | `prompts/automatizacion/n8n.md` | armar workflows vía MCP + REST API |

Cada carpeta tiene su propio `README.md` con la tabla de qué hay adentro, por si el
dominio no está claro desde acá.

**Cómo adaptar:** los prompts traen placeholders en `[MAYÚSCULAS]`. Reemplazalos todos
antes de usar — un `[LANGUAGE]` sin reemplazar hace que el modelo invente el contexto.

## Camino 2 — Escribir uno nuevo

Leé `prompts/metodo.md`: COSTAR, checklist de calidad, anti-patterns y los tres niveles
de madurez de un prompt.

Si querés que el humano lo construya de forma guiada (preguntas paso a paso en vez de que
vos lo escribas), pasale `prompts/constructor.md` para pegar en cualquier modelo.

## Evitar

- No cargues más de un archivo de la librería por vez.
- No pegues un prompt sin reemplazar los placeholders.
- No inventes atribución. La procedencia está en `prompts/SOURCES.md` y en la línea
  `Sources:` de cada archivo: dejala donde está.
