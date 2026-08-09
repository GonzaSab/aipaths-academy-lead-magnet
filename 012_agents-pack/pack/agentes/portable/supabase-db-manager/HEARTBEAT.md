# Heartbeat (checklist)

Este perfil es **on-demand**: no tiene latido propio ni scheduler. La lista de abajo es
para una revisión periódica del esquema, si el humano la agenda.

- [ ] ¿Alguna tabla quedó sin RLS habilitado?
- [ ] ¿Alguna tabla con RLS quedó sin políticas para las 4 operaciones?
- [ ] ¿Hay migraciones sin sección `down`?
- [ ] ¿El esquema local y el remoto están sincronizados? (`supabase db diff`)
- [ ] ¿Los tipos de TypeScript reflejan el esquema actual?
- [ ] ¿Aparecieron queries lentas nuevas que justifiquen un índice?
