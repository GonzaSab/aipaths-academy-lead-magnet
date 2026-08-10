---
# Unique identifier linking EN/ES versions
content_id: "lead-magnets-agents-pack"

# Locale (must match filename)
locale: "en"

# SEO & Display
title: "Agents Pack: 8 Agents, 9 Skills and 114 Prompts"
description: "Specialist agents, skills, and a prompt library in plain markdown. Works with Claude Code, Codex, Cursor, OpenClaw, or whatever harness you use. Nothing to install."

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
estimatedSetupTime: "5 minutes"

# Prerequisites
prerequisites:
  - A coding agent, whichever you use (Claude Code, Codex, Cursor, OpenClaw, Gemini CLI)
  - Nothing else, it is all plain markdown
  - Spanish, the whole pack is written in Spanish

# Files included
files:
  - path: pack/agentes/claude-code/
    description: The 8 specialists in Claude Code format, ready to copy
  - path: pack/agentes/portable/
    description: The same 8 in agents.md format, plus the 3-agent pipeline and the template
  - path: pack/skills/
    description: 9 skills, including the Linear-backed task queue with its SETUP
  - path: pack/prompts/
    description: 114 prompts by domain, plus the method for writing your own
  - path: pack/README.md
    description: Install guide and walkthrough of the pack
---

## What's Included

- **8 specialist agents** — in Claude Code format and in portable *agents.md* format, which Codex, Cursor, OpenClaw and 30+ other clients read
- **A 3-agent pipeline** with its own queue: planner, dev, and reviewer
- **9 skills** — six work on their own, three build a shared task queue on Linear
- **114 prompts** organized by domain, plus the method for writing your own
- **An empty template** for building your own agent from scratch

## The 8 Specialists

| Agent | What it does |
|---|---|
| `code-reviewer` | Reviews a diff before you merge. Stack-agnostic |
| `git-commit-guardian` | Reviews the diff before it leaves the repo: secrets, junk, message |
| `codebase-cleanup-auditor` | Catalogs what is dead weight in the repo, without deleting anything |
| `dependency-auditor` | Triages dependencies and says what to update first |
| `docs-writer` | Writes docs by reading the code, not the stale README |
| `nextjs-security-auditor` | Audits a Next.js app across 8 critical categories |
| `supabase-db-manager` | Schema, migrations, and RLS policies on Postgres |
| `playwright-browser-tester` | Opens a URL in Chromium and reports the obvious |

All eight are **on-demand** specialists: they do not run on their own or poll a queue. You invoke them, or your main agent invokes them when the work lands in their domain.

## The 3-Agent Pipeline

Beyond the specialists, three agents close the loop end to end on top of the queue skills:

```text
idea → @planner → Todo → @dev → In Review → @reviewer → Done
```

| Agent | What it brings |
|---|---|
| `planner` | Interrogates the idea until the task is executable without questions |
| `dev` | Executes, leaves verifiable evidence, and learns the codebase session over session |
| `reviewer` | Actually verifies: approves, or bounces it back with the concrete reason |

## The 9 Skills

Six work with no setup: `prompt-builder`, `onboarding-codebase`, `escribir-tests`, `preparar-pr`, `release`, and `token-audit`.

The other three build a task queue on Linear so one or several agents can work off a shared queue without stepping on each other: `task-intake`, `task-runner`, and `task-review`. They need a Linear account and the MCP configured; the walkthrough is in `skills/_cola-linear/SETUP.md`, with a script that creates the states in one command.

What keeps that queue from breaking are two pieces almost nobody implements: a **lease-based lock** and a **reaper** that returns orphaned leases to the queue. Without the reaper, an instance that dies right after claiming a task leaves it invisible to every agent, forever.

## The 114 Prompts

| Folder | Prompts | What it covers |
|---|---|---|
| `desarrollo/` | 39 | Generating code, debugging, testing and review |
| `negocio/` | 47 | Data analysis, research, planning |
| `marketing/` | 28 | SEO and content, email, social and ads |
| `automatizacion/` | — | n8n workflows |

Plus `metodo.md` (how to write a prompt that works) and `constructor.md` (a wizard that builds one by asking).

## Quick Install

**If you use Claude Code**, copy the agents and you are done:

```bash
cp agentes/claude-code/*.md ~/.claude/agents/
```

**If you use another harness**, the `agentes/portable/` folder has the same eight with the *agents.md* standard file set.

**The skills** go wherever your harness looks for them: `~/.claude/skills`, `~/.agents/skills`, or whatever folder your config declares.

**The prompts** are read and copied. No install needed.

## The Idea Behind It

Two principles run through the whole pack:

**One file at a time.** Skills and agents are split into trunk and branches: what always gets read is short, and the detail loads only when it is needed. Loading 2,900 lines of prompts to use one is throwing context in the trash.

**Plain markdown, zero lock-in.** Nothing here depends on a model, a provider, or a harness. Switch tools and this travels with you.

## Language and License

The whole pack is written in Spanish. The agents and skills are original, under the MIT license. The prompts are a compilation of material published as free by their authors, translated into Spanish and with attribution to the source in `prompts/SOURCES.md`.

## Related Resources

- [YouTube channel](https://www.youtube.com/@aipaths)
- [Full agents course](https://www.aipaths.academy/en/openclaw-course)
