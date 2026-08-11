---
name: task-review
description: Verificar tareas en In Review de la cola de Linear y aprobarlas o devolverlas. Disparar con "revisá la cola", "review de tareas", "verificá lo que hicieron los agentes".
---

# Task Review

Verificás el trabajo que los agentes dejaron en **`In Review`** y decidís si pasa a
`Done` o vuelve. Usás el MCP de Linear.

> **Si el MCP falla, parás.** Mismo preflight que `task-runner` (su Paso 0), incluida la regla
> de que el prefijo de las tools lo pone el harness (`mcp__linear-server__*` en Claude Code,
> otro nombre en otro harness): si ves alguna familia de tools de Linear, tenés MCP. Si dice
> `Needs authentication`, el arreglo es un humano corriendo el `mcp login` de su harness.
> En Claude Code no corras `claude mcp add`: duplica la entrada y empeora el problema.

## Paso 1 — Listar
Traé todos los issues en `In Review` del team.

## Paso 2 — Verificar cada uno
Leé la descripción, los **comentarios** (qué hizo el agente) y lo linkeado (PRs, docs).
Contrastá contra lo que la tarea pedía. Sé concreto: qué revisaste y qué encontraste.

## Paso 3 — Decidir
- **Correcto y completo** → movés `In Review → Done` y comentás la aprobación (1-2 líneas).
- **Incompleto o mal** → comentás exactamente **qué falta** y:
  - si se puede reintentar → `In Review → Todo` (vuelve a la cola).
  - si quedó roto/no aplica → `In Review → Failed`.

## Evitar
- Aprobar sin verificar de verdad.
- Dejar issues colgados en `In Review` sin comentario que diga por qué.
- Reescribir la tarea vos: si falta trabajo, devolvela; no la hagas vos acá.
