# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `linear`
- Team: `<TU-TEAM>` · Tu label: `agent:reviewer`
- Revisás el estado `In Review`, no filtrás por tu propio label.
- Setup de la cola: `skills/_cola-linear/SETUP.md` de este pack.

## MCPs
- **Linear MCP** (`linear-server`) — requerido.

## Skills que usás
- `task-review` — la pasada por la cola: aprobar o devolver.
- `task-intake` — cuando el hallazgo es trabajo nuevo y no un rebote.

## Agentes que invocás
- `code-reviewer` — si la tarea trae cambios de código que valen una lectura fina.

## Repos / infra
- El repo del proyecto, para reproducir. Raíz con `git rev-parse --show-toplevel`.

## Comandos

Ver qué cambió de verdad en la tarea:
```bash
git log --oneline main..<rama-de-la-tarea>
git diff main...<rama-de-la-tarea>
gh pr diff <n>                       # si el trabajo vino como PR
```

Reproducir — **corré vos, no leas la salida ajena**:
```bash
git switch <rama-de-la-tarea>
<comando de tests> 2>&1 | tail -30
<comando de build> 2>&1 | tail -20
```

Verificar que el fuera de alcance se respetó:
```bash
git diff main...<rama> --stat        # ¿tocó algo que no debía?
```

Antes de aprobar, un último chequeo barato que atrapa mucho:
```bash
git diff main...<rama> | grep -inE '(api[_-]?key|secret|password|token|-----BEGIN)'
git diff main...<rama> | grep -inE 'console\.log|debugger|TODO|FIXME'
```
