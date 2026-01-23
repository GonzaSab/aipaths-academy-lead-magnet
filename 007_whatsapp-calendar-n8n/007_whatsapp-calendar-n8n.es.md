---
# Unique identifier linking EN/ES versions
content_id: "lead-magnets-whatsapp-calendar-n8n"

# Locale (must match filename)
locale: "es"

# SEO & Display
title: "Chatbot WhatsApp para Agendar Turnos"
description: "Workflow de n8n para un chatbot de WhatsApp que agenda turnos, sincroniza con Google Calendar y manda recordatorios."

# Category and taxonomy
category: "automation"
tags:
  - n8n
  - whatsapp
  - automation
  - workflows
  - ai-agents

# Metadata
difficulty: "intermediate"
version: "1.0.0"
published: true
order: 7
lastUpdated: "2026-01-23"
author: "AIPaths Academy"
downloadSize: "50 KB"
estimatedSetupTime: "15 minutos"

# Prerequisites
prerequisites:
  - n8n instalado (cloud o self-hosted)
  - API key de OpenAI
  - Acceso a WhatsApp Business API
  - Credenciales de Google Calendar API
  - Proyecto en Supabase

# Files included
files:
  - path: workflow/calendar_whatsapp.json
    description: Workflow completo de n8n
  - path: workflow/supabase_schema.sql
    description: Tablas de base de datos para Supabase
---

# Chatbot WhatsApp para Agendar Turnos

Workflow completo de n8n para un chatbot de WhatsApp que agenda turnos automáticamente, sincroniza con Google Calendar y manda recordatorios 24 horas antes.

## Qué Incluye

- **calendar_whatsapp.json** - Workflow completo de n8n listo para importar
- **supabase_schema.sql** - Schema SQL para las 3 tablas necesarias

## Funcionalidades

- Reserva conversacional por WhatsApp
- Sincronización automática con Google Calendar
- Recordatorios 24 horas antes
- Almacenamiento de historial de conversación
- Gestión de usuarios

## Schema de Base de Datos

El workflow usa 3 tablas en Supabase:

| Tabla | Propósito |
|-------|-----------|
| `users` | Almacena contactos de WhatsApp |
| `appointments` | Registra turnos con sync a calendario |
| `history` | Memoria de conversación para contexto |

## Instalación Rápida

1. **Importar el workflow**
   - Abrir n8n > Workflows > Import from File
   - Seleccionar `calendar_whatsapp.json`

2. **Crear tablas en Supabase**
   - Ejecutar `supabase_schema.sql` en el editor SQL de Supabase

3. **Configurar credenciales**
   - API key de OpenAI
   - WhatsApp Business API
   - Google Calendar OAuth
   - Credenciales de Supabase API

4. **Activar el workflow**
   - Habilitar el trigger de WhatsApp
   - Probar con un mensaje

## Cómo Funciona

1. Usuario manda mensaje por WhatsApp
2. La IA entiende la intención y verifica disponibilidad
3. Crea el turno en la base de datos
4. Sincroniza el evento con Google Calendar
5. Manda confirmación por WhatsApp
6. El recordatorio de 24h se dispara automáticamente

## Recursos Relacionados

- [Tutorial en YouTube](https://www.youtube.com/@aipaths)
- [Documentación de n8n](https://docs.n8n.io)
