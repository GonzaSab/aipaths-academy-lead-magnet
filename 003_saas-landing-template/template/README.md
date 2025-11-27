# SaaS Landing Page Template

A modern, configuration-driven landing page template for solopreneurs validating SaaS ideas. Built with Next.js 14, Tailwind CSS, and Supabase.

## Features

- **Bilingual (EN/ES)**: Built-in language toggle with English and Spanish support
- **Configuration-driven**: All content lives in JSON files - no code changes needed
- **Single accent color**: Change one color value to rebrand the entire site
- **Waitlist-ready**: Built-in email capture with Supabase integration
- **Multi-page**: Home, Pricing, About, Contact, Privacy, Terms
- **Responsive**: Mobile-first design that looks great everywhere
- **TypeScript**: Fully typed for developer confidence

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

Create a new Supabase project and run this SQL in the SQL Editor:

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now(),
  source text default 'website'
);

-- Enable RLS
alter table waitlist enable row level security;

-- Allow anonymous inserts
create policy "Allow anonymous inserts" on waitlist
  for insert with check (true);
```

### 3. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Customize content

Edit the JSON files in `/content`:

- `site.json` - Global settings (name, colors, navigation)
- `home.json` - Landing page sections
- `pricing.json` - Pricing tiers
- `about.json` - About page content
- `contact.json` - Contact form configuration
- `faq.json` - FAQ items
- `legal.json` - Privacy policy and terms

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Changing the Accent Color

The entire site uses a single accent color defined in two places:

1. **`content/site.json`** - For reference/documentation:

   ```json
   {
     "accentColor": "#6366f1"
   }
   ```

2. **`src/app/globals.css`** - The actual CSS variable (RGB values):
   ```css
   :root {
     --accent: 99 102 241; /* RGB values */
   }
   ```

To change the color:

1. Pick your color (e.g., `#10b981` for green)
2. Convert to RGB: `16 185 129`
3. Update the `--accent` variable in `globals.css`

## Bilingual Support

The template supports English and Spanish out of the box. A language toggle appears in the navigation bar.

### How it works

All content in JSON files uses a bilingual structure:

```json
{
  "headline": {
    "en": "Your Value Proposition",
    "es": "Tu Propuesta de Valor"
  }
}
```

The `useLanguage` hook provides a `t()` function that extracts the correct language:

```tsx
const { t } = useLanguage();
return <h1>{t(content.headline)}</h1>;
```

### Language Detection

1. First visit: Detects browser language preference
2. After toggle: Saves preference to localStorage
3. Return visits: Uses saved preference

## Project Structure

```
template/
├── content/           # JSON content files (bilingual)
│   ├── site.json      # Global config
│   ├── home.json      # Landing page
│   ├── pricing.json   # Pricing tiers
│   └── ...
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/
│   │   ├── layout/    # Navbar, Footer
│   │   ├── sections/  # Hero, Features, etc.
│   │   └── ui/        # Button, Input, Card, LanguageToggle
│   ├── contexts/      # LanguageContext for i18n
│   ├── config/        # TypeScript config loader
│   └── lib/           # Utilities, Supabase client
└── public/            # Static assets
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Add your environment variables in the Vercel dashboard.

### Other platforms

Build the project:

```bash
npm run build
```

The output will be in `.next/` - deploy according to your platform's instructions.

## The 3-Prompt Workflow

This template is designed to be customized using AI with just 3 prompts:

- **English**: See `PROMPTS.md`
- **Spanish**: See `PROMPTS_ES.md`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Custom (inspired by shadcn/ui)
- **Database**: Supabase
- **Icons**: Lucide React
- **Language**: TypeScript

## License

MIT
