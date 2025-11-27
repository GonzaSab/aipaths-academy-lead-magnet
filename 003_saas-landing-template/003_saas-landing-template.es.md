---
title: Plantilla de Landing Page SaaS
description: Una plantilla Next.js lista para produccion que puedes personalizar completamente con solo 3 prompts de IA. Bilingue, lista para Supabase, despliega en 20 minutos.
category: templates
tags: [nextjs, saas, landing-page, claude-code, automation, templates]
difficulty: beginner
version: 1.0.0
published: true
locale: es
order: 3
lastUpdated: '2025-11-27'
author: AIPaths Academy
downloadSize: '250 KB'
estimatedSetupTime: '20 minutos'
prerequisites:
  - Node.js 18+ instalado
  - Claude Code o asistente de IA similar
  - Cuenta de Supabase (el tier gratuito funciona)
  - Cuenta de Vercel para despliegue (opcional)
files:
  - path: template/
    description: Proyecto Next.js completo con todos los archivos fuente
  - path: template/PROMPTS.md
    description: El flujo de 3 prompts en ingles
  - path: template/PROMPTS_ES.md
    description: El flujo de 3 prompts en espanol
  - path: template/content/
    description: Archivos JSON para todo el contenido (bilingue)
  - path: README.md
    description: Instrucciones rapidas de configuracion
---

## Que Es Esto?

Una plantilla de landing page completa y lista para produccion construida con Next.js 14, Tailwind CSS y Supabase. La magia? Puedes personalizarla completamente para CUALQUIER idea de SaaS usando solo **3 prompts de IA** en aproximadamente 20 minutos.

No mas pasar dias en landing pages. No mas contratar disenadores para validacion. Solo describe tu idea y deja que la IA genere todo el contenido.

## Lo Que Obtienes

### Una Landing Page Completa

- **Inicio**: Seccion hero, grid de caracteristicas, pasos de como funciona, CTA de waitlist
- **Precios**: Tiers configurables con listas de caracteristicas
- **Nosotros**: Historia y valores de la empresa
- **Contacto**: Formulario de contacto funcional
- **FAQ**: Seccion expandible de preguntas/respuestas
- **Legal**: Politica de Privacidad y Terminos de Servicio

### Caracteristicas Incluidas

- **Bilingue (EN/ES)**: Toggle de idioma en la navegacion, todo el contenido soporta ambos idiomas
- **Lista para Waitlist**: Formulario de captura de email conectado a Supabase
- **Un Solo Color de Acento**: Cambia una variable CSS para cambiar el branding de todo el sitio
- **Responsive para Movil**: Se ve genial en todos los dispositivos
- **TypeScript**: Completamente tipado para confianza del desarrollador
- **Listo para Modo Oscuro**: Las variables CSS hacen facil el theming

### El Flujo de 3 Prompts

| Prompt | Que Hace | Tiempo |
|--------|----------|--------|
| **Descubrimiento** | La IA pregunta sobre tu producto, audiencia, caracteristicas, precios | ~5 min |
| **Generacion** | La IA crea todos los archivos JSON de contenido (bilingue) | ~2 min |
| **Refinamiento** | Revisar, ajustar, probar y desplegar | ~3 min |

## Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS
- **Base de Datos**: Supabase (PostgreSQL)
- **Iconos**: Lucide React
- **Lenguaje**: TypeScript
- **Despliegue**: Listo para Vercel

## Inicio Rapido

### 1. Extraer e Instalar

```bash
unzip saas-landing-template.zip
cd template
npm install
```

### 2. Configurar Supabase

Crea un proyecto gratuito en Supabase y ejecuta este SQL:

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

### 3. Configurar Entorno

```bash
cp .env.example .env.local
```

Agrega tus credenciales de Supabase a `.env.local`.

### 4. Ejecutar el Flujo de 3 Prompts

Abre el proyecto en Claude Code (o tu asistente de IA) y sigue `PROMPTS_ES.md`:

1. **Prompt 1**: Responde preguntas sobre tu producto
2. **Prompt 2**: La IA genera todo el contenido
3. **Prompt 3**: Revisa y despliega

### 5. Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

## Para Quien Es Esto?

- **Solopreneurs** validando ideas de SaaS rapidamente
- **Indie hackers** que quieren landing pages profesionales sin habilidades de diseno
- **Desarrolladores** cansados de construir el mismo boilerplate
- **Cualquiera** que quiera probar demanda de mercado antes de construir

## Casos de Uso de Ejemplo

- Validar un nuevo concepto de SaaS con una waitlist
- Crear una landing page para un proyecto personal
- Construir landing pages para clientes rapidamente
- Aprender patrones de Next.js con un ejemplo del mundo real

## Que NO Esta Incluido

- Autenticacion de usuarios (esto es para validacion pre-lanzamiento)
- Procesamiento de pagos (agrega Stripe cuando estes listo)
- Panel de administracion (lo construiras cuando tengas usuarios)

Esta plantilla esta intencionalmente enfocada en una cosa: poner tu idea frente a clientes potenciales rapido.

---

**Listo para validar tu idea de SaaS?**

Descarga la plantilla, ejecuta 3 prompts y ten tu landing page en vivo en 20 minutos.
