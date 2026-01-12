---
# Unique identifier linking EN/ES versions
content_id: "lead-magnets-rag-n8n-workflows"

# Locale (must match filename)
locale: "es"

# SEO & Display
title: "Workflows RAG para n8n"
description: "Workflows de n8n listos para importar con los 4 métodos RAG para conectar agentes IA a tus datos."

# Category and taxonomy
category: "automation"
tags:
  - n8n
  - rag
  - ai-agents
  - automation
  - workflows

# Metadata
difficulty: "beginner"
version: "1.0.0"
published: true
order: 6
lastUpdated: "2026-01-12"
author: "AIPaths Academy"
downloadSize: "45 KB"
estimatedSetupTime: "5 minutos"

# Prerequisites
prerequisites:
  - n8n instalado (cloud o self-hosted)
  - API key de OpenAI

# Files included
files:
  - path: workflows/
    description: Archivos JSON de workflows para n8n
  - path: sales_january_2026.csv
    description: Datos de ventas de ejemplo para probar
---

# Workflows RAG para n8n

Workflow de n8n listo para importar que demuestra los 4 métodos RAG para conectar agentes IA a tus datos.

## Qué Incluye

- **RAG_N8N.json** - Workflow completo de n8n con los 4 métodos
- **sales_january_2026.csv** - Datos de ejemplo para probar

## Los 4 Métodos RAG

1. **Filtros** - Búsquedas exactas simples
2. **Consultas SQL** - Cálculos y agregaciones
3. **Contexto Completo** - Lectura de documentos completos
4. **Vector Database** - Búsqueda semántica para grandes datasets

## Instalación Rápida

1. Descarga y extrae el archivo ZIP
2. Abre tu instancia de n8n
3. Ve a Workflows > Import from File
4. Selecciona `RAG_N8N.json`
5. Agrega tu API key de OpenAI
6. Prueba con los datos CSV incluidos

## Preguntas de Ejemplo

Prueba estas con los datos de ventas incluidos:

- "¿Cuántas Laptop Pro vendimos?"
- "Muéstrame las ventas del 15 de enero"
- "¿Cuál es el ingreso total de Wireless Mouse?"
- "¿Qué producto vendió más unidades?"

## Cuándo Usar Cada Método

| Método | Mejor Para |
|--------|------------|
| Filtros | Búsquedas simples por nombre, ID o fecha |
| SQL | Totales, promedios, rankings |
| Contexto Completo | Resúmenes, documentos cortos |
| Vectores | Bases de conocimiento grandes, FAQs |

## Recursos Relacionados

- [Guía Completa de RAG](https://www.aipaths.academy/docs/rag-methods-guide)
- [Tutorial en YouTube](https://www.youtube.com/@aipaths)
