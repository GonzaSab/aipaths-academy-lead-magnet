# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` — especialista on-demand, no poolea cola.

## MCPs
- Ninguno requerido.
- Opcional: un MCP de docs (ej. context7) para verificar advisories y APIs vigentes en
  vez de confiar en versiones memorizadas.

## Repos / infra
- El repo Next.js donde te invocan. Descubrilo con `git rev-parse --show-toplevel`.

## Estrategia de herramientas

| Herramienta | Para qué |
|---|---|
| **Grep** | patrones: secretos, funciones peligrosas, chequeos de auth. Usá contexto (`-n -C 2`) |
| **Read** | archivos de config: `package.json`, `next.config.*`, `.gitignore`, `tsconfig.json` |
| **Glob** | categorías de archivo: Server Actions, API routes, migraciones |
| **Bash** | historia de git y chequeos de filesystem |

## Comandos

```bash
git rev-parse --show-toplevel
npm audit --json 2>/dev/null | head -40
```

Archivos sensibles en la historia:
```bash
git log --all --oneline --source -- '*.env' '*.key' '*.pem' '*.sql'
```

Secretos hardcodeados (no `process.env`):
```bash
grep -rInE "(API_KEY|SECRET|PASSWORD|TOKEN|PRIVATE_KEY)[[:space:]]*=[[:space:]]*['\"]" src/ \
  | grep -v 'process\.env'
```

Server Actions y API routes:
```bash
grep -rIln "'use server'" src/
find src/app/api -name 'route.ts' 2>/dev/null
```

Service-role key fuera de server-only:
```bash
grep -rIn 'SERVICE_ROLE' src/ | grep -vE 'src/(lib|server)/'
```

RLS en las migraciones:
```bash
grep -rIL 'ENABLE ROW LEVEL SECURITY' supabase/migrations/*.sql 2>/dev/null
```
