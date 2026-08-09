# Método — cómo se escribe un prompt que funciona

Se lee cuando hay que **escribir** un prompt
nuevo, no cuando alcanza con adaptar uno de los que ya están en esta carpeta.

## Framework principal: COSTAR

| Elemento | Para qué | Ejemplo |
|---|---|---|
| **C**ontext | El trasfondo que el modelo necesita | "Soy fundador de un SaaS…" |
| **O**bjective | Qué hay que lograr | "Escribir el copy de una landing" |
| **S**tyle | Cómo se escribe | "Conversacional, directo" |
| **T**one | La carga emocional | "Seguro pero no vendedor" |
| **A**udience | Para quién es | "CTOs técnicos" |
| **R**esponse | Formato de salida | "3 variantes de título + cuerpo" |

## Alternativa corta: Role-Task-Format

```
Role:   qué rol adopta el modelo
Task:   el objetivo, específico
Format: la estructura de salida
```

Usá COSTAR cuando el pedido es complejo; Role-Task-Format cuando es directo. Meter
COSTAR en un pedido simple lo infla sin mejorarlo.

## Los 6 elementos que no pueden faltar

1. **Contexto** — el trasfondo
2. **Rol** — la identidad que adopta el modelo
3. **Tarea** — el objetivo, accionable
4. **Restricciones** — límites de largo, estilo, alcance
5. **Formato** — la estructura de salida
6. **Ejemplos** — cuando el formato es complejo, mostralo en vez de describirlo

## Checklist de calidad

- [ ] **Específico, no vago** — "2-3 oraciones", no "sé conciso"
- [ ] **En positivo** — decí qué hacer, no qué no hacer
- [ ] **Explicá el porqué** — el contexto ayuda al modelo a generalizar bien
- [ ] **Estructura** — headers, tags, secciones claras
- [ ] **Restricciones explícitas** — largo, cantidad de pasos, reglas de formato
- [ ] **Ejemplos** — mostrar, no describir, cuando el formato importa
- [ ] **Placeholders claros** — `[MAYÚSCULAS]` donde el usuario completa
- [ ] **Iterativo** — arrancá simple, agregá especificidad si hace falta

## Anti-patterns

| Anti-pattern | Por qué falla |
|---|---|
| "Hacelo bien" | No hay criterio: cada corrida da algo distinto |
| "No seas aburrido" | Restricción negativa sin alternativa: no dice qué SÍ |
| Contexto asumido | El modelo no sabe tu situación; la inventa |
| Un prompt gigante | Varios objetivos mezclados se pisan. Partilo en pasos |
| Sin formato | Salida con estructura aleatoria, imposible de automatizar |

## Los tres niveles

**Nivel 1 — básico**
```
Escribí un post sobre productividad.
```

**Nivel 2 — estructurado**
```
Escribí un post de 500 palabras sobre productividad para gente que trabaja remoto.
Incluí 5 consejos accionables con ejemplos.
```

**Nivel 3 — producción**
```
Role: sos un coach de productividad que escribe para profesionales ocupados.

Task: escribir un post sobre productividad para trabajo remoto.

Context:
- Audiencia: mandos medios trabajando desde casa
- Objetivo: consejos prácticos, aplicables hoy
- Tono: cercano pero con autoridad

Requirements:
- Largo: 500-600 palabras
- Estructura: hook, 5 consejos con ejemplo, cierre con CTA
- Cada consejo: título + 2-3 oraciones + ejemplo concreto
- Evitar: consejos genéricos tipo "usá una lista de tareas"

Format: Markdown, H2 por consejo
```

La diferencia entre el 2 y el 3 no es largo: es que el 3 define **criterio de éxito**.

## Proceso

1. ¿Para qué se va a usar? (caso de uso concreto)
2. ¿Quién consume la salida?
3. ¿Cómo sabemos que funcionó? (criterio de éxito)
4. Elegí framework: COSTAR si es complejo, Role-Task-Format si es simple
5. Agregá ejemplos si el formato importa
6. Marcá los placeholders con `[MAYÚSCULAS]`
7. Probá y ajustá sobre la salida real

## Tipos de restricción

| Tipo | Ejemplos |
|---|---|
| Largo | "100 palabras", "3-5 bullets", "2 párrafos" |
| Formato | "JSON", "tabla Markdown", "lista numerada" |
| Estilo | "formal", "conversacional", "técnico" |
| Alcance | "solo sobre X", "excluí Y" |
| Estructura | "intro-cuerpo-cierre", "problema-solución" |

## Formato de la librería

Si agregás un prompt a esta carpeta, seguí el patrón de los que ya están:

````markdown
# Nombre de la categoría

> Descripción breve. Sources: [Origen](url)

---

## Subcategoría

### Nombre del prompt
```
[Rol/contexto si hace falta]

[Descripción clara de la tarea]

[Inputs del usuario en MAYÚSCULAS]:
- [INPUT 1]

[Requisitos]:
- Requisito 1

[Formato de salida]
```
````

Nombres de archivo en minúscula con guiones, con prefijo de dominio
(`dev-`, `biz-`, `mkt-`) para que ordenen juntos.
