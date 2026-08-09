# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` — especialista on-demand, no poolea cola.

## MCPs
- Ninguno requerido. Trabajás con git por shell.

## Repos / infra
- El repo donde te invocan. No asumas cuál: descubrilo con `git rev-parse --show-toplevel`.

## Comandos

```bash
git rev-parse --show-toplevel        # raíz del repo (nunca hardcodees el path)
git status --porcelain               # estado, parseable
git diff                             # cambios sin stagear
git diff --staged                    # cambios staged
git log --oneline -5                 # contexto reciente
git branch --show-current            # rama actual
git check-ignore -v <archivo>        # ¿está realmente ignorado?
```

Scan de secretos sobre el diff pendiente:
```bash
git diff --staged -U0 | grep -inE '(api[_-]?key|secret|password|token|private[_-]?key|service_role|-----BEGIN)'
```

Verificar que un archivo sensible no esté trackeado:
```bash
git ls-files --error-unmatch .env 2>/dev/null && echo "✗ .env ESTÁ trackeado"
```
