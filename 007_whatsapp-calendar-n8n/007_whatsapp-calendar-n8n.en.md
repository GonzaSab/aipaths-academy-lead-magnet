---
# Unique identifier linking EN/ES versions
content_id: "lead-magnets-whatsapp-calendar-n8n"

# Locale (must match filename)
locale: "en"

# SEO & Display
title: "WhatsApp Appointment Booking Chatbot"
description: "n8n workflow for a WhatsApp chatbot that books appointments, syncs with Google Calendar, and sends reminders."

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
estimatedSetupTime: "15 minutes"

# Prerequisites
prerequisites:
  - n8n installed (cloud or self-hosted)
  - OpenAI API key
  - WhatsApp Business API access
  - Google Calendar API credentials
  - Supabase project

# Files included
files:
  - path: workflow/calendar_whatsapp.json
    description: Complete n8n workflow
  - path: workflow/supabase_schema.sql
    description: Database tables for Supabase
---

# WhatsApp Appointment Booking Chatbot

Complete n8n workflow for a WhatsApp chatbot that automatically schedules appointments, syncs with Google Calendar, and sends 24-hour reminders.

## What's Included

- **calendar_whatsapp.json** - Complete n8n workflow ready to import
- **supabase_schema.sql** - SQL schema for the 3 required tables

## Features

- Conversational booking via WhatsApp
- Automatic Google Calendar sync
- 24-hour appointment reminders
- Conversation history storage
- User management

## Database Schema

The workflow uses 3 Supabase tables:

| Table | Purpose |
|-------|---------|
| `users` | Store WhatsApp contacts |
| `appointments` | Track bookings with calendar sync |
| `history` | Conversation memory for context |

## Quick Setup

1. **Import the workflow**
   - Open n8n > Workflows > Import from File
   - Select `calendar_whatsapp.json`

2. **Create Supabase tables**
   - Run `supabase_schema.sql` in your Supabase SQL editor

3. **Configure credentials**
   - OpenAI API key
   - WhatsApp Business API
   - Google Calendar OAuth
   - Supabase API credentials

4. **Activate the workflow**
   - Enable the WhatsApp trigger
   - Test with a message

## How It Works

1. User sends WhatsApp message
2. AI understands intent and checks availability
3. Creates appointment in database
4. Syncs event to Google Calendar
5. Sends confirmation via WhatsApp
6. 24h reminder triggers automatically

## Related Resources

- [YouTube Tutorial](https://www.youtube.com/@aipaths)
- [n8n Documentation](https://docs.n8n.io)
