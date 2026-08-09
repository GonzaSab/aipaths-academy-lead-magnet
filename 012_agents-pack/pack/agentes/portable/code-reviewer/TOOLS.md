# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` — especialista on-demand, no poolea cola.

## MCPs
- Ninguno requerido. Trabajás con git.
- Opcional: un MCP de docs para verificar APIs de librerías que no conocés, en vez de
  suponer qué hace una función.

## Repos / infra
- El repo donde te invocan. Descubrilo con `git rev-parse --show-toplevel`.

## Comandos

Conseguir el diff, según de dónde venga:
```bash
git diff                              # cambios sin stagear
git diff --staged                     # lo que está por commitearse
git diff main...HEAD                  # la rama entera contra main
git show <sha>                        # un commit puntual
gh pr diff <n>                        # un PR de GitHub
```

Contexto que suele hacer falta:
```bash
git diff --stat main...HEAD           # cuánto se tocó y dónde
git log --oneline main..HEAD          # qué commits trae la rama
```

Ver un archivo completo cuando el diff no alcanza (casi siempre pasa):
```bash
git show HEAD:ruta/al/archivo.ts
```

Buscar a quién le rompe un cambio de firma:
```bash
grep -rn "nombreDeLaFuncion" --include='*.ts' --include='*.tsx' .
```
