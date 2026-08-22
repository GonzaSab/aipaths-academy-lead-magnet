# Integración CRM (webhook genérico)

Patrón CRM-agnóstico: el bot no habla directamente con HubSpot, Pipedrive ni ningún CRM
puntual. Emite eventos JSON a un webhook saliente (`CRM_WEBHOOK_URL`) y una capa
intermedia (n8n, Zapier, Make, o tu propio endpoint) traduce eso al CRM que uses. Así el
template no queda atado a un SDK específico ni obliga a nadie a usar el CRM que vos elegís.

## Cómo copiarlo

1. Copiá `events.py` a `app/events.py` (mismo nivel que `app/sender.py`). No necesitás
   instalar nada aparte — `httpx` ya es dependencia base del template (la usa también
   `app/escalation.py`).
2. Seteá `CRM_WEBHOOK_URL` en tu `.env` (ya existe en `.env.example`, opcional). Si la
   dejás vacía, `emit_event` no hace nada — el bot funciona igual sin CRM conectado.

## Eventos recomendados

`CRMEvent` en `events.py` define cuatro: `lead_creado`, `escalado_a_humano`,
`pedido_actualizado`, `opt_out`. Podés emitir cualquier string como `event_type`, pero
usar estos nombres te deja consistencia si conectás varias integraciones a la vez.

Cada evento manda `{event_type, wa_id, timestamp, payload}` por POST. El `wa_id` va en
claro (no hasheado): la capa intermedia lo necesita para crear o matchear el contacto real
en el CRM. Si tu receptor del webhook es solo para métricas internas y no necesitás el
número, hasheálo del otro lado antes de guardarlo.

## Ejemplo de uso: `escalar_humano` en `app/agent/tools.py`

`escalar_humano` ya notifica a un humano vía `ESCALATION_WEBHOOK_URL` (ver
[docs/08-escalado-a-humano.md](../../docs/08-escalado-a-humano.md)) — eso es urgente,
"alguien tiene que responder ya". Si además querés que quede registrado como evento en
tu CRM para seguimiento posterior, sumá el emit acá — son dos destinos distintos, no
hace falta elegir uno:

```python
from app.escalation import notify_human
from app.events import CRMEvent, emit_event


def escalar_humano(ctx: RunContext[BotDeps], motivo: str) -> str:
    notify_human(ctx.deps.wa_id, motivo)
    emit_event(CRMEvent.ESCALADO_A_HUMANO, ctx.deps.wa_id, {"motivo": motivo})
    return f"Listo, aviso a una persona del equipo (motivo: {motivo}). En breve te escriben."
```

Mismo patrón para `buscar_pedido` (emitir `pedido_actualizado` si tu integración real
actualiza un pedido) o para un tool nuevo de captura de lead (`lead_creado`).

## Conectar un CRM real: 3 ejemplos con n8n/Zapier de por medio

El bot nunca habla con estas APIs directamente — siempre a través de la capa intermedia,
que recibe el POST de `CRM_WEBHOOK_URL` y decide qué hacer.

**HubSpot** (vía n8n): un workflow con un nodo Webhook (esa es tu `CRM_WEBHOOK_URL`) →
nodo HubSpot → según `event_type`, crea o actualiza un contacto (`wa_id` como
`phone`/propiedad custom) y, si es `escalado_a_humano`, crea una Task o Deal con el
`motivo` del `payload`.

**Pipedrive** (vía Zapier): trigger "Webhooks by Zapier" (Catch Hook) apuntando a la misma
URL → filtro por `event_type == "lead_creado"` → acción "Create Person" + "Create Deal" en
Pipedrive, mapeando `wa_id` al teléfono del Person.

**Chatwoot** (vía n8n, o directo): en vez de (o además de) usar `CRM_WEBHOOK_URL` para
esto, mirá `examples/escalado_chatwoot.md` — ahí el bot llama directo a la API de Chatwoot
para crear la conversación de handoff, sin pasar por n8n. Si preferís mantener todo el
patrón de eventos unificado, también podés apuntar `CRM_WEBHOOK_URL` a un workflow de n8n
que reciba el evento `escalado_a_humano` y desde ahí llame a la API de Chatwoot.

## Variable de entorno

`CRM_WEBHOOK_URL` — ya está en `.env.example`, opcional.
