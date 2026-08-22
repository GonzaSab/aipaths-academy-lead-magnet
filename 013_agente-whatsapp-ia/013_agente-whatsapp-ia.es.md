---
# Unique identifier linking EN/ES versions
content_id: "lead-magnets-agente-whatsapp-ia"

# Locale (must match filename)
locale: "es"

# SEO & Display
title: "Agente de WhatsApp con IA (Template en Python)"
description: "Punto de partida productivo para armar tu bot de WhatsApp con IA: webhook, cola, worker, un agente con herramientas y los guardrails que un bot real necesita desde el día uno."

# Category and taxonomy
category: "templates"
tags:
  - whatsapp
  - ai-agents
  - python
  - openai
  - automation
  - templates

# Metadata
difficulty: "intermediate"
version: "1.0.0"
published: true
coverImage: "/images/resources/013_agente-whatsapp-ia/thumb.png"
order: 13
lastUpdated: "2026-08-22"
author: "AIPaths Academy"
downloadSize: "205 KB"
estimatedSetupTime: "1-2 horas"

# Prerequisites
prerequisites:
  - Cuenta de Meta Business + app en Meta for Developers (gratis, con número de prueba)
  - Cuenta de OpenAI (pago por uso, tokens)
  - Python 3.11+ y uv instalados
  - Docker (para levantar Redis y Postgres en local)

# Files included
files:
  - path: app/
    description: El bot en sí — webhook, cola/worker, agente con herramientas y storage (Redis + Postgres)
  - path: docs/
    description: Arquitectura, configuración de Meta, pricing, despliegue, anti-patrones y checklist de pre-lanzamiento
  - path: examples/
    description: Piezas opcionales — audio/transcripción, integración con CRM, WhatsApp Flows, escalado a Chatwoot
  - path: tests/
    description: Tests con pytest, sin infraestructura externa (fakeredis)
  - path: MANUAL-DE-USUARIO.md
    description: Qué cuentas crear, en qué orden, y qué variables vas a necesitar de cada una
  - path: AGENTS.md
    description: Para que un agente de código (Claude Code, Cursor) te arme el setup preguntándote lo justo
  - path: README.md
    description: Punto de entrada — qué es esto, qué no es, y cómo arrancar
---

## Por qué este template

Si hoy contestás WhatsApp vos — pedidos, turnos, consultas repetidas — cada mensaje nuevo es tiempo tuyo que no vuelve. Un bot de WhatsApp con IA bien armado no reemplaza la conversación real: se encarga de lo repetitivo y te deja a vos las decisiones. Para eso hace falta más que un prompt suelto conectado a la API de Meta — hace falta cola para no perder mensajes, dedupe para no responder dos veces lo mismo, y un camino claro para escalar a un humano cuando el bot no puede.

Este template no es un tutorial de la consola de Meta — esa UI cambia seguido. Es la arquitectura de producción ya resuelta: webhook, cola, worker, agente con herramientas y los guardrails que un bot real necesita desde el día uno (firma verificada, dedupe, debounce, rate limit, logs sin datos personales en claro). Vos ponés tus herramientas y tu negocio.

## Qué incluye

- **Arquitectura de producción funcionando** — recibís mensajes, los procesás en cola (nunca dentro del webhook), el agente responde con herramientas, y guardás historial + auditoría en Postgres.
- **Manual de usuario** con el orden exacto de cuentas a crear (Meta Business, app de Meta for Developers, OpenAI, Railway) y qué variable de entorno sale de cada una.
- **Ruta de construcción documentada** — texto simple → arquitectura de producción → Flows → escalado a humano → audio → CRM → producción, sin saltar pasos.
- **Piezas opcionales listas para copiar** — transcripción de audio, WhatsApp Flows (formularios nativos), integración con CRM, escalado a Chatwoot.
- **Los errores que ya cometimos, documentados** — `docs/05-anti-patrones.md` y el checklist de `docs/06-checklist-pre-lanzamiento.md` existen para que tu número no termine bloqueado en la primera semana.
- **Setup guiado por agente de código** — abrís el repo con Claude Code o Cursor, le decís que lea `AGENTS.md`, y te arma el `.env` y los módulos que corresponden a tu caso.

## Cómo funciona

1. Meta manda el mensaje a tu webhook (FastAPI) — se verifica la firma y se encola, nada se procesa en la request.
2. Un worker (RQ + Redis) toma el mensaje, aplica debounce (para no responder a cada mensaje suelto de una ráfaga) y dedupe.
3. El agente (Pydantic AI + OpenAI) responde usando las herramientas que vos definiste en `app/agent/tools.py` — tus pedidos, tu calendario, tu CRM.
4. Todo queda en Postgres: historial de conversación y auditoría.
5. Si el bot no puede resolverlo, escala a un humano por el canal que configures (Slack, Discord, n8n, Zapier).

## Antes de mostrárselo a un cliente real

Un bot sin escalado a humano configurado no es un bot, es un riesgo. `docs/08-escalado-a-humano.md` no es opcional: es el paso previo a que cualquier persona real le escriba a tu número. Lo mismo con `docs/07-entornos-test-vs-produccion.md` — desarrollá y probá siempre con el número de prueba de Meta, nunca con el de producción.

## Recursos relacionados

- [Video de referencia de este template](https://www.youtube.com/watch?v=ANsWFx_yvfs&list=PLItELtCfBA389ShH6qJOUkjZdRsbTQg44&index=25)
- [Documentación de la API de WhatsApp Cloud (Meta)](https://developers.facebook.com/docs/whatsapp/cloud-api)
