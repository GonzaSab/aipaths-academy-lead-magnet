# The 3-Prompt Workflow

This document contains the three prompts that transform this template into a complete, customized landing page for any SaaS idea.

---

## Overview

| Prompt       | Purpose                                 | Time   |
| ------------ | --------------------------------------- | ------ |
| **Prompt 1** | Discovery - Gather business information | ~5 min |
| **Prompt 2** | Generation - Create all content         | ~2 min |
| **Prompt 3** | Refinement - Polish and deploy          | ~3 min |

---

## PROMPT 1: Discovery

Copy and paste this prompt, then answer the questions:

```
I want to create a landing page for my SaaS product using the template in [YOUR_TEMPLATE_PATH].

Please ask me about:
1. Product name and tagline
2. What the product does (1-2 sentences)
3. Target audience
4. Key benefits/features (3-6)
5. How it works (3-4 steps)
6. Pricing model (free tier? paid tiers? prices?)
7. Common questions customers might have (3-5)
8. Company/founder info for the About page
9. Contact email
10. Preferred accent color (or let me suggest based on industry)
11. Tone of voice (professional, casual, playful, technical)

After I answer, summarize my business in a brief that we'll use for Prompt 2.
```

### Example Answers:

> 1. **InvoiceFlow** - "Invoicing that flows"
> 2. An invoicing tool that automatically generates and sends invoices based on project milestones
> 3. Freelancers and small agencies who bill by project
> 4. Auto-generation from milestones, Smart payment reminders, Multi-currency support, Beautiful templates, Client portal, Expense tracking
> 5. Connect your project tool → Set milestone rules → Invoices generate automatically → Get paid faster
> 6. Free (3 clients), Pro $19/mo (unlimited), Team $49/mo (collaboration)
> 7. "Does it work with Notion?", "Can I customize invoice templates?", "What payment methods are supported?", "Is my data secure?"
> 8. Founded by a freelancer tired of manual invoicing. Solo founder, bootstrapped.
> 9. hello@invoiceflow.io
> 10. Green (money/growth vibes)
> 11. Professional but friendly

---

## PROMPT 2: Generation

After Prompt 1, use this prompt:

```
Based on the brief above, generate all BILINGUAL (English + Spanish) content for my landing page.

IMPORTANT: All content must be bilingual using this format:
{
  "headline": {
    "en": "English text here",
    "es": "Spanish text here"
  }
}

Use parallel agents to generate these files simultaneously:
- Agent 1: Generate content/site.json (global config, navigation, footer, colors)
- Agent 2: Generate content/home.json (hero, features, how it works, waitlist CTA)
- Agent 3: Generate content/pricing.json (all tiers with features)
- Agent 4: Generate content/about.json (story, values)
- Agent 5: Generate content/contact.json and content/faq.json
- Agent 6: Generate content/legal.json (privacy policy, terms - fill in company details)

Also:
- Update the --accent color in src/app/globals.css to RGB values matching my chosen color
- Ensure all copy is compelling, benefit-focused, and matches my tone of voice
- Use action verbs and clear value propositions
- Keep headlines punchy (under 10 words)
- Make CTAs specific ("Start Free Trial" > "Get Started")
- Spanish translations should be natural, not machine-translated

Write all files directly to the template folder.
```

### What This Generates:

The AI will create/update 7 files with **bilingual content** (EN + ES):

| File           | Content                                                                 |
| -------------- | ----------------------------------------------------------------------- |
| `site.json`    | Brand name, tagline, navigation, footer links, social links, legal info |
| `home.json`    | Hero section, features grid, how-it-works steps, waitlist CTA           |
| `pricing.json` | All pricing tiers with features, pricing FAQ                            |
| `about.json`   | Company story, values, team section                                     |
| `contact.json` | Form fields, contact info                                               |
| `faq.json`     | 6-8 frequently asked questions                                          |
| `legal.json`   | Privacy policy and Terms of Service                                     |

Users can toggle between English and Spanish using the language switcher in the navigation bar.

---

## PROMPT 3: Refinement & Deploy

Use this prompt for final adjustments and deployment:

```
Let's finalize my landing page:

1. **Review**: Read through all the generated JSON files and check for:
   - Consistency in tone and messaging
   - No placeholder text remaining ([brackets] or "Lorem ipsum")
   - Accurate pricing and feature lists
   - Complete legal pages with my company info
   - Both English AND Spanish translations are present and correct

2. **Quick fixes** (if needed):
   - [List any specific changes you want]

3. **Setup verification**:
   - Verify the Supabase connection is configured
   - Check that all pages render correctly
   - Test the waitlist form submission

4. **Deploy**:
   - Provide step-by-step Vercel deployment instructions
   - List the environment variables I need to set
   - Any post-deployment checks

Run the dev server and use a browser testing agent to verify the site works.
```

---

## Tips for Best Results

### Be Specific in Prompt 1

The more detail you provide, the better the generated content:

- ❌ "An app for freelancers"
- ✅ "An invoicing app that auto-generates invoices from Notion project milestones for freelance designers"

### Review the Brief

Before Prompt 2, make sure the AI's summary captures your vision. Correct any misunderstandings.

### Iterate on Prompt 3

You can run Prompt 3 multiple times to refine specific sections:

- "Make the hero headline more urgent"
- "Add a feature about API access"
- "Change the pricing to include an annual discount"

### Color Suggestions by Industry

| Industry          | Suggested Colors                   |
| ----------------- | ---------------------------------- |
| Finance/Invoicing | Green (#10b981), Blue (#3b82f6)    |
| Healthcare        | Blue (#0ea5e9), Teal (#14b8a6)     |
| Productivity      | Purple (#8b5cf6), Indigo (#6366f1) |
| Creative/Design   | Pink (#ec4899), Orange (#f97316)   |
| Developer Tools   | Slate (#64748b), Cyan (#06b6d4)    |
| E-commerce        | Orange (#f97316), Red (#ef4444)    |

---

## Supabase Setup SQL

Run this in your Supabase SQL Editor before testing:

```sql
-- Waitlist table
create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now(),
  source text default 'website'
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow anonymous inserts (for the waitlist form)
create policy "Allow anonymous inserts" on waitlist
  for insert with check (true);

-- Optional: Contact form submissions
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default now()
);

alter table contact_submissions enable row level security;

create policy "Allow anonymous inserts" on contact_submissions
  for insert with check (true);
```

---

## Troubleshooting

### "Module not found" errors

Run `npm install` to ensure all dependencies are installed.

### Supabase connection fails

1. Check `.env.local` has correct values (no quotes around values)
2. Verify the Supabase project is active
3. Check the anon key has insert permissions

### Styles not applying

1. Make sure `globals.css` is imported in `layout.tsx`
2. Check that `--accent` is defined in `:root`
3. Run `npm run dev` to see Tailwind JIT updates

### Form submissions not working

1. Check browser Network tab for API errors
2. Verify Supabase table exists
3. Check RLS policies allow inserts
