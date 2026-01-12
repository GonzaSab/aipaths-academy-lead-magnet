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
tags: [n8n, rag, ai-agents, automation, workflows]
difficulty: beginner
version: 1.0.0
published: true
order: 6
lastUpdated: '2026-01-12'
author: AIPaths Academy
downloadSize: '45 KB'
estimatedSetupTime: '5 minutos'
prerequisites:
  - n8n instalado (cloud o self-hosted)
  - API key de OpenAI
files:
  - path: workflows/
    description: Archivos JSON de workflows para n8n
  - path: sales_january_2026.csv
    description: Datos de ventas de ejemplo para probar
---

## Qué Incluye

Este pack contiene el workflow de n8n que demuestra los 4 métodos RAG para conectar agentes IA a tus datos:

1. **Filtros** - Búsquedas exactas simples
2. **Consultas SQL** - Cálculos y agregaciones
3. **Contexto Completo** - Lectura de documentos completos
4. **Vector Database** - Búsqueda semántica para grandes datasets

## Instalación Rápida

1. **Descarga y extrae** el archivo ZIP

2. **Importa en n8n**
   - Abre tu instancia de n8n
   - Ve a Workflows > Import from File
   - Selecciona `RAG_N8N.json`

3. **Configura credenciales**
   - Agrega tu API key de OpenAI
   - Conecta tu fuente de datos (o usa el CSV incluido)

4. **Pruébalo**
   - Abre el workflow
   - Click en "Test workflow"
   - Haz preguntas sobre tus datos

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

- [Guía Completa de RAG](https://www.aipaths.academy/docs/rag-methods-guide) - Explicación detallada de cada método
- [Tutorial en YouTube](https://www.youtube.com/@aipaths) - Video paso a paso

## ¿Necesitas Ayuda?

- **Discord**: discord.gg/9pB5pPbf2m
- **Email**: support@aipaths.academy
