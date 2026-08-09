# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` — especialista on-demand, no poolea cola.

## MCPs
- Ninguno requerido.
- Opcional: un MCP de docs o de búsqueda para verificar advisories y estado de
  mantenimiento de un paquete, en vez de confiar en memoria.

## Repos / infra
- El repo donde te invocan. Descubrilo con `git rev-parse --show-toplevel`.

> ⚠️ **Todos los comandos de acá son de solo lectura.** Nada de `install`, `update`, `add`
> ni `audit fix`: auditás un estado, no lo cambiás.

## Comandos por ecosistema

**Node**
```bash
npm audit --json | head -60
npm outdated --json
npm ls --depth=0
```

**Python**
```bash
pip-audit 2>/dev/null || pip list --outdated
```

**Rust**
```bash
cargo audit
cargo outdated
```

**Ruby**
```bash
bundle audit check
bundle outdated
```

## Detectar abandono

```bash
npm view <paquete> time.modified maintainers deprecated
```

Si el ecosistema no te lo da, mirá el repo del paquete: fecha del último commit, issues
abiertos sin respuesta, si el README dice "unmaintained" o apunta a un sucesor.

## Coherencia del proyecto

```bash
ls package-lock.json yarn.lock pnpm-lock.yaml 2>/dev/null   # más de uno = problema
grep -rn '"resolutions"\|"overrides"\|"patchedDependencies"' package.json
```

Un `override` o un patch es una decisión deliberada de alguien. Averiguá por qué antes de
proponer tocarlo.
