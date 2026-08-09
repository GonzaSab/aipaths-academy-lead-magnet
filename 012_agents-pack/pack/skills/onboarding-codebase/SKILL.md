---
name: onboarding-codebase
description: "Entender un codebase que no conocés, rápido y sin leerlo entero. Disparar con 'no conozco este repo', 'explicame este proyecto', 'por dónde empiezo acá'."
---

# Onboarding a un codebase

El error clásico es empezar a leer archivos. Un repo mediano tiene miles: leerlos en orden
alfabético gasta todo el contexto antes de entender nada.

**Se lee en cuatro pasadas, de barato a caro.** Parás en cuanto podés responder la pregunta
que te trajo.

## Pasada 1 — La forma (2 minutos, casi cero contexto)

```bash
git rev-parse --show-toplevel && ls -a
cat README.md 2>/dev/null | head -40
git log --oneline -20
git log --format='%an' | sort | uniq -c | sort -rn | head -5
```

Con eso ya sabés: qué dice que es, qué se tocó último, quién lo mantiene, y si está vivo
o abandonado.

## Pasada 2 — Los hechos duros (el CI no miente)

El README envejece; el CI corre. Es la mejor fuente de qué hace el proyecto **hoy**.

```bash
cat .github/workflows/*.yml 2>/dev/null | grep -E 'run:|uses:'
cat package.json 2>/dev/null | grep -A20 '"scripts"'
cat Makefile 2>/dev/null | grep -E '^[a-z-]+:'
```

De acá salen los comandos reales de build, test y deploy.

## Pasada 3 — El mapa (dónde vive qué)

```bash
git ls-files | wc -l
git ls-files | sed 's|/[^/]*$||' | sort | uniq -c | sort -rn | head -15
```

Las carpetas con más archivos son el centro de gravedad. Después buscá los bordes: por
dónde entra y sale la data.

```bash
grep -rIl 'listen(\|createServer\|app\.\(get\|post\)\|@app\.route\|func main' --include='*.ts' --include='*.js' --include='*.py' --include='*.go' . 2>/dev/null | head
```

## Pasada 4 — El código (solo lo que hace falta)

Recién ahora abrís archivos, y solo los del camino que te interesa. Seguí **un** flujo de
punta a punta —una request, un comando, un job— en vez de leer módulos sueltos.

## Las tres preguntas que valen

Antes de dar por entendido un repo, respondé estas. Si no podés, seguí buscando:

1. **¿Cuál es el camino feliz?** Una request o un comando entra: ¿qué toca, en qué orden?
2. **¿Dónde está el estado?** Base, caché, archivos, memoria. El estado explica la
   arquitectura mejor que cualquier diagrama.
3. **¿Qué convención sigue que no es obvia?** La que si la rompés, alguien te lo va a
   marcar en el review. Vive en `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md` o en el
   patrón repetido de los últimos commits.

## Señales de alerta que conviene anotar

- El README cita comandos que no existen en los scripts → la doc está muerta
- Un solo autor en los últimos 50 commits → bus factor de 1
- `node_modules` o binarios grandes trackeados → higiene floja, esperá más sorpresas
- Tests que no se corren en CI → existen pero nadie los mira

## Evitar

- **No leas archivos en orden alfabético.** Seguí un flujo.
- **No confíes en el README por encima del CI.** Cuando se contradicen, gana el CI.
- **No intentes entender todo.** Entendé lo que necesitás para la tarea que tenés, y anotá
  el resto como territorio sin mapear.
