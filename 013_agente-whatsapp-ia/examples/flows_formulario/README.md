# WhatsApp Flows: formularios estructurados

Los Flows son formularios nativos de WhatsApp: pantallas con campos (texto, fecha,
dropdown, checkbox, etc.) que el usuario completa dentro del chat, sin salir de la app.
El intercambio de datos entre Meta y tu servidor va cifrado (RSA) cuando el flow es
dinámico (las pantallas siguientes dependen de lo que respondió el usuario).

## Cuándo conviene usar un Flow en vez de preguntarle al LLM campo por campo

Conviene cuando necesitás **datos estructurados y completos** antes de poder actuar:
reserva de turno (nombre + fecha + motivo), alta de cliente, dirección de envío. Un
formulario nativo es más rápido para el usuario (completa todo de una, con validación de
tipo — el date picker no deja mandar una fecha inválida) y no depende de que el LLM
parsee correctamente "el jueves que viene" o entienda un dato mal escrito.

No conviene cuando la conversación es abierta, son 1-2 preguntas sueltas, o el siguiente
paso depende mucho del tono/contexto de lo que dice el usuario — ahí el agente
conversacional (`app/agent/`) hace mejor el trabajo que un formulario rígido.

## Cómo lo maneja pywa (a alto nivel)

- Definís el flow como código Python: `FlowJSON` con una lista de `Screen`, cada una con
  un `Layout` que contiene los componentes del formulario (`TextInput`, `DatePicker`,
  `Form`, `Footer` con la acción final, etc.). pywa serializa eso al JSON que espera Meta.
- Si el flow es **dinámico** (necesita que tu servidor decida la próxima pantalla, o
  valide datos server-side), Meta cifra el intercambio de datos y pywa trae una CLI para
  generar el par de claves RSA que eso requiere.
- Si el flow es **estático** (solo junta datos y al terminar te manda el resultado
  completo), el setup es más simple — no necesitás endpoint de intercambio cifrado, solo
  recibir el resultado final como parte de un mensaje entrante normal.
- El flujo general: definís el `FlowJSON` → lo registrás/publicás en Meta (Business
  Manager o programáticamente) → le mandás al usuario un mensaje interactivo con un botón
  que abre ese flow → cuando completa, te llega como un mensaje tipo `interactive` con
  `nfm_reply` en el webhook, con las respuestas ya parseadas.

## Advertencia importante sobre `flow_reserva.py`

La sintaxis exacta de pywa para Flows (nombres de clases como `FlowJSON`, `Screen`,
`Layout`, `Form`, `TextInput`, `DatePicker`, `Footer`, `Action`) cambió entre versiones y
puede seguir cambiando — no tengo 100% de certeza de que los nombres/parámetros usados en
`flow_reserva.py` coincidan exactamente con la versión de pywa que tengas instalada
(`pywa>=4.4` en este template). Es un boceto razonable e idiomático del patrón general,
**no un copy-paste garantizado**. Antes de usarlo en producción:

1. Confirmá los nombres de clases y parámetros contra
   [pywa.readthedocs.io](https://pywa.readthedocs.io) (sección Flows), con la versión de
   pywa que tengas instalada (`pip show pywa` / `uv pip show pywa`).
2. Ajustá `flow_reserva.py` si hace falta antes de registrar el flow en Meta.
3. Cómo registrar/publicar el flow y cómo mandarlo (`create_flow`, botón interactivo tipo
   flow, etc.) tampoco está codeado acá a propósito — son llamadas al cliente pywa que
   preferimos no inventar sin verificar la firma real.

## Cómo copiarlo

1. Copiá `flow_reserva.py` a `app/flows/flow_reserva.py` (creá la carpeta `app/flows/` si
   vas a tener más de un flow).
2. Verificá la sintaxis como se explica arriba.
3. Registrá el flow en Meta (Business Manager → WhatsApp → Flows, o vía la API/CLI de
   pywa) y guardate el `flow_id` que te devuelve.
4. Mandalo desde donde tenga sentido en tu flujo — por ejemplo, un tool del agente que
   detecte "quiero reservar un turno" y dispare el mensaje interactivo con el flow, en vez
   de seguir la conversación por texto.

## Variable de entorno

No hace falta ninguna nueva más allá de `WHATSAPP_ACCESS_TOKEN` y
`WHATSAPP_PHONE_NUMBER_ID` (ya existentes). Si vas a tener varios flows y querés
parametrizar sus IDs en vez de hardcodearlos, es razonable agregar algo como
`WHATSAPP_FLOW_ID_RESERVA=` a tu `.env` — no es parte del template base, lo sumás vos
cuando lo necesites.
