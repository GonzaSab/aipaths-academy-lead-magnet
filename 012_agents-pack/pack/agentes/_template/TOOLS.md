# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` | `linear` | `notion` | el que uses
- Detalle: <si es una cola, el team y el label (`agent:<slug>`); si no, poné `none`>

## MCPs
- <MCP y para qué lo usa. Ej: "Linear MCP: leer y mover tareas con label agent:<slug>">

Regla: **lo que ejecuta algo vivo va en un MCP, no en el prompt del agente.** Así cambiar
de modelo no te toca las capacidades.

## Repos / infra
- <qué repos toca, qué paths, qué comandos de build o deploy>
- Descubrí la raíz con `git rev-parse --show-toplevel`. **No hardcodees rutas absolutas:**
  un `/Users/alguien/...` resuelve solo en esa máquina.

## Comandos

```bash
# los comandos concretos del entorno, listos para copiar
```
