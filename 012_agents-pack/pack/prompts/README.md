# Prompts

114 prompts listos para usar, más el método para escribir los tuyos.

```
metodo.md         cómo se escribe un prompt que funciona
constructor.md    un wizard que te lo arma preguntando

desarrollo/       39 prompts · código, debugging, testing
negocio/          47 prompts · datos, research, planificación
marketing/        28 prompts · SEO, email, redes y ads
automatizacion/   n8n
```

Cada carpeta tiene su propio README con la tabla de qué hay adentro.

## Cómo se usa

**Entrá a la carpeta de tu dominio, abrí el archivo, copiá el prompt, reemplazá los
placeholders.** Van en `[MAYÚSCULAS]` — reemplazalos **todos** antes de usar: un
`[LENGUAJE]` sin completar hace que el modelo invente el contexto.

Abrí **un archivo por vez**. Los once juntos son ~2.900 líneas, y cargarlos todos para
usar un prompt es tirar contexto a la basura.

## Si no encontrás el que buscás

Leé `metodo.md` y escribilo. Tiene el framework COSTAR, el checklist de calidad, los
anti-patterns y los tres niveles de madurez de un prompt.

Si preferís que te lo construyan preguntando en vez de escribirlo vos, pegá
`constructor.md` entero en cualquier modelo: te hace las preguntas de a una hasta armarlo.

## Un detalle que cambia el resultado

La diferencia entre un prompt que anda y uno que no suele no ser el largo: es si define
**criterio de éxito**. Comparar en `metodo.md` el nivel 2 contra el nivel 3 lleva dos
minutos y es lo que más rinde de todo este archivo.

## Idioma

Todo está en español. Los originales estaban en inglés y se tradujeron, incluidos los
placeholders: donde antes decía `[PASTE ERROR MESSAGE]` ahora dice `[PEGÁ EL MENSAJE DE
ERROR]`.

Si un modelo te responde en inglés igual, agregale una línea `Respondé en español` al
final del prompt.

## Procedencia

Compilación de prompts publicados como gratuitos por sus autores, agrupados por dominio,
normalizados a un formato común y traducidos al español. La atribución completa está en
`SOURCES.md`, y cada archivo conserva su línea `Sources:` con los links al origen.
**No la borres al editar.**
