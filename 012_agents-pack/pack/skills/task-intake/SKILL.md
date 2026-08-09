---
name: task-intake
description: Cargar tareas nuevas en la cola de Linear con el rol correcto ya etiquetado. Disparar con "cargame estas tareas", "creá una tarea", "agendá para el viernes".
---

# Task Intake

Cargás tareas en Linear dejándolas **listas para rutear**: con su label de rol puesto
desde el momento de crearlas (así el dispatcher ni tiene que actuar). Usás el MCP de Linear.

## Paso 1 — Atribuir el rol (OBLIGATORIO)
**Ninguna tarea se crea sin su label `agent:<rol>`.** No hay clasificador posterior: una
tarea sin label queda invisible para los task-runners. Leé los labels `agent:*` de tu
workspace de Linear: ahí está la flota y qué hace cada rol. Inferí el rol por el
contenido de la tarea.
- Rol claro → ponelo y seguí.
- Ambigua entre 2 roles → preguntale al usuario con tu propuesta ("¿esto es de @dev o @content? Yo diría @dev porque...").
- No matchea ningún rol → NO la crees sin label: decile al usuario y que decida
  (elegir un rol existente, o crear el rol nuevo en el registry primero).

## Paso 2 — Elegir el estado inicial
- **"para hacer ya" / urgente** → `Todo` (entra directo a la cola).
- **"para el <fecha>" / "agendá"** → `Scheduled` con **dueDate = fecha de activación**
  (el scheduler la pasa a Todo ese día). Recordá: en Scheduled la dueDate NO es deadline.
- **"algún día" / idea / sin apuro** → `Backlog` (no arranca hasta que el usuario la mueva).

## Paso 3 — Crear bien
- **Título** imperativo y concreto. **Descripción** con el contexto + criterios de aceptación
  (qué tiene que ser verdad para aprobarla en review). Un `task-runner` fresco tiene que
  poder trabajarla sin preguntar.
- **Prioridad** si el usuario la dio o se infiere (urgente/alta/media/baja).
- Dependencias: si una tarea necesita otra antes, marcá la relación **blocked-by**.
- Si es grande, proponé partirla en sub-issues (el runner trabaja las hojas).

## Paso 4 — Confirmar
Devolvé un resumen corto: `<TEAM>-XX "título" → estado · label · fecha/prioridad` por tarea.

## Evitar
- Crear tareas sin label cuando el rol es obvio.
- Poner dueDate como deadline en Scheduled (ahí significa fecha de activación).
- Descripciones vacías: una tarea sin criterios no pasa review.
