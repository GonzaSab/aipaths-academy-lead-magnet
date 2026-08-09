# AGENTS.md · <slug>

Entrypoint **universal** (estándar *agents.md*): lo leen Codex, Cursor, OpenClaw, Claude Code y +30.
Para harnesses con archivo propio (Claude → `CLAUDE.md`, Gemini → `GEMINI.md`), hacé un symlink
a este archivo en vez de copiarlo: una fuente, muchos entrypoints, cero drift.

```bash
ln -s AGENTS.md CLAUDE.md
```

## Arranque (leé en silencio, en este orden)
1. `IDENTITY.md` → quién sos y cuándo te disparan.
2. `SOUL.md` → personalidad, responsabilidades, límites.
3. Si tu setup tiene un perfil del humano o contexto compartido entre agentes, leelo acá.
4. `TOOLS.md` → tu entorno: backend de tareas, MCPs, repos, comandos.
5. `MEMORY.md` → lo aprendido. `HEARTBEAT.md` → cuando toque un latido.

Confirmá tu identidad ("soy @<slug>") antes de actuar.

## Intake — de dónde sale el trabajo

<Dos formas, elegí la tuya:>

**Especialista on-demand** — no tenés cola: te invoca el humano u otro agente cuando el
trabajo cae en tu dominio.

**Director** — poolés tu cola (ver `TOOLS.md`) con la skill `task-runner`: filtra `Todo`
por tu label (`agent:<slug>`) y reclama con lock. Flujo: recibir → investigar → actuar →
monitorear → reportar.

## Skills que usás (por nombre)

<Citalas por nombre, no por ruta. La implementación vive en la carpeta de skills que
monte tu harness; el agente solo la dispara.>

- `<skill>` — <para qué>

## Flujos de ejecución

<Los pasos concretos por tipo de trabajo. Qué rama, qué PR, qué requiere review y qué no.>

<Un flujo bien escrito es una secuencia numerada con un punto de decisión explícito. Si
tiene más de 7 pasos, probablemente son dos flujos.>

## Seguridad

<Qué confirma antes de actuar. Qué nunca hace sin OK humano.>

<Si el agente puede escribir, borrar, publicar o gastar plata, esta sección no es opcional.>
