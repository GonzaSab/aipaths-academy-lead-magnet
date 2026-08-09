# Desarrollo — 39 prompts

Para escribir, arreglar y verificar código.

| Archivo | Prompts | Cuándo lo abrís |
|---|---|---|
| `generar-codigo.md` | 12 | arrancar una feature, refactorizar, armar una API, migrar de stack |
| `debugging.md` | 13 | tenés un error y no sabés de dónde sale |
| `testing-y-review.md` | 14 | falta cobertura, o querés que alguien mire el código con ojo crítico |

## Cómo se usan

Copiá el prompt, reemplazá **todos** los placeholders en `[MAYÚSCULAS]`, pegalo.

Un `[LENGUAJE/FRAMEWORK]` sin completar es la forma más rápida de que el modelo invente
el contexto y te devuelva código para un stack que no es el tuyo.

## El que más rinde

`debugging.md` → **Análisis de Stack Trace**. Pegar un stack trace crudo y pedir "arreglá
esto" suele traer el síntoma parcheado. Ese prompt fuerza cuatro respuestas separadas
—cuál es la fuente real, qué cadena de eventos llevó ahí, cómo se arregla, qué otras
cosas revisar— y es la diferencia entre tapar el error y entenderlo.
