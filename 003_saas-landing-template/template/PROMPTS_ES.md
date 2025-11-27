# El Flujo de Trabajo de 3 Prompts

Este documento contiene los tres prompts que transforman esta plantilla en una landing page completa y personalizada para cualquier idea de SaaS.

---

## Resumen

| Prompt       | Propósito                                          | Tiempo |
| ------------ | -------------------------------------------------- | ------ |
| **Prompt 1** | Descubrimiento - Recopilar información del negocio | ~5 min |
| **Prompt 2** | Generación - Crear todo el contenido               | ~2 min |
| **Prompt 3** | Refinamiento - Pulir y desplegar                   | ~3 min |

---

## PROMPT 1: Descubrimiento

Copia y pega este prompt, luego responde las preguntas:

```
Quiero crear una landing page para mi producto SaaS usando la plantilla en [RUTA_DE_TU_PLANTILLA].

Por favor pregúntame sobre:
1. Nombre del producto y eslogan
2. Qué hace el producto (1-2 oraciones)
3. Audiencia objetivo
4. Beneficios/características clave (3-6)
5. Cómo funciona (3-4 pasos)
6. Modelo de precios (¿tier gratuito? ¿tiers pagos? ¿precios?)
7. Preguntas comunes que podrían tener los clientes (3-5)
8. Información de la empresa/fundador para la página Acerca de
9. Email de contacto
10. Color de acento preferido (o déjame sugerir según la industria)
11. Tono de voz (profesional, casual, divertido, técnico)

Después de que responda, resume mi negocio en un brief que usaremos para el Prompt 2.
```

### Ejemplo de Respuestas:

> 1. **InvoiceFlow** - "Facturación que fluye"
> 2. Una herramienta de facturación que genera y envía facturas automáticamente basadas en hitos de proyectos
> 3. Freelancers y pequeñas agencias que facturan por proyecto
> 4. Auto-generación desde hitos, Recordatorios inteligentes de pago, Soporte multi-moneda, Plantillas hermosas, Portal del cliente, Seguimiento de gastos
> 5. Conecta tu herramienta de proyectos → Configura reglas de hitos → Las facturas se generan automáticamente → Cobra más rápido
> 6. Gratis (3 clientes), Pro $19/mes (ilimitado), Team $49/mes (colaboración)
> 7. "¿Funciona con Notion?", "¿Puedo personalizar las plantillas de factura?", "¿Qué métodos de pago se soportan?", "¿Mis datos están seguros?"
> 8. Fundado por un freelancer cansado de la facturación manual. Fundador único, bootstrapped.
> 9. hello@invoiceflow.io
> 10. Verde (vibras de dinero/crecimiento)
> 11. Profesional pero amigable

---

## PROMPT 2: Generación

Después del Prompt 1, usa este prompt:

```
Basándote en el brief anterior, genera todo el contenido para mi landing page.

IMPORTANTE: El contenido debe ser BILINGÜE (inglés/español). Todos los archivos JSON deben incluir tanto versiones 'en' como 'es' del texto.

Usa agentes paralelos para generar estos archivos simultáneamente:
- Agente 1: Generar content/site.json (configuración global, navegación, footer, colores)
- Agente 2: Generar content/home.json (hero, características, cómo funciona, CTA de waitlist)
- Agente 3: Generar content/pricing.json (todos los tiers con características)
- Agente 4: Generar content/about.json (historia, valores)
- Agente 5: Generar content/contact.json y content/faq.json
- Agente 6: Generar content/legal.json (política de privacidad, términos - completar detalles de la empresa)

Además:
- Actualiza el color --accent en src/app/globals.css a valores RGB que coincidan con mi color elegido
- Asegúrate de que todo el copy sea convincente, enfocado en beneficios y coincida con mi tono de voz
- Usa verbos de acción y propuestas de valor claras
- Mantén los titulares concisos (menos de 10 palabras)
- Haz los CTAs específicos ("Inicia Prueba Gratuita" > "Comenzar")

Escribe todos los archivos directamente en la carpeta de la plantilla.
```

### Lo Que Esto Genera:

La IA creará/actualizará 7 archivos con contenido específico para tu negocio:

| Archivo        | Contenido                                                                             |
| -------------- | ------------------------------------------------------------------------------------- |
| `site.json`    | Nombre de marca, eslogan, navegación, enlaces de footer, enlaces sociales, info legal |
| `home.json`    | Sección hero, grid de características, pasos de cómo funciona, CTA de waitlist        |
| `pricing.json` | Todos los tiers de precios con características, FAQ de precios                        |
| `about.json`   | Historia de la empresa, valores, sección de equipo                                    |
| `contact.json` | Campos de formulario, información de contacto                                         |
| `faq.json`     | 6-8 preguntas frecuentes                                                              |
| `legal.json`   | Política de privacidad y Términos de Servicio                                         |

---

## PROMPT 3: Refinamiento y Despliegue

Usa este prompt para ajustes finales y despliegue:

```
Finalicemos mi landing page:

1. **Revisión**: Lee todos los archivos JSON generados y verifica:
   - Consistencia en tono y mensajes
   - No quede texto placeholder ([corchetes] o "Lorem ipsum")
   - Listas de precios y características precisas
   - Páginas legales completas con la información de mi empresa
   - Todo el contenido esté en ambos idiomas (en/es)

2. **Correcciones rápidas** (si es necesario):
   - [Lista cualquier cambio específico que quieras]

3. **Verificación de configuración**:
   - Verifica que la conexión de Supabase esté configurada
   - Revisa que todas las páginas se rendericen correctamente
   - Prueba el envío del formulario de waitlist

4. **Despliegue**:
   - Proporciona instrucciones paso a paso para despliegue en Vercel
   - Lista las variables de entorno que necesito configurar
   - Cualquier verificación post-despliegue

Ejecuta el servidor de desarrollo y usa un agente de pruebas de navegador para verificar que el sitio funcione.
```

---

## Consejos para Mejores Resultados

### Sé Específico en el Prompt 1

Cuanto más detalle proporciones, mejor será el contenido generado:

- ❌ "Una app para freelancers"
- ✅ "Una app de facturación que auto-genera facturas desde hitos de proyectos en Notion para diseñadores freelance"

### Revisa el Brief

Antes del Prompt 2, asegúrate de que el resumen de la IA capture tu visión. Corrige cualquier malentendido.

### Itera en el Prompt 3

Puedes ejecutar el Prompt 3 múltiples veces para refinar secciones específicas:

- "Haz el titular del hero más urgente"
- "Agrega una característica sobre acceso a API"
- "Cambia los precios para incluir descuento anual"

### Sugerencias de Color por Industria

| Industria            | Colores Sugeridos                       |
| -------------------- | --------------------------------------- |
| Finanzas/Facturación | Verde (#10b981), Azul (#3b82f6)         |
| Salud                | Azul (#0ea5e9), Verde azulado (#14b8a6) |
| Productividad        | Púrpura (#8b5cf6), Índigo (#6366f1)     |
| Creativo/Diseño      | Rosa (#ec4899), Naranja (#f97316)       |
| Herramientas Dev     | Pizarra (#64748b), Cian (#06b6d4)       |
| E-commerce           | Naranja (#f97316), Rojo (#ef4444)       |

---

## Configuración SQL de Supabase

Ejecuta esto en tu Editor SQL de Supabase antes de probar:

```sql
-- Tabla de waitlist
create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now(),
  source text default 'website'
);

-- Habilitar Row Level Security
alter table waitlist enable row level security;

-- Permitir inserciones anónimas (para el formulario de waitlist)
create policy "Allow anonymous inserts" on waitlist
  for insert with check (true);

-- Opcional: Envíos de formulario de contacto
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

## Solución de Problemas

### Errores de "Module not found"

Ejecuta `npm install` para asegurar que todas las dependencias estén instaladas.

### La conexión a Supabase falla

1. Verifica que `.env.local` tenga los valores correctos (sin comillas alrededor de los valores)
2. Verifica que el proyecto de Supabase esté activo
3. Revisa que la clave anon tenga permisos de inserción

### Los estilos no se aplican

1. Asegúrate de que `globals.css` esté importado en `layout.tsx`
2. Verifica que `--accent` esté definido en `:root`
3. Ejecuta `npm run dev` para ver las actualizaciones JIT de Tailwind

### Los envíos de formulario no funcionan

1. Revisa la pestaña Network del navegador en busca de errores de API
2. Verifica que la tabla de Supabase exista
3. Revisa que las políticas RLS permitan inserciones
