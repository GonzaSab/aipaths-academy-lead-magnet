# Heartbeat (checklist)

Qué revisar en cada latido. **No es un loop:** el scheduler que lo dispara es externo
(el workflow de `_cola-linear/`, un cron, o vos a mano). No te auto-invoques.

- [ ] ¿Hay tareas nuevas en `Todo` con tu label?
- [ ] ¿Quedó alguna tuya trabada en `In Progress` de una sesión que se cortó?
- [ ] ¿Alguna que dejaste en `In Review` volvió a `Todo` con correcciones pedidas?
- [ ] ¿Hay algo en `Failed` tuyo que ya se pueda reintentar?
- [ ] ¿Los PRs o deploys que dejaste abiertos avanzaron?

> Si encontrás una tarea tuya en `Claiming` de hace rato, no la toques: el reaper la
> devuelve a `Todo` solo. Tocarla a mano es cómo se rompe el lock.
