# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` — especialista on-demand, no poolea cola.

## MCPs
- Ninguno requerido. Trabajás con el filesystem y git.

## Repos / infra
- El repo donde te invocan. Descubrilo con `git rev-parse --show-toplevel`; no lo hardcodees.

## Comandos

```bash
git rev-parse --show-toplevel                    # raíz del repo
git ls-files | wc -l                             # cuántos archivos trackeados
du -sh .git                                      # peso de la historia
```

Carpetas vacías (excluyendo `.git`):
```bash
find . -type d -empty -not -path './.git/*'
```

Temporales y artefactos de SO:
```bash
find . -type f \( -name '.DS_Store' -o -name 'Thumbs.db' -o -name '*.tmp' \
  -o -name '*.bak' -o -name '*.old' -o -name '*.swp' \) -not -path './.git/*'
```

Última modificación de un archivo, según git (no según el filesystem):
```bash
git log -1 --format=%ci -- <archivo>
```

Buscar referencias a un archivo antes de marcarlo como huérfano:
```bash
grep -rIn "$(basename <archivo> .md)" . --exclude-dir=.git --exclude-dir=node_modules
```

Archivos trackeados que `.gitignore` ya cubriría (candidatos a `git rm --cached`):
```bash
git ls-files -i -c --exclude-standard
```
