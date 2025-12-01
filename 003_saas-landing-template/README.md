# SaaS Landing Page Template - Setup Guide

Welcome! This template lets you create a complete, professional landing page for any SaaS idea using just 3 AI prompts.

**v2.0** - Now with Next.js 16, React 19, Tailwind v4, dark mode, and Framer Motion animations!

## What's Inside

```
003_saas-landing-template/
├── template/                    # The Next.js 16 project
│   ├── src/
│   │   ├── app/                 # Next.js app router
│   │   │   ├── globals.css      # Tailwind v4 + oklch colors
│   │   │   ├── layout.tsx       # Root layout with providers
│   │   │   ├── page.tsx         # Single-page landing
│   │   │   └── providers.tsx    # Theme + Language providers
│   │   ├── components/
│   │   │   ├── sections/        # Hero, Features, Pricing, FAQ, etc.
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   ├── Navbar.tsx       # Nav with lang/theme toggles
│   │   │   ├── Footer.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── content/             # JSON content files (edit these!)
│   │   │   ├── site.json        # Brand, nav, footer, meta
│   │   │   ├── home.json        # Hero, features, how-it-works, waitlist
│   │   │   ├── pricing.json     # Pricing tiers
│   │   │   ├── about.json       # Company story, values
│   │   │   ├── contact.json     # Contact form config
│   │   │   ├── faq.json         # FAQ items
│   │   │   └── legal.json       # Privacy & Terms
│   │   ├── contexts/            # Theme + Language contexts
│   │   ├── hooks/               # useTranslation hook
│   │   ├── lib/                 # Supabase client, waitlist logic
│   │   └── types/               # TypeScript types
│   ├── prompts/
│   │   ├── PROMPTS.md           # 3-prompt workflow (English)
│   │   ├── PROMPTS_ES.md        # 3-prompt workflow (Spanish)
│   │   └── EXAMPLE_ANSWERS.md   # Example answers for Prompt 1
│   ├── public/                  # Static assets
│   └── package.json             # Dependencies
└── README.md                    # This file
```

## Quick Start (5 minutes)

### Prerequisites

- Node.js 18 or higher
- Claude Code or another AI coding assistant
- Supabase account (optional - falls back to localStorage)

### Step 1: Install Dependencies

```bash
cd template
npm install
```

### Step 2: Set Up Supabase (Optional)

The template works without Supabase - emails are stored in localStorage. For production, set up Supabase:

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

3. Go to Project Settings -> API and copy your credentials

### Step 3: Configure Environment (Optional)

Only needed if using Supabase:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 4: Run the 3-Prompt Workflow

This is where the magic happens. Open the project folder in Claude Code and use the prompts in `prompts/PROMPTS.md` (or `prompts/PROMPTS_ES.md` for Spanish).

**Prompt 1 - Discovery (~5 min)**
- AI asks about your product, audience, features, pricing
- You answer the questions (see `EXAMPLE_ANSWERS.md` for guidance)
- AI summarizes into a brief

**Prompt 2 - Generation (~2 min)**
- AI generates all JSON content files (bilingual EN/ES)
- Updates the gradient colors in `globals.css`
- Uses parallel agents for faster generation

**Prompt 3 - Refinement (~3 min)**
- Review generated content
- Test dark mode and language switching
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

Add environment variables in Vercel dashboard (if using Supabase).

## Customization Guide

### Changing Brand Colors

The site uses gradient colors defined in oklch format. To change them, update `src/app/globals.css`:

```css
:root {
  /* Brand gradient colors */
  --gradient-from: oklch(0.55 0.25 265);  /* Start color */
  --gradient-to: oklch(0.55 0.25 300);    /* End color */
}

.dark {
  /* Slightly brighter for dark mode */
  --gradient-from: oklch(0.6 0.25 265);
  --gradient-to: oklch(0.6 0.25 300);
}
```

### Color Suggestions by Industry

| Industry | oklch From | oklch To |
|----------|------------|----------|
| Finance | oklch(0.7 0.15 150) | oklch(0.6 0.15 180) |
| Healthcare | oklch(0.65 0.12 230) | oklch(0.7 0.12 250) |
| Productivity | oklch(0.6 0.2 265) | oklch(0.55 0.2 300) |
| Creative | oklch(0.7 0.2 350) | oklch(0.75 0.18 20) |
| Developer Tools | oklch(0.7 0.15 200) | oklch(0.6 0.15 220) |

### Editing Content Manually

All content is in `src/content/*.json`. The structure is bilingual:

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
2. Import and add it to `src/app/page.tsx`
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
4. If not configured, the app uses localStorage (no error, just local storage)

### Styles not applying

1. Restart the dev server: `npm run dev`
2. Check that gradient vars are defined in `globals.css`
3. Clear browser cache

### Dark mode not working

1. Verify ThemeProvider wraps the app in `providers.tsx`
2. Check the `dark` class is being applied to `<html>`
3. Clear localStorage and refresh

### Form submissions not working

1. Check browser Network tab for errors
2. If Supabase: verify table exists and RLS policies allow inserts
3. If localStorage: check browser DevTools -> Application -> Local Storage

## Project Structure

### Single-Page Landing (`src/app/page.tsx`)

All sections rendered on one page:
- Navbar (with language/theme toggles)
- Hero -> Features -> HowItWorks -> Pricing -> Waitlist -> FAQ -> About -> Contact -> Footer

### Components (`src/components/`)

- `sections/` - Hero, Features, HowItWorks, Pricing, FAQ, About, Contact, Waitlist
- `ui/` - shadcn components (Button, Input, Card, Accordion, etc.)
- `Navbar.tsx`, `Footer.tsx`, `LanguageSwitcher.tsx`, `ThemeToggle.tsx`

### Content Files (`src/content/`)

Each JSON file controls a specific part of the site. All text is bilingual with `en` and `es` keys.

## Support

- **Full Guide**: [aipaths.academy/docs/saas-landing-20-minutes](https://aipaths.academy/docs/saas-landing-20-minutes)
- **Issues**: https://github.com/aipaths/templates/issues
- **Discord**: discord.gg/aipaths
- **Email**: support@aipaths.academy

---

Built with ❤️ by AIPaths Academy

Happy shipping! 🚀
