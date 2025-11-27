---
title: SaaS Landing Page Template
description: A production-ready Next.js landing page template you can fully customize with just 3 AI prompts. Bilingual, Supabase-ready, deploy in 20 minutes.
category: templates
tags: [nextjs, saas, landing-page, claude-code, automation, templates]
difficulty: beginner
version: 1.0.0
published: true
locale: en
order: 3
lastUpdated: '2025-11-27'
author: AIPaths Academy
downloadSize: '250 KB'
estimatedSetupTime: '20 minutes'
prerequisites:
  - Node.js 18+ installed
  - Claude Code or similar AI coding assistant
  - Supabase account (free tier works)
  - Vercel account for deployment (optional)
files:
  - path: template/
    description: Complete Next.js project with all source files
  - path: template/PROMPTS.md
    description: The 3-prompt workflow in English
  - path: template/PROMPTS_ES.md
    description: The 3-prompt workflow in Spanish
  - path: template/content/
    description: JSON files for all page content (bilingual)
  - path: README.md
    description: Quick setup instructions
---

## What Is This?

A complete, production-ready landing page template built with Next.js 14, Tailwind CSS, and Supabase. The magic? You can fully customize it for ANY SaaS idea using just **3 AI prompts** in about 20 minutes.

No more spending days on landing pages. No more hiring designers for validation. Just describe your idea, and let AI generate all the content.

## What You Get

### A Complete Landing Page

- **Home**: Hero section, features grid, how-it-works steps, waitlist CTA
- **Pricing**: Configurable tiers with feature lists
- **About**: Company story and values
- **Contact**: Working contact form
- **FAQ**: Expandable question/answer section
- **Legal**: Privacy Policy and Terms of Service

### Built-In Features

- **Bilingual (EN/ES)**: Language toggle in navigation, all content supports both languages
- **Waitlist Ready**: Email capture form connected to Supabase
- **Single Accent Color**: Change one CSS variable to rebrand the entire site
- **Mobile Responsive**: Looks great on all devices
- **TypeScript**: Fully typed for developer confidence
- **Dark Mode Ready**: CSS variables make theming easy

### The 3-Prompt Workflow

| Prompt | What It Does | Time |
|--------|--------------|------|
| **Discovery** | AI asks about your product, audience, features, pricing | ~5 min |
| **Generation** | AI creates all JSON content files (bilingual) | ~2 min |
| **Refinement** | Review, adjust, test, and deploy | ~3 min |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Quick Start

### 1. Extract and Install

```bash
unzip saas-landing-template.zip
cd template
npm install
```

### 2. Set Up Supabase

Create a free Supabase project and run this SQL:

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now(),
  source text default 'website'
);

alter table waitlist enable row level security;

create policy "Allow anonymous inserts" on waitlist
  for insert with check (true);
```

### 3. Configure Environment

```bash
cp .env.example .env.local
```

Add your Supabase credentials to `.env.local`.

### 4. Run the 3-Prompt Workflow

Open the project in Claude Code (or your AI assistant) and follow `PROMPTS.md`:

1. **Prompt 1**: Answer questions about your product
2. **Prompt 2**: AI generates all content
3. **Prompt 3**: Review and deploy

### 5. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Who Is This For?

- **Solopreneurs** validating SaaS ideas quickly
- **Indie hackers** who want professional landing pages without design skills
- **Developers** tired of building the same boilerplate
- **Anyone** who wants to test market demand before building

## Example Use Cases

- Validate a new SaaS concept with a waitlist
- Create a landing page for a side project
- Build client landing pages quickly
- Learn Next.js patterns with a real-world example

## What's NOT Included

- User authentication (this is for pre-launch validation)
- Payment processing (add Stripe when you're ready)
- Admin dashboard (you'll build this when you have users)

This template is intentionally focused on one thing: getting your idea in front of potential customers fast.

---

**Ready to validate your SaaS idea?**

Download the template, run 3 prompts, and have your landing page live in 20 minutes.
