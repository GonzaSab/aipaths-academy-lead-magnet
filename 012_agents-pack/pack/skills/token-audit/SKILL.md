---
name: token-audit
description: Auditar y reducir el consumo de tokens de un proyecto agéntico. Disparar con "mi agente gasta mucho", "optimizar contexto", "reducir tokens".
---

# Token Audit

Auditá cómo un proyecto gasta contexto y devolvé fixes accionables. Sé breve.

## Pasos
1. Revisá qué se carga **siempre** (system prompt, AGENTS.md, reglas globales).
   Todo lo que esté ahí y no sea imprescindible se paga en cada tarea: es una fuga.
2. Revisá skills: ¿cuerpos enormes que deberían dividirse? ¿descripciones que son
   resúmenes en vez de reglas de ruteo?
3. Revisá exploraciones pesadas hechas en el hilo principal que deberían ser subagentes.
4. Revisá memoria/journal: ¿crece sin poda? ¿se carga entero en vez de por lección?

## Salida (formato fijo)
- **Top fugas** (máx 5), ordenadas por impacto.
- Para cada una: qué la causa y el fix en una línea.
- Estimado grueso de tokens ahorrados por tarea, o "no medible aún".

## Evitar
No reescribas todo. Señalá las 3-5 palancas más grandes y pará.
