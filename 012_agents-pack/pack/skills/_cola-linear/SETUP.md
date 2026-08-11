# Setup · cola de tareas de agentes con Linear

Guía paso a paso para dejar funcionando la cola de tareas: los agentes toman
tareas de Linear, las trabajan y las dejan para review; y las tareas programadas
a futuro se activan solas. Pensado para que cualquiera lo replique desde cero.

> **Dos autenticaciones distintas** (no las confundas):
> - **Personal API key** → la usa el *scheduler* (GitHub Actions), server-to-server, sin browser.
> - **OAuth** → lo usa el *MCP* para que tu agente lea/escriba tareas de forma interactiva.

Requisitos: cuenta de Linear · un agente (Claude Code, etc.) · Node 18+ (para probar local) · cuenta de GitHub (para el scheduler).

---

## 1. Estados del workflow en Linear

El pipeline usa 9 estados. Linear ya trae 5 por default (**Backlog, Todo, In Progress, Done, Canceled**); hay que crear 4: **Scheduled, Claiming, In Review, Failed**.

| Estado | Tipo (categoría Linear) | Rol |
|---|---|---|
| Backlog | backlog | ideas que **no** querés que arranquen aún |
| **Scheduled** 🆕 | unstarted | esperando su fecha; se auto-activa |
| Todo | unstarted | disponible: el agente lo pollea y reclama |
| **Claiming** 🆕 | started | lock transitorio mientras se resuelve quién la toma |
| In Progress | started | reclamada (lock: nadie más la toca) |
| **In Review** 🆕 | started | terminada; a verificar |
| **Failed** 🆕 | started | erroró/falló → retry o descartar |
| Done | completed | verificada y cerrada |
| Canceled | canceled | descartada |

**Automático (recomendado):** hacé primero el paso 2 (API key) y corré el script idempotente
—crea solo los que falten, no duplica ni pisa:
```bash
LINEAR_KEY=$(cat ~/.secrets/linear_api_key) LINEAR_TEAM_KEY=<TU-TEAM> \
  node setup-states.mjs
```
(Tildá `DRY_RUN=1` para ver qué crearía sin tocar nada.)

**Manual (alternativa):** **Team → Settings → Workflow → New status**, con el tipo y color de la tabla.

---

## 2. Crear la Personal API key (para el scheduler)

1. En Linear: **Settings** (`G` luego `S`) → buscá **"API"** / **Security & access**.
2. Sección **Personal API keys** → **New API key**. Label: `cola-agentes / scheduler`.
3. Si pide scopes, elegí **Full access** (necesita leer y actualizar issues).
4. Copiá la key (`lin_api_...`). **Se muestra una sola vez.** No la pegues en ningún chat.

### Guardarla de forma segura (local, para probar)
Guardala sin que quede en el historial de shell:
```bash
mkdir -p ~/.secrets && chmod 700 ~/.secrets && printf 'Pegá la key y Enter: ' && read -rs LINEAR_KEY && printf '%s' "$LINEAR_KEY" > ~/.secrets/linear_api_key && chmod 600 ~/.secrets/linear_api_key && unset LINEAR_KEY && echo && echo "✓ guardada"
```
Para GitHub Actions **no** va en un archivo: va como *secret* (paso 4).

---

## 3. Conectar el MCP de Linear al agente (OAuth)

Esto es lo que le da a tu agente la capacidad de leer/reclamar/actualizar tareas.
Registralo en scope **user**, así vale para todas tus carpetas sin repetirlo en cada una:

```bash
claude mcp add --scope user --transport http linear-server https://mcp.linear.app/mcp
```

Registrar **no** es autenticar: el OAuth lo tenés que hacer vos, una vez por máquina.

```bash
claude mcp login linear-server      # abre el browser, autorizás tu workspace de Linear
claude mcp get   linear-server      # verificá: Status: ✔ Connected
```

Sin browser (SSH/headless): agregá `--no-browser` y te imprime la URL.

> **Andá por el CLI, no por el panel `/mcp`.** El panel solo lista los servers que existían
> cuando arrancó esa sesión: si lo registraste después, no aparece ahí y parece que no se
> deja autenticar. Es la causa típica de "lo autentiqué mil veces y sigue sin auth".
> Si tenías sesiones abiertas, reiniciálas después del login.
> Verificá con `claude mcp get linear-server`: tiene que decir `Status: ✔ Connected`.

> **No corras `claude mcp add` dos veces para "arreglarlo".** Creás una entrada duplicada
> que necesita **su propio** OAuth: el auth se guarda por entrada registrada, no por
> servidor. Es la causa típica de un MCP que sigue diciendo "sin auth" por más veces que
> lo agregues.

**El nombre `linear-server` no es libre.** Las tools llegan al agente como
`mcp__linear-server__*` y las skills `task-runner` / `task-review` las invocan así. Si lo
registrás con otro nombre, las skills no encuentran nada.

---

## 4. Activar el mantenimiento en la nube (GitHub Actions)

El workflow corre **dos pasos** cada ~10 min, sin PC prendida:

| Paso | Qué hace | Por qué |
|---|---|---|
| `scheduler.mjs` | **Scheduled → Todo** cuando llega la due date | activa lo programado |
| `reaper.mjs` | **Claiming → Todo** pasado el umbral | destraba leases huérfanos |

El reaper es la contraparte del lock: `task-runner` reclama moviendo a `Claiming`, y si
esa instancia muere ahí —se quedó sin cuota, la mataron, se reinició la máquina— la tarea
queda invisible para **todos** los runners de forma permanente. El reaper la devuelve a
`Todo` y deja un comentario explicando por qué. Sin él, cada corte te deja una tarea muerta.

1. Copiá los tres `.mjs` de esta carpeta a `.github/scripts/` de tu repo, y
   `linear-scheduler.yml` a `.github/workflows/`. (Si preferís otra ubicación para los
   scripts, ajustá los `run:` del workflow.)
2. **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `LINEAR_KEY` · Value: tu Personal API key.
3. Copiá `linear-scheduler.yml` a `.github/workflows/` y editalo: poné tu `LINEAR_TEAM_KEY` (ej. `ACME`) y tu `SCHEDULE_TZ`.
4. Listo: corre solo cada ~10 min. Probalo a mano en **Actions → linear-taskq-scheduler → Run workflow** (tildá DRY_RUN para un ensayo sin mutar).

**Convención clave:** en una tarea **Scheduled**, la **due date es la fecha de activación** (no un deadline). Sin due date, se queda esperando.

**Ruteo por rol:** las tareas se crean **siempre con su label `agent:<rol>`** — la skill
`task-intake` lo fuerza al crear (infiere el rol desde los labels `agent:*` de tu
workspace; si es ambiguo, pregunta). No hay clasificador posterior: una tarea sin label
es un error de carga, y los `task-runner` la ignoran hasta que alguien la etiquete.

> Creá un label `agent:<rol>` en Linear por cada agente que vaya a trabajar la cola.
> Ese token es el que rutea: el mismo que va en el `IDENTITY.md` del agente.

**Umbral del reaper:** `STALE_MINUTES` en el workflow, default **10**. El lease de
`Claiming` dura segundos (claim + jitter + re-lectura), así que 10 minutos ya es holgado.
No apuntes el reaper a `In Progress`: ahí el trabajo real puede tardar horas y lo estarías
cancelando a mitad.

### Probar local (opcional)
```bash
LINEAR_KEY=$(cat ~/.secrets/linear_api_key) LINEAR_TEAM_KEY=<TU-TEAM> \
  SCHEDULE_TZ=America/Argentina/Buenos_Aires DRY_RUN=1 \
  node scheduler.mjs

LINEAR_KEY=$(cat ~/.secrets/linear_api_key) LINEAR_TEAM_KEY=<TU-TEAM> DRY_RUN=1 \
  node reaper.mjs
```

---

## 5. Usar la cola

- **Programar a futuro:** creá la tarea en **Scheduled** con due date = cuándo querés que arranque.
- **Que un agente la trabaje:** en tu agente disparás la skill **`task-runner`** ("agarrá una tarea"): reclama la de mayor prioridad de `Todo` con lock (`Todo → Claiming → In Progress`), la trabaja, y la deja en `In Review` (o `Failed`). Si dos instancias reclaman a la vez gana el claim más antiguo, y **la que pierde no toca el estado**: devolverla a `Todo` la liberaría mientras la ganadora ya la trabaja.
- **Verificar:** disparás **`task-review`** ("revisá la cola"): aprueba (→Done) o devuelve (→Todo/Failed).

---

## Checklist rápido
- [ ] 9 estados creados en Linear (incluido `Claiming`)
- [ ] Personal API key creada y guardada segura
- [ ] MCP de Linear conectado (`✔ Connected`)
- [ ] Repo en GitHub + secret `LINEAR_KEY` + team key/TZ en el workflow
- [ ] Reaper activo (paso 2 del workflow) — sin el, un claim huerfano traba la tarea para siempre
- [ ] Probado: una tarea Scheduled vencida pasa sola a Todo
