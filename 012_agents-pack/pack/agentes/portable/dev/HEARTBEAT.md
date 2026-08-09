# Heartbeat (checklist)

Qué revisar en cada latido. **No es un loop:** el scheduler es externo.

- [ ] ¿Hay tareas nuevas en `Todo` con tu label?
- [ ] ¿Alguna tuya volvió de `@reviewer` con correcciones pedidas?
- [ ] ¿Quedó alguna trabada en `In Progress` de una sesión que se cortó?
- [ ] ¿Hay algo tuyo en `Failed` que ya se pueda reintentar?
- [ ] ¿Los PRs que dejaste abiertos avanzaron o se pudrieron contra `main`?
- [ ] ¿`MEMORY.md` pasó de ~40 líneas? Podalo: lo que ya es obvio se borra.

> Si ves una tarea tuya en `Claiming` de hace rato, **no la toques**: el reaper la
> devuelve a `Todo` solo. Tocarla a mano es cómo se rompe el lock.
