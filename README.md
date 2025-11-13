# AIPaths Academy Lead Magnets

This repository contains downloadable resources (lead magnets) for AIPaths Academy. These are high-value content pieces designed to help developers accelerate their AI development skills.

## Purpose

Lead magnets are free, downloadable resources that provide immediate value to our community while helping build our email list and engagement. Each lead magnet includes:

- Bilingual landing pages (English and Spanish)
- Practical configuration files and templates
- Setup instructions and documentation
- Ready-to-use code examples

## Repository Structure

```
AIPaths_Academy_Lead_Magnets/
├── 001_ai-starter-pack/          # AI Development Starter Pack
│   ├── 001_ai-starter-pack.en.md # English landing page
│   ├── 001_ai-starter-pack.es.md # Spanish landing page
│   ├── README.md                  # Setup instructions
│   ├── .cursor/                   # Cursor configuration
│   ├── .continue/                 # Continue extension config
│   └── mcp-configs/               # MCP server configs
├── 002_ai-agents-config/          # AI Agents Configuration Pack
│   ├── 002_ai-agents-config.en.md
│   ├── 002_ai-agents-config.es.md
│   ├── README.md
│   └── agents/                    # Sample agent configs
└── README.md                      # This file
```

## Naming Conventions

- Folders: `XXX_kebab-case-name/` (e.g., `001_ai-starter-pack/`)
- Landing pages: `XXX_slug.{locale}.md` (e.g., `001_ai-starter-pack.en.md`)
- Locale codes: `en` (English), `es` (Spanish)

## Frontmatter Structure

Each landing page includes metadata:

```yaml
---
title: Lead Magnet Title
description: Brief description
category: category-name
tags: [tag1, tag2, tag3]
difficulty: beginner|intermediate|advanced
version: 1.0.0
published: true|false
locale: en|es
order: 1
lastUpdated: 'YYYY-MM-DD'
author: AIPaths Academy
downloadSize: 'X.X MB'
estimatedSetupTime: 'X minutes'
prerequisites:
  - Requirement 1
  - Requirement 2
files:
  - path: folder/
    description: What's inside
---
```

## Creating New Lead Magnets

1. Create a new folder with naming convention `XXX_kebab-case/`
2. Add bilingual landing pages (`.en.md` and `.es.md`)
3. Include a README.md with setup instructions
4. Add all necessary files, configs, and templates
5. Test the setup process thoroughly
6. Commit with descriptive message

## Integration with Main Website

These lead magnets are referenced from the main AIPaths Academy website. Landing pages are consumed by:

- Resource library pages
- Blog post CTAs
- Email campaigns
- Social media promotions

## License

All content in this repository is proprietary to AIPaths Academy.

## Support

For questions or issues, contact the AIPaths Academy team.
