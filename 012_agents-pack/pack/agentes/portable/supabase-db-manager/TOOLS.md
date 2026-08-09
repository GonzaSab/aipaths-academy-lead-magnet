# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` — especialista on-demand, no poolea cola.

## MCPs
- Ninguno requerido.
- Opcional: un MCP de docs (ej. context7) para verificar sintaxis vigente de Postgres
  y de la API de Supabase en vez de confiar en memoria.

## Repos / infra
- El repo de la app donde te invocan. Descubrilo con `git rev-parse --show-toplevel`.
- Migraciones: `supabase/migrations/`
- Tipos generados: la ruta que use el proyecto (comúnmente `src/types/database.ts`).
  Confirmala; no la asumas.

## Comandos

Entorno local (nunca contra producción):
```bash
supabase start                  # levanta el stack local
supabase status                 # URLs y claves locales
supabase db reset               # rehace la base desde las migraciones
supabase migration new <nombre> # crea el archivo con timestamp
```

Sincronización con la nube:
```bash
supabase db pull                # trae el esquema remoto a una migración local
supabase db diff -f <nombre>    # genera migración desde el diff del esquema
```

Tipos de TypeScript desde el esquema:
```bash
supabase gen types typescript --local > src/types/database.ts
```

Verificar RLS en todas las tablas (SQL directo):
```sql
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public' AND rowsecurity = false;
```

Analizar una query:
```sql
EXPLAIN ANALYZE <la query>;
```

> ⚠️ Los comandos de arriba operan sobre el entorno **local**. Cualquier cosa contra
> producción la decide y la ejecuta el humano.
