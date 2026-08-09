# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` — especialista on-demand, no poolea cola.

## MCPs
- Ninguno requerido.
- Opcional: un MCP de docs para verificar cómo se usa una librería antes de documentar
  algo que la involucra.

## Repos / infra
- El repo donde te invocan. Descubrilo con `git rev-parse --show-toplevel`.

## Comandos — averiguar qué hace el proyecto

Punto de entrada y forma del proyecto:
```bash
ls -a                                  # qué hay en la raíz
cat package.json 2>/dev/null || cat pyproject.toml 2>/dev/null || cat Cargo.toml 2>/dev/null
```

Los comandos reales (no los que dice el README viejo):
```bash
node -e "const p=require('./package.json'); console.log(p.scripts)" 2>/dev/null
cat Makefile 2>/dev/null | grep -E '^[a-z-]+:'
ls .github/workflows/ 2>/dev/null       # el CI dice qué se corre de verdad
```

Configuración que necesita:
```bash
cat .env.example 2>/dev/null
grep -rhoE 'process\.env\.[A-Z_]+|os\.environ\[.[A-Z_]+' --include='*.ts' --include='*.js' --include='*.py' . | sort -u
```

Qué documentación ya existe:
```bash
find . -iname '*.md' -not -path './node_modules/*' -not -path './.git/*'
```

Historial, para changelogs que no se inventan:
```bash
git log --oneline --no-merges -30
git tag --sort=-creatordate | head
```
