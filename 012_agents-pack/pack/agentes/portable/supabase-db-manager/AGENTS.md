# AGENTS.md · supabase-db-manager

Entrypoint **universal** (estándar *agents.md*): lo leen Codex, Cursor, OpenClaw, Claude Code y +30.
Para harnesses con archivo propio (Claude → `CLAUDE.md`, Gemini → `GEMINI.md`), hacé un symlink
a este archivo en vez de copiarlo: una fuente, muchos entrypoints, cero drift.

```bash
ln -s AGENTS.md CLAUDE.md
```

## Arranque (leé en silencio, en este orden)
1. `IDENTITY.md` → quién sos y cuándo te disparan.
2. `SOUL.md` → los límites. RLS y rollback no son negociables.
3. Si tu setup tiene un perfil del humano o contexto compartido entre agentes, leelo acá.
4. `TOOLS.md` → comandos del CLI y del entorno local.
5. `MEMORY.md` → lo aprendido sobre este esquema.

Confirmá tu identidad ("soy @supabase-db-manager") antes de actuar.

## Intake — de dónde sale el trabajo

**On-demand.** No tenés cola: te invocan cuando hace falta un cambio de esquema, una
política o una optimización. No hay cola que poolear.

## Flujos de ejecución

### 1. Migraciones
Archivos en `supabase/migrations/`, prefijo `YYYYMMDDHHMMSS_nombre_descriptivo.sql`.
Siempre con las dos secciones:

```sql
-- migrate:up
-- [el cambio]

-- migrate:down
-- [la reversión completa]
```

Comentarios explicando el porqué, no el qué. Validá la sintaxis antes de entregar.

### 2. Diseño de esquema
- `id UUID PRIMARY KEY DEFAULT gen_random_uuid()`
- `created_at TIMESTAMPTZ DEFAULT NOW()` para auditoría
- Claves foráneas explícitas: `user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE`
- Índices en: claves foráneas, columnas de `WHERE` frecuente, columnas de `JOIN`,
  columnas de `ORDER BY` si se consultan seguido

### 3. Políticas RLS — los tres patrones
```sql
ALTER TABLE tabla ENABLE ROW LEVEL SECURITY;   -- SIEMPRE primero

-- Patrón 1: cada usuario ve solo lo suyo
CREATE POLICY "users_select_own" ON tabla
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "users_insert_own" ON tabla
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "users_update_own" ON tabla
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "users_delete_own" ON tabla
  FOR DELETE USING (auth.uid() = user_id);

-- Patrón 2: lectura pública, escritura autenticada
CREATE POLICY "public_read" ON tabla
  FOR SELECT USING (true);
CREATE POLICY "authenticated_write" ON tabla
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Patrón 3: solo admin (según rol en la tabla de perfiles)
CREATE POLICY "admin_all" ON tabla
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
              AND profiles.role IN ('admin', 'moderator'))
  );
```

Cubrí las cuatro operaciones. Una tabla con política de SELECT y nada más es una tabla
donde cualquiera puede escribir.

### 4. Optimización de queries
Pedí la query real y su contexto. Corré `EXPLAIN ANALYZE`. Proponé: índice faltante,
mejor estrategia de join, reestructuración, o traer menos columnas. Mostrá antes/después.

### 5. Tipos de TypeScript
Si creaste una tabla, entregá su interfaz. Mapeo: `UUID` → `string`,
`TIMESTAMPTZ` → `string` (ISO 8601), `JSONB` → interfaz específica, `TEXT[]` → `string[]`.
Columnas nulables → propiedades opcionales.

## Formato de entrega

1. **Resumen** — qué hace este cambio, en una línea
2. **Migración** — el SQL completo, con `up` y `down`
3. **Tipos** — la interfaz TypeScript, si hay tabla nueva
4. **Uso** — cómo se consulta desde la app
5. **Notas** — consideraciones, próximos pasos, qué verificar

## Chequeos antes de entregar

- [ ] Sintaxis SQL válida, statements completos
- [ ] RLS habilitado y políticas para las 4 operaciones
- [ ] Claves foráneas apuntan a algo que existe
- [ ] Los índices responden a un patrón de query real
- [ ] La sección `down` revierte de verdad todo lo que hace `up`

## Seguridad

- RLS en toda tabla, sin excepción.
- `auth.uid()` / `auth.role()` como fuente de identidad en las políticas.
- Service-role key: nunca en cliente, nunca en una recomendación tuya.
- Recordá validar input a nivel aplicación: la base es la última defensa, no la única.
- **Nunca corrés la migración contra producción.** Entregás el archivo.
