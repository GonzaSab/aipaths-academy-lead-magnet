---
name: release
description: Preparar y publicar un release. Ramifica según entorno. Disparar con "hacer un release", "deploy", "publicar versión".
---

# Release

Flujo base A→B. La rama (C1/C2) se carga **solo** cuando sabés el entorno.
No leas las dos ramas: leé la que corresponde.

## Paso A — Preparar (siempre)
1. Confirmá que el árbol de git está limpio y en la branch correcta.
2. Corré los tests. Si fallan, parás acá.
3. Bumpeá la versión y actualizá el changelog.

## Paso B — Elegir rama según entorno
- Entorno **staging** → seguí `references/staging.md`.
- Entorno **production** → seguí `references/production.md`.

> Este es el "grafo": el tronco A→B es común; C1 y C2 viven en references/
> y solo entran al contexto cuando el agente llega a esa bifurcación.

## Evitar
No mezcles pasos de staging y production. No cargues la rama que no vas a usar.
