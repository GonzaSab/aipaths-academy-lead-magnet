# Agente de WhatsApp con IA — Template AIPaths

> Armá tu bot de WhatsApp con IA sin perder días descifrando qué cambió en la documentación de Meta. Lo dejamos documentado para que sea simple — Gonza, AIPaths.

📺 **Video de referencia:** [mirá el template explicado paso a paso](https://www.youtube.com/watch?v=ANsWFx_yvfs&list=PLItELtCfBA389ShH6qJOUkjZdRsbTQg44&index=25).

Punto de partida productivo en Python sobre la API oficial de WhatsApp (Meta Cloud API): webhook, cola, worker, un agente con herramientas y los guardrails que un bot real necesita desde el día uno (firma verificada, dedupe, debounce, rate limit, logs sin datos personales en claro).

**¿Primera vez acá?** Empezá por el [Manual de usuario](MANUAL-DE-USUARIO.md) — qué cuentas crear, en qué orden, y qué variables vas a necesitar de cada una.

## Qué es esto (y qué no)

- Es un scaffold que ya funciona: recibís mensajes, los procesás en cola (nunca dentro del webhook), el agente responde con herramientas, y guardás historial + auditoría en Postgres.
- **No** es un tutorial paso a paso de la consola de Meta — esa UI cambia seguido y la fuente correcta es la documentación oficial (ver [docs/02-configuracion-meta.md](docs/02-configuracion-meta.md)).
- **No** es magia sin código: vas a definir tus propias herramientas en `app/agent/tools.py` y conectar tus sistemas reales (pedidos, calendario, CRM).

## Empezar

¿Bajaste esto como `.zip` en vez de `git clone`? No trae historial de git — corré `git init` en la carpeta antes de tocar nada, así podés versionar tus cambios desde el día uno (lo vas a necesitar para deployar).

### Opción 0 — contale al bot quién sos (opcional, pero ahorra tiempo)

Copiá [context/brief-empresa.md.example](context/brief-empresa.md.example) a `context/brief-empresa.md` y completalo — nombre del negocio, tono, FAQs, políticas, qué deriva a humano. El bot lo carga solo en su system prompt (`app/agent/agent.py`), y si arrancás con la Opción 1, el agente de código lo lee antes de preguntarte nada.

### Opción 1 — con un agente de código (recomendado)

Abrí este repo con Claude Code, Cursor o similar y decile que lea [AGENTS.md](AGENTS.md). Te hace un par de preguntas puntuales (idioma, casos de uso, si necesitás audio/CRM/escalado a humano) y arma el `.env` y los módulos que corresponden.

### Opción 2 — a mano

```bash
uv sync --all-extras
cp .env.example .env   # completá los valores — ver docs/02-configuracion-meta.md
docker compose up -d redis postgres
uv run uvicorn app.main:app --reload   # terminal 1: receptor
uv run python -m app.queue.worker      # terminal 2: worker
```

Para que Meta le pueda pegar a tu máquina en desarrollo necesitás un túnel — ver [scripts/dev_tunnel.md](scripts/dev_tunnel.md). Usalo siempre con el número de prueba, nunca con el de producción: el porqué y el flujo completo están en [docs/07-entornos-test-vs-produccion.md](docs/07-entornos-test-vs-produccion.md).

## Ruta de construcción

No lo hagas todo junto. [docs/00-ruta-de-construccion.md](docs/00-ruta-de-construccion.md) tiene el orden recomendado: texto simple → arquitectura de producción (ya está en `app/`) → Flows → escalado a humano → audio → CRM → producción.

## Estructura

```
app/            el bot: webhook, cola/worker, agente, store (Redis + Postgres)
examples/       piezas opcionales (audio, CRM, Flows, Chatwoot) — se copian cuando se necesitan
docs/           arquitectura, pricing, despliegue, anti-patrones, checklist, FAQ
tests/          pytest, sin infra externa (fakeredis)
```

## Stack

- **Meta Cloud API** directo, sin BSP — vía [PyWa](https://pywa.readthedocs.io) para el envío de mensajes
- **FastAPI** para el receptor del webhook
- **RQ + Redis** para la cola — separar receptor de procesamiento no es opcional, ver [docs/01-arquitectura.md](docs/01-arquitectura.md)
- **Pydantic AI + OpenAI** para el loop del agente (tool calling tipado)
- **PostgreSQL** (SQLAlchemy) para historial de conversación y auditoría
- **uv + ruff + mypy + pytest** para el tooling

## Antes de ir a producción

Repasá [docs/06-checklist-pre-lanzamiento.md](docs/06-checklist-pre-lanzamiento.md) y [docs/05-anti-patrones.md](docs/05-anti-patrones.md) — ahí están los errores que hacen que un bot dure dos semanas antes de que te bloqueen el número.

## Licencia

MIT — usalo, modificalo, compartilo.

---

Decisiones de arquitectura revisadas en agosto 2026. Los precios y las políticas de Meta cambian seguido — este repo documenta lo verificado a esa fecha en [docs/03-pricing-y-costos.md](docs/03-pricing-y-costos.md), no asumas que sigue igual sin confirmarlo.
