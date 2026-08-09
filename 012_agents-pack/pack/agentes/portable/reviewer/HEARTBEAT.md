# Heartbeat (checklist)

Qué revisar en cada latido. **No es un loop:** el scheduler es externo.

- [ ] ¿Hay tareas en `In Review` esperando? Es tu cola.
- [ ] ¿Alguna lleva días ahí? Una cola de review que se acumula frena todo el pipeline.
- [ ] ¿Hay tareas en `Failed` que convenga triagear —reintento, replanteo o descarte?
- [ ] ¿Algún padre quedó con todas sus hijas en `Done`? Ese se puede cerrar.
- [ ] ¿Se repite el mismo motivo de rebote? Eso no se arregla tarea por tarea: va como
      lección a `MEMORY.md`, y si es de especificación, se habla con `@planner`.

> El rebote que más se repite suele ser "falta evidencia". Si pasa seguido, el problema
> está en el flujo de `@dev`, no en las tareas.
