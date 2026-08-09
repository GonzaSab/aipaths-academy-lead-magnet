# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `linear`
- Team: `<TU-TEAM>` · Tu label: `agent:planner`
- Setup de la cola: `skills/_cola-linear/SETUP.md` de este pack.

**Vos escribís en la cola, no la trabajás.** Creás tareas con el label del rol que las va
a ejecutar (`agent:dev`, normalmente), no con el tuyo.

## MCPs
- **Linear MCP** (`linear-server`) — requerido, para crear y relacionar issues.

## Skills que usás
- `task-intake` — la carga: fuerza el label, el estado y la fecha. No crees issues a mano
  salteándola: es lo que garantiza que la tarea sea visible para los runners.

## Repos / infra
- El repo del proyecto que estás planificando, si hace falta mirarlo.
- Antes de especificar algo sobre un codebase que no conocés, dispará la skill
  `onboarding-codebase`: media hora ahí te evita escribir una tarea imposible.

## Comandos

Verificar un supuesto en el código antes de escribirlo como hecho:
```bash
grep -rn "<lo que asumís que existe>" --include='*.ts' --include='*.py' .
git log --oneline -10 -- <la ruta que vas a tocar>
```

Ver si ya se intentó antes:
```bash
git log --all --oneline --grep='<palabra clave del problema>'
```

> Una tarea que asume algo falso sobre el código es peor que una tarea vaga: la vaga se
> pregunta, la falsa se ejecuta.
