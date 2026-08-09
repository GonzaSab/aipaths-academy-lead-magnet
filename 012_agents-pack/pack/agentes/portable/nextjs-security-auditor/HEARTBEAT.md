# Heartbeat (checklist)

Este perfil es **on-demand**: no tiene latido propio ni scheduler. La lista de abajo es
para la auditoría periódica, si el humano la agenda.

- [ ] ¿Cambió la versión de `next`, `react` o la librería de auth desde la última pasada?
- [ ] ¿Hay advisories nuevos para las dependencias críticas? (`npm audit`)
- [ ] ¿Aparecieron Server Actions o API routes nuevas sin chequeo de sesión?
- [ ] ¿Alguna tabla nueva quedó sin RLS habilitado?
- [ ] ¿Los security headers de `next.config.*` siguen en su lugar tras el último deploy?
- [ ] ¿Entró algún archivo sensible a la historia desde la última auditoría?
