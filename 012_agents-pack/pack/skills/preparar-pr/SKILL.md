---
name: preparar-pr
description: "Dejar un PR listo para que alguien lo revise sin sufrir. Disparar con 'preparar el PR', 'abrir un pull request', 'esto está listo para review'."
---

# Preparar un PR

El costo de un PR no lo paga quien lo escribe: lo paga quien lo revisa. Todo lo de acá
apunta a bajarle el costo al que revisa, porque un PR caro de revisar se revisa mal o no
se revisa.

## Paso 1 — Mirá tu propio diff antes que nadie

```bash
git diff main...HEAD --stat
git diff main...HEAD
```

Leelo entero, como si fuera de otro. Vas a encontrar: un `console.log` olvidado, un
archivo que no querías incluir, un cambio que no tiene nada que ver con el resto.

**Si encontrás algo que no pertenece, sacalo ahora.** Cada archivo fuera de tema le cuesta
atención al que revisa y se la saca a lo que importa.

## Paso 2 — ¿Es un PR o son tres?

Un PR debería poder describirse en **una oración sin "y"**.

Si la descripción es "arregla el login **y** actualiza las deps **y** renombra unos
archivos", son tres PRs. Partirlo cuesta 10 minutos ahora y ahorra una hora de review.

Señales de que hay que partir:
- Más de ~400 líneas de cambio real (sin lockfiles ni generados)
- Toca partes del sistema que no tienen relación entre sí
- Mezcla un refactor con un cambio de comportamiento ← **el peor de todos**

> Un refactor y un cambio de comportamiento en el mismo diff son irrevisables: no se puede
> distinguir qué se movió de qué cambió. Van separados, siempre.

## Paso 3 — Escribí la descripción

La plantilla que hace la diferencia:

```markdown
## Qué

Una oración. Qué hace este PR.

## Por qué

El problema que resuelve, o el link al issue. Si no hay problema, no hay PR.

## Cómo probarlo

Los pasos exactos para que el que revisa lo verifique. Comandos reales.

## Qué mirar con atención

El punto donde vos dudaste. Si dudaste vos, el que revisa también va a dudar —
y si no le decís dónde, lo va a buscar en el lugar equivocado.
```

Esa última sección es la que más rinde y casi nadie escribe. Convierte un review a ciegas
en uno dirigido.

## Paso 4 — Antes de pedir review

- [ ] Los tests pasan **en local**, y pegaste la salida si el PR es delicado
- [ ] El linter pasa
- [ ] Sin `console.log`, `debugger`, `TODO` de vos, ni código comentado
- [ ] Sin archivos que no van: `.env`, capturas, temporales, artefactos de build
- [ ] El título dice qué hace, no en qué estabas trabajando
- [ ] La rama está actualizada contra `main`

## Sobre el título

Conventional commits si el proyecto los usa. Y que describa el **efecto**, no la actividad:

| ✗ | ✓ |
|---|---|
| `fix: cambios en el login` | `fix(auth): la sesión ya no expira al refrescar` |
| `feat: trabajo en el dashboard` | `feat(dashboard): filtro por rango de fechas` |
| `chore: varios arreglos` | (probablemente son tres PRs) |

## Evitar

- **No pidas review de algo que no probaste.** Es el modo más rápido de gastar el tiempo
  de otro.
- **No escribas "cambios menores"** en la descripción. Si son menores, decí cuáles.
- **No mezcles el formateo automático con cambios reales.** Si corriste el formatter sobre
  todo el archivo, va en su propio commit o el diff es ilegible.
- **No lo abras a último momento un viernes** si toca algo que puede romper producción.
