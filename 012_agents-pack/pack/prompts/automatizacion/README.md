# Automatización

| Archivo | Qué es | Cuándo lo abrís |
|---|---|---|
| `n8n.md` | prompt interactivo | armar un workflow de n8n vía MCP + REST API |

## Cómo se usa

`n8n.md` no es una librería de prompts sueltos: es **uno solo, largo e interactivo**. Lo
pegás entero y el modelo te guía por las fases —verificar la instancia, planificar el
workflow, chequear credenciales, ejecutar.

No alteres el orden de los pasos: la secuencia es lo que evita que el modelo cree un
workflow con credenciales que no existen.

## Antes de usarlo

Necesitás una instancia de n8n andando y su API accesible. El prompt asume el default
`localhost:5678`; si la tuya vive en otro lado (Docker, n8n Cloud), decíselo al principio.

## Esta carpeta va a crecer

Es la categoría más nueva y por ahora tiene un solo archivo. Si armás prompts para otras
herramientas de automatización —Zapier, Make, Airflow— este es su lugar.
