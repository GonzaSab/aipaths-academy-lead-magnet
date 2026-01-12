---
title: RAG Methods n8n Workflows
description: Ready-to-import n8n workflows showing the 4 RAG methods to connect AI agents with your data.
category: automation
tags: [n8n, rag, ai-agents, automation, workflows]
difficulty: beginner
version: 1.0.0
published: true
locale: en
order: 6
lastUpdated: '2026-01-12'
author: AIPaths Academy
downloadSize: '45 KB'
estimatedSetupTime: '5 minutes'
prerequisites:
  - n8n installed (cloud or self-hosted)
  - OpenAI API key
files:
  - path: workflows/
    description: n8n workflow JSON files
  - path: sales_january_2026.csv
    description: Sample sales data for testing
---

## What's Inside

This pack contains the n8n workflow that demonstrates the 4 RAG methods for connecting AI agents to your data:

1. **Filters** - Simple exact-match searches
2. **SQL Queries** - Calculations and aggregations
3. **Full Context** - Complete document reading
4. **Vector Database** - Semantic search for large datasets

## Quick Setup

1. **Download and extract** the ZIP file

2. **Import to n8n**
   - Open your n8n instance
   - Go to Workflows > Import from File
   - Select `RAG_N8N.json`

3. **Configure credentials**
   - Add your OpenAI API key
   - Connect your data source (or use the included CSV)

4. **Test it**
   - Open the workflow
   - Click "Test workflow"
   - Ask questions about your data

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

- [Complete RAG Guide](https://www.aipaths.academy/docs/rag-methods-guide) - Deep dive into each method
- [YouTube Tutorial](https://www.youtube.com/@aipaths) - Step-by-step video walkthrough

## Need Help?

- **Discord**: discord.gg/9pB5pPbf2m
- **Email**: support@aipaths.academy
