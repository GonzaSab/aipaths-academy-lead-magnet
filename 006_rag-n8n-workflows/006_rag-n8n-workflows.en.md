---
# Unique identifier linking EN/ES versions
content_id: "lead-magnets-rag-n8n-workflows"

# Locale (must match filename)
locale: "en"

# SEO & Display
title: "RAG Methods n8n Workflows"
description: "Ready-to-import n8n workflows showing the 4 RAG methods to connect AI agents with your data."

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
estimatedSetupTime: "5 minutes"

# Prerequisites
prerequisites:
  - n8n installed (cloud or self-hosted)
  - OpenAI API key

# Files included
files:
  - path: workflows/
    description: n8n workflow JSON files
  - path: sales_january_2026.csv
    description: Sample sales data for testing
---

# RAG Methods n8n Workflows

Ready-to-import n8n workflow demonstrating the 4 RAG methods for connecting AI agents to your data.

## What's Included

- **RAG_N8N.json** - Complete n8n workflow with all 4 methods
- **sales_january_2026.csv** - Sample data to test with

## The 4 RAG Methods

1. **Filters** - Simple exact-match searches
2. **SQL Queries** - Calculations and aggregations
3. **Full Context** - Complete document reading
4. **Vector Database** - Semantic search for large datasets

## Quick Setup

1. Download and extract the ZIP file
2. Open your n8n instance
3. Go to Workflows > Import from File
4. Select `RAG_N8N.json`
5. Add your OpenAI API key
6. Test with the included CSV data

## Sample Questions

Try these with the included sales data:

- "How many Laptop Pro did we sell?"
- "Show me sales from January 15th"
- "What's the total revenue for Wireless Mouse?"
- "Which product sold the most units?"

## When to Use Each Method

| Method | Best For |
|--------|----------|
| Filters | Simple lookups by name, ID, or date |
| SQL | Totals, averages, rankings |
| Full Context | Summaries, short documents |
| Vectors | Large knowledge bases, FAQs |

## Related Resources

- [Complete RAG Guide](https://www.aipaths.academy/docs/rag-methods-guide)
- [YouTube Tutorial](https://www.youtube.com/@aipaths)
