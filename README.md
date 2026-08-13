# AIPaths Academy Lead Magnets

This repository contains downloadable resources (lead magnets) for AIPaths Academy. These are high-value content pieces designed to help developers accelerate their AI development skills.

## Purpose

Lead magnets are free, downloadable resources that provide immediate value to our community while helping build our email list and engagement. Each lead magnet includes:

- A Spanish landing page (English pages exist only for legacy resources)
- Practical configuration files and templates
- Setup instructions and documentation
- Ready-to-use code examples

## Repository Structure

```
AIPaths_Academy_Lead_Magnets/
├── 002_ai-agents-config/          # AI Agents Configuration Pack (legacy pair)
│   ├── 002_ai-agents-config.es.md # Spanish landing page (published)
│   ├── 002_ai-agents-config.en.md # English landing page (frozen legacy)
│   ├── README.md                  # Setup instructions
│   └── agents/                    # Sample agent configs
├── 013_your-new-pack/             # New resource: Spanish only
│   ├── 013_your-new-pack.es.md
│   ├── README.md
│   └── template/                  # Payload files (never parsed by the site)
└── README.md                      # This file
```

## Naming Conventions

- Folders: `XXX_kebab-case-name/` (e.g., `001_ai-starter-pack/`)
- Landing pages: `XXX_slug.{locale}.md` (e.g., `002_ai-agents-config.es.md`)
- Locale codes: `es` (Spanish, the published locale), `en` (legacy only)

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
coverImage: /images/resources/XXX_slug.png
prerequisites:
  - Requirement 1
  - Requirement 2
files:
  - path: folder/
    description: What's inside
---
```

## Three Rules That Are Easy to Break

**The landing page lives exactly one level deep.** The website scanner reads
`<slug>/<slug>.<locale>.md` and nothing deeper. Everything below that is payload
— the files the visitor gets in the ZIP — and is never parsed.

This is not an optimization. A resource can legitimately ship markdown of its
own (an agent pack, for instance), and that markdown can carry frontmatter that
is valid for its own tool but not valid YAML. Before the depth limit existed,
one such file threw during the scan and the catalog came back empty: the whole
resources page rendered "No se encontraron recursos". Deep markdown is fine —
just never expect it to be read.

**Cover images do not go in the resource folder.** The download ZIP is built
from the entire folder, so an image parked inside it ships to the user. Covers
belong in the main website repo under `public/images/resources/`, and
`coverImage` points at that public path.

**`published: false` unlists, it does not unpublish.** The resource disappears
from the catalog listing, but its URL and its download keep working. That is
deliberate: links already out in YouTube descriptions, emails and the funnel
must not start 404ing. To actually retire a resource, the link has to be
retired too.

## Creating New Lead Magnets

1. Create a new folder with naming convention `XXX_kebab-case/`
2. Add the Spanish landing page (`.es.md`). Do **not** create an `.en.md`
   counterpart: AIPaths publishes Spanish-only. Existing English landing pages
   stay published and frozen — never rewritten or deleted.
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

