# SaaS Landing Page Template - Setup Guide

Welcome! This template lets you create a complete, professional landing page for any SaaS idea using just 3 AI prompts.

## What's Inside

```
003_saas-landing-template/
├── template/                    # The Next.js project
│   ├── src/                     # Source code
│   │   ├── app/                 # Next.js pages
│   │   ├── components/          # React components
│   │   ├── contexts/            # Language context
│   │   └── lib/                 # Utilities
│   ├── content/                 # JSON content files (edit these!)
│   │   ├── site.json            # Global config
│   │   ├── home.json            # Landing page
│   │   ├── pricing.json         # Pricing tiers
│   │   ├── about.json           # About page
│   │   ├── contact.json         # Contact form
│   │   ├── faq.json             # FAQ items
│   │   └── legal.json           # Privacy & Terms
│   ├── PROMPTS.md               # 3-prompt workflow (English)
│   ├── PROMPTS_ES.md            # 3-prompt workflow (Spanish)
│   └── package.json             # Dependencies
└── README.md                    # This file
```

## Quick Start (5 minutes)

### Prerequisites

- Node.js 18 or higher
- A Supabase account (free tier is fine)
- Claude Code or another AI coding assistant

### Step 1: Install Dependencies

```bash
cd template
npm install
```

### Step 2: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Open the SQL Editor and run:

```sql
-- Waitlist table for email capture
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now(),
  source text default 'website'
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow anonymous inserts (for the public form)
create policy "Allow anonymous inserts" on waitlist
  for insert with check (true);
```

3. Go to Project Settings → API and copy your credentials

### Step 3: Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 4: Run the 3-Prompt Workflow

This is where the magic happens. Open the project folder in Claude Code and use the prompts in `PROMPTS.md` (or `PROMPTS_ES.md` for Spanish).

**Prompt 1 - Discovery (~5 min)**
- AI asks about your product, audience, features, pricing
- You answer the questions
- AI summarizes into a brief

**Prompt 2 - Generation (~2 min)**
- AI generates all JSON content files
- Updates the accent color
- Creates bilingual content (EN/ES)

**Prompt 3 - Refinement (~3 min)**
- Review generated content
- Make any adjustments
- Test locally
- Deploy to Vercel

### Step 5: Test Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Step 6: Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add your environment variables in the Vercel dashboard.

## Customization Guide

### Changing the Accent Color

The entire site uses one accent color. To change it:

1. Pick your color (e.g., `#10b981` for green)
2. Convert to RGB: `16 185 129`
3. Update `src/app/globals.css`:

```css
:root {
  --accent: 16 185 129; /* Your RGB values */
}
```

### Color Suggestions by Industry

| Industry | Color | RGB |
|----------|-------|-----|
| Finance | Green | 16 185 129 |
| Healthcare | Blue | 14 165 233 |
| Productivity | Purple | 139 92 246 |
| Creative | Pink | 236 72 153 |
| Developer Tools | Cyan | 6 182 212 |

### Editing Content Manually

All content is in `content/*.json`. The structure is bilingual:

```json
{
  "headline": {
    "en": "English text",
    "es": "Spanish text"
  }
}
```

### Adding New Sections

1. Create a component in `src/components/sections/`
2. Import and use it in the relevant page
3. Add content to the appropriate JSON file

## Troubleshooting

### "Module not found" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Supabase connection fails

1. Check `.env.local` has correct values (no quotes around values)
2. Verify the Supabase project is active (not paused)
3. Check the anon key has insert permissions

### Styles not applying

1. Restart the dev server: `npm run dev`
2. Check that `--accent` is defined in `globals.css`
3. Clear browser cache

### Form submissions not working

1. Check browser Network tab for errors
2. Verify Supabase table exists
3. Check RLS policies allow inserts

## Project Structure Deep Dive

### Pages (`src/app/`)

- `page.tsx` - Home/landing page
- `pricing/page.tsx` - Pricing page
- `about/page.tsx` - About page
- `contact/page.tsx` - Contact form
- `privacy/page.tsx` - Privacy policy
- `terms/page.tsx` - Terms of service

### Components (`src/components/`)

- `layout/` - Navbar, Footer
- `sections/` - Hero, Features, HowItWorks, Pricing, FAQ, Waitlist
- `ui/` - Button, Input, Card, LanguageToggle

### Content Files (`content/`)

Each JSON file controls a specific part of the site. All text is bilingual with `en` and `es` keys.

## Support

- **Full Guide**: [aipaths.academy/docs/saas-landing-20-minutes](https://aipaths.academy/docs/saas-landing-20-minutes)
- **Issues**: https://github.com/aipaths/templates/issues
- **Discord**: discord.gg/aipaths
- **Email**: support@aipaths.academy

---

Built with ❤️ by AIPaths Academy

Happy shipping! 🚀
