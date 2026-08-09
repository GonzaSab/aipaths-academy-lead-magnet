---
name: task-runner
description: Tomar y ejecutar la próxima tarea disponible de la cola de agentes en Linear. Disparar con "agarrá una tarea", "trabajá la cola", "próxima tarea".
---

# Task Runner

Trabajás la cola de tareas de Linear de a UNA. Reclamás con lock para que ningún
otro agente duplique el trabajo. Usás el MCP de Linear para todo.

## Paso 0 — Preflight: ¿el MCP responde?
Antes de nada, una lectura barata (por ejemplo listar los estados del team). Si falla,
**no sigas y no improvises**: sin MCP no hay cola, y ninguno de los arreglos está a tu alcance.

| Lo que ves | Qué es | Qué hacés |
|---|---|---|
| `Needs authentication` / 401 | falta el OAuth | **Parás y se lo pedís a tu humano:** que corra `claude mcp login linear-server`. Necesita browser: vos no podés. |
| No existe la tool `mcp__linear-server__*` | el server no está registrado en este harness | **Parás.** Que lo registren (ver `skills/_cola-linear/SETUP.md`, paso 3) y reinicien la sesión. |
| Timeout / 5xx | Linear caído o red | Reintentás **una** vez. Si sigue, parás y avisás. |

**Nunca corras `claude mcp add` para arreglarlo.** No te sirve — la sesión viva no levanta un
server recién registrado — y encima creás una entrada duplicada que necesita **su propio**
OAuth: el auth se guarda por entrada registrada, no por servidor. Es la causa típica de un
MCP que sigue diciendo "sin auth" por más veces que lo agregues.

Decilo explícito y frená: *"El MCP de Linear está registrado pero sin autenticar. Corré
`claude mcp login linear-server` y volvé a pedirme la tarea."* Un agente que se queda
reintentando acá quema tokens sin avanzar un milímetro.

## Paso 1 — Entender el estado (onboarding)
Antes de tocar nada, leé el tablero del team: qué hay en `Todo`, `In Progress`,
`In Review`, `Failed`. Así entrás en contexto y no pisás trabajo en curso.

## Paso 2 — Elegir (rol, prioridad, dependencias)
De `Todo` **con tu label** (`agent:<vos>`, de tu `IDENTITY.md`), **sin responsable**,
elegí la de **mayor prioridad** (Urgent > High > Medium > Low; a igualdad, la más vieja).
Antes de tomarla, descartala si:
- **Está bloqueada:** mirá sus `inverseRelations` tipo `blocks`; si algún blocker no está
  `Done`/`Canceled` (blocker abierto), salteala — todavía no se puede.
- **Es un contenedor:** si tiene **sub-issues abiertas** (`children` sin terminar), no la
  trabajes: trabajás las **hojas** (las sub-issues). El padre lo cierra el review cuando
  todas sus hijas están `Done`.

Si no queda ninguna elegible, parás. No toques `Scheduled`, `Claiming` ni `Backlog`.

> Filtro (MCP/API de Linear): `Todo` + label `agent:<vos>` + sin responsable, `sort` por
> prioridad. Para cada candidata leé `inverseRelations` (tipo `blocks`) y `children` con su
> `state.type`, y descartá las bloqueadas o con hijas abiertas. Las tareas *generales* sin
> label las etiqueta el dispatcher.

## Paso 3 — Reclamar (lock con lease)
Para que dos instancias del mismo rol no tomen la misma tarea:
1. Movela `Todo → Claiming` y dejá un comentario `🔒 claim <tu-instancia> <timestamp>`.
2. Esperá un jitter corto (1–3 s).
3. Re-leé: su estado + los comentarios de claim por fecha.
   - Sigue en `Claiming` y **tu claim es el más antiguo** → ganaste: `Claiming → In Progress`.
   - Si no (hay un claim más viejo, o ya cambió de estado) → **la soltás** y volvés al Paso 2.
4. Recién con `In Progress` empezás a trabajar.

> Recuperación: si una tarea queda trabada en `Claiming` (una instancia murió a mitad),
> el heartbeat/scheduler la devuelve a `Todo` pasado un umbral.

## Paso 4 — Ejecutar
Hacé la tarea según su descripción. Dejá el rastro como **comentarios** en el issue
(qué hiciste, decisiones, links/PRs). Un agente fresco tiene que poder entender todo
leyendo el issue.

## Paso 5 — Cerrar tu parte
- OK → movés `In Progress → In Review` y comentás un resumen + **qué hay que verificar**.
- Error o bloqueo → movés `In Progress → Failed` y comentás el error concreto.

## Evitar
- Trabajar más de una tarea a la vez. Una sola claim activa.
- Tomar una tarea **bloqueada** (blocker abierto) o un **padre con sub-issues abiertas**.
- Reclamar issues ya asignados o fuera de `Todo`.
- Cerrar vos mismo a `Done`: eso es del review (ver `task-review`).
