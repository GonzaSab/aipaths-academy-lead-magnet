---
# Unique identifier linking EN/ES versions
content_id: "lead-magnets-agents-pack"

# Locale (must match filename)
locale: "es"

# SEO & Display
title: "Agents Pack: 8 Agentes, 9 Skills y 114 Prompts"
description: "Agentes especialistas, skills y una librería de prompts en markdown plano. Andan en Claude Code, Codex, Cursor, OpenClaw o el harness que uses. No hay nada que instalar."

# Category and taxonomy
category: "ai-agents"
tags:
  - ai-agents
  - claude-code
  - skills
  - prompts
  - automation

# Metadata
difficulty: "intermediate"
version: "1.0.0"
published: true
coverImage: "/images/resources/012_agents-pack/thumb.png"
order: 12
lastUpdated: "2026-08-09"
author: "AIPaths Academy"
downloadSize: "200 KB"
estimatedSetupTime: "5 minutos"

# Prerequisites
prerequisites:
  - Un agente de código, el que uses (Claude Code, Codex, Cursor, OpenClaw, Gemini CLI)
  - Nada más, es todo markdown plano

# Files included
files:
  - path: pack/agentes/claude-code/
    description: Los 8 especialistas en formato Claude Code, listos para copiar
  - path: pack/agentes/portable/
    description: Los mismos 8 en formato agents.md, más el pipeline de 3 y el template
  - path: pack/skills/
    description: 9 skills, incluida la cola de tareas sobre Linear con su SETUP
  - path: pack/prompts/
    description: 114 prompts por dominio, más el método para escribir los tuyos
  - path: pack/README.md
    description: Guía de instalación y recorrido por el pack
---

# Agents Pack

Tres cosas listas para usar con cualquier agente de código: **agentes especialistas**, **skills** y una **librería de prompts**.

Todo es markdown plano. No hay nada que instalar, nada que compilar y ningún runtime atado a un proveedor.

## Qué Incluye

- **8 agentes especialistas** — en formato Claude Code y en formato portable (*agents.md*), que leen Codex, Cursor, OpenClaw y otros 30 clientes
- **Un pipeline de 3 agentes** con cola propia: planner, dev y reviewer
- **9 skills** — seis andan solas, tres arman una cola de tareas compartida sobre Linear
- **114 prompts** organizados por dominio, con el método para escribir los tuyos
- **Un template vacío** para armar tu propio agente desde cero

## Los 8 Especialistas

| Agente | Qué hace |
|---|---|
| `code-reviewer` | Revisa un diff antes de mergear. Agnóstico de stack |
| `git-commit-guardian` | Revisa el diff antes de que salga del repo: secretos, basura, mensaje |
| `codebase-cleanup-auditor` | Cataloga lo que sobra en el repo, sin borrar nada |
| `dependency-auditor` | Triagea dependencias y dice qué actualizar primero |
| `docs-writer` | Escribe docs leyendo el código, no el README viejo |
| `nextjs-security-auditor` | Audita una app Next.js en 8 categorías críticas |
| `supabase-db-manager` | Esquema, migraciones y políticas RLS sobre Postgres |
| `playwright-browser-tester` | Abre una URL en Chromium y reporta lo evidente |

Los ocho son especialistas **on-demand**: no corren solos ni poolean una cola. Los invocás vos, o los invoca tu agente principal cuando el trabajo cae en su dominio.

## El Pipeline de 3

Aparte de los especialistas, hay tres agentes que cierran el circuito de punta a punta sobre las skills de cola:

```text
idea → @planner → Todo → @dev → In Review → @reviewer → Done
```

| Agente | Qué aporta |
|---|---|
| `planner` | Interroga la idea hasta que la tarea sea ejecutable sin preguntas |
| `dev` | Ejecuta, deja evidencia verificable y aprende el codebase sesión a sesión |
| `reviewer` | Verifica de verdad: aprueba, o rebota con el motivo concreto |

## Las 9 Skills

Seis funcionan sin setup: `prompt-builder`, `onboarding-codebase`, `escribir-tests`, `preparar-pr`, `release` y `token-audit`.

Las otras tres arman una cola de tareas sobre Linear para que uno o varios agentes trabajen de una cola compartida sin pisarse: `task-intake`, `task-runner` y `task-review`. Necesitan cuenta de Linear y el MCP configurado; el paso a paso está en `skills/_cola-linear/SETUP.md`, con un script que crea los estados en un comando.

Lo que hace que esa cola no se rompa son dos piezas que casi nadie implementa: un **lock con lease** y un **reaper** que devuelve a la cola los leases huérfanos. Sin el reaper, una instancia que muere justo después de reclamar una tarea la deja invisible para todos los agentes, para siempre.

## Los 114 Prompts

| Carpeta | Prompts | Qué cubre |
|---|---|---|
| `desarrollo/` | 39 | Generar código, debugging, testing y review |
| `negocio/` | 47 | Análisis de datos, research, planificación |
| `marketing/` | 28 | SEO y contenido, email, redes y ads |
| `automatizacion/` | — | Workflows de n8n |

Más `metodo.md` (cómo se escribe un prompt que funciona) y `constructor.md` (un wizard que te lo arma preguntando).

## Instalación Rápida

**Si usás Claude Code**, copiá los agentes y ya los tenés:

```bash
cp agentes/claude-code/*.md ~/.claude/agents/
```

**Si usás otro harness**, la carpeta `agentes/portable/` tiene los mismos ocho con el set de archivos del estándar *agents.md*.

**Las skills** van donde tu harness las busque: `~/.claude/skills`, `~/.agents/skills` o la carpeta que declare tu config.

**Los prompts** se leen y se copian. No necesitan instalación.

## La Idea de Fondo

Dos principios atraviesan todo el pack:

**Un archivo por vez.** Las skills y los agentes están partidos en tronco y ramas: lo que siempre se lee es corto, y el detalle se carga solo cuando hace falta. Cargar 2.900 líneas de prompts para usar uno es tirar contexto a la basura.

**Markdown plano, cero lock-in.** Nada acá depende de un modelo, un proveedor ni un harness. Cambiás de herramienta y esto viaja con vos.

## Idioma y Licencia

Todo el pack está en español. Los agentes y las skills son originales, bajo licencia MIT. Los prompts son una compilación de material publicado como gratuito por sus autores, traducido al español y con atribución al origen en `prompts/SOURCES.md`.

## Recursos Relacionados

- [Canal de YouTube](https://www.youtube.com/@aipaths)
- [Curso completo de agentes](https://www.aipaths.academy/es/openclaw-course)
