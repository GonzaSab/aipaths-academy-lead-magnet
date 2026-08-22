# Transcripción de audio (OpenAI Whisper, con Groq como alternativa)

Baja notas de voz que llegan por WhatsApp y las transcribe a texto, para que el agente
las procese como si fueran un mensaje de texto normal.

## Por qué OpenAI y no Groq

Usa `OPENAI_API_KEY` — la misma que ya tenés configurada para el agente. Cero cuentas
nuevas, cero dependencias nuevas (`openai` ya es dependencia base del template vía
`pydantic-ai-slim[openai]`). Es más caro por hora de audio que Groq (~USD 0.36/hora vs.
~USD 0.04–0.11/hora), pero para arrancar esa diferencia son centavos — no vale la pena
sumar fricción por eso todavía.

**Cuándo cambiar a Groq**: cuando el volumen de audio sea real (cientos de notas de voz
por día) y esos centavos empiecen a sumar. El cambio es mínimo, misma interfaz:

```python
# pip/uv: agregá el extra "audio" (`uv sync --extra audio`, instala `groq`)
from groq import Groq

def transcribe_audio(audio_bytes: bytes, filename: str = "audio.ogg") -> str | None:
    settings = get_settings()
    client = Groq(api_key=settings.groq_api_key)  # GROQ_API_KEY en tu .env
    transcription = client.audio.transcriptions.create(
        file=(filename, audio_bytes),
        model="whisper-large-v3-turbo",
        language="es",
    )
    return transcription.text
```

Sacás la key en [console.groq.com](https://console.groq.com/keys). El resto del archivo
(`download_audio`, `transcribe_whatsapp_audio`) queda igual.

## Por qué no viene activado por default

Agrega una llamada HTTP extra por mensaje de audio y hay que tocar 3 archivos de `app/`
(ver abajo). Si tu bot no recibe audios, no lo necesitás.

## Cómo copiarlo

Copiá `transcribe.py` a `app/transcribe.py` (mismo nivel que `app/sender.py`). Con la
opción por default (OpenAI) no hace falta instalar nada más — ya tenés `OPENAI_API_KEY`
configurada desde el arranque del template.

## Integración: 3 puntos a tocar en `app/`

### 1. `app/webhook/normalize.py`

Hoy `extract_text_messages` filtra explícitamente `type != "text"` y descarta todo lo
demás (el comentario en el código ya dice "Para audio, ver examples/audio_transcripcion").
Agregá una función hermana:

```python
class InboundAudio(TypedDict):
    wa_id: str
    message_id: str
    media_id: str


def extract_audio_messages(payload: dict[str, Any]) -> Iterator[InboundAudio]:
    for entry in payload.get("entry", []):
        for change in entry.get("changes", []):
            for message in change.get("value", {}).get("messages", []):
                if message.get("type") != "audio":
                    continue
                yield InboundAudio(
                    wa_id=message["from"],
                    message_id=message["id"],
                    media_id=message.get("audio", {}).get("id", ""),
                )
```

### 2. `app/webhook/router.py`

En `receive()`, además de `extract_text_messages(payload)`, recorré
`extract_audio_messages(payload)` y encolá un job. Lo más simple: transcribir ahí mismo,
antes de encolar, y tratar el resultado como un mensaje de texto más — así no tenés que
tocar el formato de `buffer_inbound` ni la cola de pendientes en Redis (que hoy guarda
strings de texto).

### 3. Dónde llamar a `transcribe_whatsapp_audio`

Si transcribís en el webhook (opción de arriba), listo, no tocás `app/queue/tasks.py`. Si
preferís transcribir en el worker (por ejemplo para no bloquear la respuesta del webhook a
Meta con la llamada a Whisper), hacelo al principio de `process_wa_id` en
`app/queue/tasks.py`, antes de armar el `prompt`:

```python
from app.transcribe import transcribe_whatsapp_audio

# si el mensaje pendiente es de audio (media_id) en vez de texto:
texto = transcribe_whatsapp_audio(media_id)
if texto is None:
    send_text(wa_id, "No pude escuchar el audio, ¿me lo escribís en texto?")
    return
```

Si `transcribe_whatsapp_audio` devuelve `None` (falló la descarga o la transcripción),
nunca le mandes `None` al agente — respondé pidiendo texto, como en el ejemplo.

## Responder también con audio (nota de voz)

No implementado acá. Si querés que el bot conteste con voz (TTS):

- Necesitás un proveedor de TTS aparte (ni OpenAI Whisper ni Groq cubren esto — revisá
  opciones vigentes con buena voz en español: ElevenLabs, OpenAI TTS, etc.).
- Para que WhatsApp lo entregue como **nota de voz nativa** (con forma de onda,
  reproducible inline) y no como archivo adjunto, el archivo tiene que ser **OGG con
  codec Opus** y la metadata correcta. Si mandás mp3/wav, WhatsApp lo muestra como
  documento adjunto, no como nota de voz.

## Variable de entorno

Ninguna nueva por default — reusa `OPENAI_API_KEY` y `WHATSAPP_ACCESS_TOKEN` (ambas ya
existentes). `GROQ_API_KEY` solo hace falta si cambiás a la alternativa de arriba.
