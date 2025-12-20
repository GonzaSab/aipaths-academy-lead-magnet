# Prompt Engineering Codebase

This project is a **prompt library and builder**. When working here, assume the user wants to create, refine, or organize prompts.

## Project Structure

```
Prompts/
├── Business-Operations/    # Data analysis, planning, research prompts
├── Marketing-SEO/          # Content, email, social media prompts
├── Software-Development/   # Code generation, debugging, testing prompts
└── prompt-builder.md       # Interactive prompt creation workflow
```

## Prompt Engineering Principles

When helping create prompts, apply these frameworks and best practices:

### Core Framework: COSTAR

| Element | Purpose | Example |
|---------|---------|---------|
| **C**ontext | Background information | "I'm a SaaS founder..." |
| **O**bjective | What to achieve | "Create a landing page copy" |
| **S**tyle | Writing approach | "Conversational, direct" |
| **T**one | Emotional quality | "Confident but not salesy" |
| **A**udience | Who it's for | "Technical CTOs" |
| **R**esponse | Output format | "3 headline variants + body" |

### Simpler Alternative: Role-Task-Format

```
Role: Who the AI should act as
Task: Clear, specific objective
Format: Desired output structure
```

### Essential Prompt Elements

1. **Context** - Background the AI needs
2. **Role/Persona** - Identity for the AI to adopt
3. **Task** - Specific, actionable objective
4. **Constraints** - Limits (word count, style, scope)
5. **Format** - Output structure (bullets, JSON, prose)
6. **Examples** - Show desired input/output patterns

## Best Practices Checklist

When reviewing or creating prompts:

- [ ] **Specific over vague** - "2-3 sentences" not "be concise"
- [ ] **Positive framing** - Tell what TO do, not what NOT to do
- [ ] **Explain the WHY** - Context helps AI generalize correctly
- [ ] **Use structure** - XML tags, headers, clear sections
- [ ] **Add constraints** - Word limits, step counts, format rules
- [ ] **Include examples** - Show don't tell for complex formats
- [ ] **Placeholders are clear** - Use `[BRACKETS]` for user inputs
- [ ] **Iterative design** - Start simple, add specificity as needed

## Anti-Patterns to Avoid

- Vague instructions ("make it good")
- Negative constraints without alternatives ("don't be boring")
- Missing context (assuming AI knows your situation)
- Over-complicated single prompts (break into steps)
- No format specification (getting random structures)

## Prompt Quality Levels

### Level 1: Basic
```
Write a blog post about productivity.
```

### Level 2: Structured
```
Write a 500-word blog post about productivity tips for remote workers.
Include 5 actionable tips with examples.
```

### Level 3: Production-Ready
```
Role: You are a productivity coach who writes for busy professionals.

Task: Write a blog post about productivity for remote workers.

Context:
- Audience: Mid-level managers working from home
- Goal: Practical, immediately actionable advice
- Tone: Friendly but authoritative

Requirements:
- Length: 500-600 words
- Structure: Hook intro, 5 tips with examples, closing CTA
- Each tip: Headline + 2-3 sentences + concrete example
- Avoid: Generic advice like "use a to-do list"

Format: Markdown with H2 headers for each tip
```

## When Building Prompts

1. **Ask about the use case** - What will this prompt accomplish?
2. **Identify the audience** - Who will use the output?
3. **Define success criteria** - How do we know it worked?
4. **Choose appropriate framework** - COSTAR for complex, Role-Task-Format for simple
5. **Add examples if format matters** - Show the desired output pattern
6. **Include placeholders** - Mark where users insert their content with `[BRACKETS]`
7. **Test and iterate** - Refine based on actual outputs

## Prompt Template Structure

All prompts in this library should follow this pattern:

```markdown
# Category Name

> Brief description and sources

---

## Subcategory

### Prompt Name
\```
[Role/Context if needed]

[Clear task description]

[User inputs with BRACKETS]:
- [INPUT 1]
- [INPUT 2]

[Requirements/Constraints]:
- Requirement 1
- Requirement 2

[Output format specification]
\```
```

## File Naming Convention

- Lowercase with hyphens: `email-marketing-prompts.md`
- Category prefix matches folder: `Marketing-SEO/email-marketing-prompts.md`
- Descriptive but concise names

## Quick Reference: Constraint Types

| Type | Examples |
|------|----------|
| Length | "100 words", "3-5 bullets", "2 paragraphs" |
| Format | "JSON", "Markdown table", "numbered list" |
| Style | "formal", "conversational", "technical" |
| Scope | "focus only on X", "exclude Y" |
| Structure | "intro-body-conclusion", "problem-solution" |
