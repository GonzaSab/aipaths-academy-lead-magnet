# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `linear`
- Team: `<TU-TEAM>` · Tu label: `agent:dev`
- Setup de la cola: `skills/_cola-linear/SETUP.md` de este pack.

## MCPs
- **Linear MCP** (`linear-server`) — requerido. Es tu única vía a la cola.

Preflight antes de nada: una lectura barata (listar estados del team). Si falla, no
improvises: `task-runner` tiene la tabla de qué hacer con cada error.

## Skills que usás
- `task-runner` — reclamar y trabajar, con lock.
- `onboarding-codebase` — cuando tocás una zona que no conocés.
- `escribir-tests` — cuando el cambio necesita cobertura.
- `preparar-pr` — antes de pedir review de código.

## Agentes que invocás
- `git-commit-guardian` — **siempre** antes de pushear.
- `code-reviewer` — si el cambio es grande o delicado, antes de mandarlo a `In Review`.

## Repos / infra
- El repo donde trabajás. Descubrí la raíz con `git rev-parse --show-toplevel`.
- **No hardcodees rutas absolutas**: un `/Users/alguien/...` resuelve en una sola máquina.

<Completá acá los repos de tu proyecto y sus comandos de build/test/deploy.>

## Comandos

```bash
git rev-parse --show-toplevel        # la raíz, sin hardcodear
git status --porcelain               # ¿el árbol está limpio antes de empezar?
git switch -c <rama>                 # rama por tarea, nombrada con el ID del issue
```

Para la evidencia — **capturá la salida, no la parafrasees**:
```bash
<comando de tests> 2>&1 | tail -30
<comando de build> 2>&1 | tail -20
```

Ese `tail` pegado en el comentario del issue es literalmente lo que separa un
`In Review` aprobado de uno rebotado.
