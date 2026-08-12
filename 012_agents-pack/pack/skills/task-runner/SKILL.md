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

> **El prefijo de las tools depende del harness. Buscalas por lo que hacen, no por su nombre.**
> En Claude Code llegan como `mcp__linear-server__*`, porque ahí el server se registra con ese
> nombre. Otro harness puede exponer el mismo server remoto con otro nombre y entonces llegan,
> por ejemplo, como `mcp__linear__*`.
>
> Si ves **alguna** familia de tools de Linear, tenés MCP: seguí. Concluir que no hay MCP porque
> el prefijo no es el que esperabas es el error a evitar — frena la cola con todo sano.

| Lo que ves | Qué es | Qué hacés |
|---|---|---|
| `Needs authentication` / 401 | falta el OAuth | **Parás y se lo pedís a tu humano:** que corra el `mcp login` de su harness (en Claude Code, `claude mcp login linear-server`). Necesita browser: vos no podés. |
| No hay **ninguna** tool de Linear, con ningún prefijo | el server no está registrado en este harness | **Parás.** Que lo registren (ver `skills/_cola-linear/SETUP.md`, paso 3) y reinicien la sesión. |
| Timeout / 5xx | Linear caído o red | Reintentás **una** vez. Si sigue, parás y avisás. |

**En Claude Code, nunca corras `claude mcp add` para arreglarlo.** No te sirve — la sesión viva
no levanta un server recién registrado — y encima creás una entrada duplicada que necesita **su
propio** OAuth: el auth se guarda por entrada registrada, no por servidor. Es la causa típica de
un MCP que sigue diciendo "sin auth" por más veces que lo agregues.

Decilo explícito y frená: *"El MCP de Linear está registrado pero sin autenticar. Corré el
`mcp login` que corresponda y volvé a pedirme la tarea."* Un agente que se queda reintentando
acá quema tokens sin avanzar un milímetro.

## Paso 1 — Entender el estado (onboarding)
Antes de tocar nada, leé el tablero del team: qué hay en `Todo`, `In Progress`,
`In Review`, `Failed`. Así entrás en contexto y no pisás trabajo en curso.

## Modo preclaim — si te despertó un despachador

Este modo aplica si armaste un **despachador**: algo que corre por cadencia, mira la cola y
levanta una sesión de agente cuando hay trabajo. No viene en el pack — es la pieza que te falta
si querés que la cola avance sin que vos dispares la skill a mano.

Un despachador que sólo levanta sesiones no alcanza: entre que decide y que la sesión arranca,
cualquiera puede tomar la misma tarea. Por eso **reclama él**, antes de levantarte, y te pasa el
resultado. Si tu prompt inicial trae un **`wake_id`**, un issue concreto y una **ventana de
claim**, estás en este modo: no elegís tarea ni reclamás, **salteás el Paso 2 y el Paso 3**, y en
su lugar verificás que su handshake siga en pie.

Leé el issue y sus comentarios, y confirmá las cuatro:

1. sigue en `Claiming`
2. existe un comentario de claim con **tu** `wake_id`
3. **ningún otro claim creado a partir de la ventana que te pasaron** es más antiguo que el tuyo
4. sigue elegible: sin responsable, sin blocker abierto, sin sub-issues abiertas

**Pasan las cuatro** → `Claiming → In Progress` y seguís en el Paso 4 con **esa** tarea. Una sola:
no vuelvas al Paso 2 a buscar otra.

**Falla alguna** → terminás **sin tocar el estado**. Dejá un `↩︎ stand-down <tu-wake_id>` diciendo
cuál falló, y nada más. Ni a `Todo` ni a `Failed`: vale la misma regla del Paso 3, el que no
trabaja no escribe estado.

> **Usá la ventana que te pasaron, no la de 10 minutos.** Son dos preguntas distintas. La de 10
> min del Paso 3 responde *"¿hay algún claim que todavía pueda estar vivo?"*. La del despachador
> responde *"¿alguien más reclamó en el mismo instante que yo?"*, y por eso es de segundos. Si la
> ensanchás podés ver un claim muerto que él descartó bien, creerte perdedor y terminar sin
> trabajar una tarea que era tuya — y él ya la contó como despachada, así que nadie la vuelve a
> mirar hasta que el reaper la libere.
>
> Que la ventana viaje en el prompt no es un detalle: si el despachador y la skill la definen cada
> uno por su lado, tarde o temprano difieren y nadie se entera.
>
> **Revalidás igual aunque él haya ganado.** Entre su claim y tu primer turno pasan segundos o
> minutos: el reaper pudo devolverla, alguien pudo moverla a mano, un blocker pudo abrirse. Ganó
> una carrera en un instante que ya pasó; vos confirmás que ese instante sigue valiendo.

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
3. Re-leé: su estado + los comentarios de claim por fecha. **Contá sólo los claims vivos: los
   de los últimos 10 minutos** (el `STALE_MINUTES` del reaper). Sólo hay dos salidas:
   - **Ganaste** — sigue en `Claiming` **y** tu claim es el más antiguo **de los vivos** →
     `Claiming → In Progress`. Verificá que siga en `Claiming` en el mismo momento de mover:
     si ya cambió, perdiste.
   - **Perdiste** — hay un claim vivo más viejo, **o** ya no está en `Claiming` → **no toques el
     estado.** Comentá `↩︎ stand-down <tu-instancia>` para dejar rastro y volvé al Paso 2.
4. Recién con `In Progress` empezás a trabajar.

> **Por qué "vivos" y no "todos".** Un `🔒 claim` queda en el issue para siempre: cuando el
> reaper devuelve una tarea a `Todo` comenta que lo hizo, pero **no borra** el claim de la
> instancia que murió. Si contaras todos los claims, ese claim muerto sería el más antiguo para
> siempre y **todo** claimant futuro se daría por perdedor — la tarea rebotaría entre `Todo` y
> `Claiming` sin que nadie la trabaje nunca, que es exactamente lo que el reaper existe para
> evitar. El lease real dura segundos, así que un claim de más de 10 minutos es de una ronda
> muerta por definición: ignoralo.
>
> **Perder significa no escribir, no "soltar".** El perdedor nunca mueve la tarea — ni a `Todo`
> ni a ningún lado. Es lo único seguro, y no es obvio: el reflejo de "la suelto así queda libre"
> es exactamente el bug. Si el perdedor la devuelve a `Todo`, la tarea vuelve a estar disponible
> **mientras el ganador la está trabajando** — dos agentes haciendo lo mismo, con los side effects
> duplicados que eso implique, y encima el `In Progress` del ganador desaparece del tablero así
> que nadie lo ve. Vale igual si todavía la ves en `Claiming`: el ganador está por promoverla y
> vos no sabés en qué milisegundo estás.
>
> Recuperación: si el ganador muere a mitad, la tarea queda en `Claiming` y **el reaper**
> (`skills/_cola-linear/reaper.mjs`, por GitHub Actions) la devuelve a `Todo` pasado el umbral.
> Esa es la única vía que la libera, y es la correcta: no adivina, espera. Ojo con la latencia
> real: los `schedule` de GitHub Actions son best-effort y se demoran bajo carga, así que aunque
> declares `*/10` una tarea abandonada puede tardar bastante más en volver. Es lento a propósito,
> no roto.

## Paso 4 — Ejecutar
Hacé la tarea según su descripción. Dejá el rastro como **comentarios** en el issue
(qué hiciste, decisiones, links/PRs). Un agente fresco tiene que poder entender todo
leyendo el issue.

## Paso 5 — Cerrar tu parte

**Nunca termines tu sesión dejando la tarea en `In Progress`.** Ese estado significa "hay alguien
haciéndolo ahora mismo". Si te vas y la dejás ahí, el tablero miente: nadie más la toma porque
parece ocupada, y queda trabada hasta que alguien la destrabe a mano. Salir sin mover el estado es
la única salida que no existe.

| Situación | A dónde la movés | Qué comentás |
|---|---|---|
| La terminaste | `In Review` | resumen + **qué hay que verificar** |
| No se puede hacer, o erroró | `Failed` | el error concreto, con evidencia |
| Hay que esperar a una fecha u hora | `Scheduled` **con due date** | por qué, y desde cuándo se puede |
| Otro la puede seguir, o se reintenta ya | `Todo` | qué dejaste hecho y qué falta |

> **Si la tarea no se podía tomar todavía, el problema es de carga, no tuyo.** Una tarea que
> espera una fecha tiene que estar en `Scheduled`, no en `Todo` — el scheduler la activa cuando
> corresponde. Si te tocó una prematura, movela a `Scheduled` con su fecha y decilo: estás
> arreglando el archivado, no fallando la tarea.
>
> Ojo con la granularidad: la due date es **por día**, no por hora. Una tarea que sólo se puede
> hacer después de cierta hora se activa a la madrugada de ese día igual. Dejá dicho en el
> comentario a partir de qué hora sirve.

## Evitar
- Trabajar más de una tarea a la vez. Una sola claim activa.
- Tomar una tarea **bloqueada** (blocker abierto) o un **padre con sub-issues abiertas**.
- Reclamar issues ya asignados o fuera de `Todo`.
- Cerrar vos mismo a `Done`: eso es del review (ver `task-review`).
- En modo preclaim: buscarte otra tarea si la que te asignaron no pasa la verificación. Terminás
  ahí. El despachador cuenta un wake por sesión; si agarrás otra, le rompés los topes.
- **Terminar tu sesión con la tarea en `In Progress`.** Si no la vas a seguir ahora, movela:
  `In Review`, `Failed`, `Scheduled` o `Todo` según el caso (Paso 5). Nunca la dejes ahí.
