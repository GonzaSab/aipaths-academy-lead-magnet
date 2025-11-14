# MDX Best Practices for Lead Magnets

This guide helps you avoid common MDX syntax issues when creating lead magnet content files.

## Quick Reference

| ❌ WRONG | ✅ CORRECT | Why |
|----------|-----------|-----|
| `<!-- comment -->` | `{/* comment */}` | MDX doesn't support HTML comments |
| `Use {variable}` | ``Use `{variable}` `` | Curly braces are JSX expressions |
| `Value < 10` | ``Value `< 10` `` or `Value &lt; 10` | Angle brackets are JSX tags |
| `<Component>` | ``<`Component`>`` | Anything looking like HTML/JSX is parsed as such |

## Critical Rules

### 1. Comments Must Use JSX Syntax

**❌ WRONG - Causes MDX compilation error:**
```markdown
<!-- This is a comment -->
<\!-- Even with backslash escape -->
```

**✅ CORRECT:**
```markdown
{/* This is a comment */}
{/* Multi-line
    comment
    works too */}
```

**Why this matters:** This exact issue caused production error digest 3546708738. HTML comments (`<!-- -->`) are **not valid in MDX** and will crash the page.

### 2. Curly Braces Need Escaping

**❌ WRONG:**
```markdown
Replace {variable_name} with your value
Use {brackets} for placeholders
```

**✅ CORRECT:**
```markdown
Replace `{variable_name}` with your value
Use `{brackets}` for placeholders
```

### 3. Angle Brackets in Text

**❌ WRONG:**
```markdown
## Using <filename> in Your Project
Check if value < 10
```

**✅ CORRECT:**
```markdown
## Using `<filename>` in Your Project
Check if value `< 10`
```

Or use HTML entities:
```markdown
Check if value &lt; 10 and value &gt; 100
```

### 4. Code Blocks Must Specify Language

**❌ WRONG:**
```markdown
```
npm install package
```
```

**✅ CORRECT:**
````markdown
```bash
npm install package
```
````

**Supported languages:** `bash`, `javascript`, `typescript`, `python`, `json`, `yaml`, `markdown`, etc.

## Frontmatter Requirements

Every lead magnet must have complete frontmatter:

```yaml
---
title: Resource Title                    # Required
description: SEO description (under 160) # Required
category: category-name                   # Required
tags: [tag1, tag2, tag3, tag4]           # Required: 4-8 tags
difficulty: beginner                      # Required: beginner|intermediate|advanced
version: 1.0.0                           # Required
published: true                          # Required
locale: en                               # Required: en or es
order: 1                                 # Required
lastUpdated: '2025-01-13'                # Required: YYYY-MM-DD
author: AIPaths Academy                  # Required
downloadSize: '50 KB'                    # Optional
estimatedSetupTime: '5 minutes'          # Optional
prerequisites:                           # Optional
  - Prerequisite 1
  - Prerequisite 2
---
```

## Testing Before Commit

**Always test locally before pushing:**

1. Start dev server: `npm run dev` (from main academy repo)
2. Navigate to: `http://localhost:3001/en/resources/[your-slug]`
3. Check browser console for MDX errors
4. Test **both** locales: `/en/resources/...` and `/es/resources/...`

## Common Error Messages

### "Unexpected character `\` before name"
- **Cause**: Backslash before `!` in HTML comment: `<\!--`
- **Fix**: Use JSX comment: `{/* comment */}`

### "Unexpected character `!` before name"
- **Cause**: HTML comment syntax: `<!-- -->`
- **Fix**: Use JSX comment: `{/* comment */}`

### "Expected closing tag for `<X>`"
- **Cause**: Unescaped angle brackets
- **Fix**: Wrap in backticks: `` `<X>` ``

### "{X} is not defined"
- **Cause**: Unescaped curly braces treated as JavaScript
- **Fix**: Wrap in backticks: `` `{X}` ``

## File Naming Convention

Lead magnet files must follow this pattern:

```
<number>_<slug>/<number>_<slug>.<locale>.md
```

Examples:
- `002_ai-agents-config/002_ai-agents-config.en.md` ✅
- `002_ai-agents-config/002_ai-agents-config.es.md` ✅
- `002_ai-agents-config/ai-agents.md` ❌ (missing locale)
- `ai-agents-config.en.md` ❌ (must be in folder)

## Validation Script

Run validation before committing:

```bash
node scripts/validate-lead-magnets.js                    # Validate all
node scripts/validate-lead-magnets.js 002_*/002_*.en.md  # Single file
```

The script checks for:
- ✅ HTML comments (will fail)
- ✅ Required frontmatter fields
- ✅ Locale in filename
- ✅ MDX syntax issues
- ✅ Code block languages
- ✅ Curly braces and angle brackets

## Additional Resources

- [MDX Official Docs](https://mdxjs.com/)
- [MDX Troubleshooting](https://mdxjs.com/docs/troubleshooting-mdx/)
- Main Academy Content: `../content/MDX_BEST_PRACTICES.md`
