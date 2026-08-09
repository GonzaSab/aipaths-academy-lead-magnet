# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `linear`
- Team: `<TU-TEAM>` · Label de ruteo: `agent:<tu-slug>`
- Setup completo de la cola: `skills/_cola-linear/SETUP.md` de este pack.

Si usás otro backend (Notion, Jira, un board propio), cambiá este binding y adaptá
`task-runner`. El protocolo de claim es agnóstico: necesita un estado intermedio
(`Claiming`) y poder comentar con timestamp. Nada más.

## MCPs
- **Linear MCP** (`linear-server`) — requerido. Es tu única vía a la cola.

> El nombre `linear-server` no es libre: las tools llegan como `mcp__linear-server__*` y
> las skills las invocan así. Si lo registrás con otro nombre, no encuentran nada.

Preflight antes de cualquier cosa: una lectura barata (listar estados del team). Si falla,
**no improvises** — `task-runner` tiene la tabla de qué hacer con cada error.

## Repos / infra
- El repo donde abrís el harness: ese sos vos.
- Descubrí la raíz con `git rev-parse --show-toplevel`. **No hardcodees rutas absolutas.**
- <los repos que tu dominio toca, y sus comandos de build/test/deploy>

## Comandos

```bash
git rev-parse --show-toplevel        # la raíz, sin hardcodear
git branch --show-current            # ¿en qué rama estás?
git status --porcelain               # ¿el árbol está limpio antes de empezar?
```

<Agregá acá los de tu dominio: tests, build, deploy, lo que uses todos los días.>
