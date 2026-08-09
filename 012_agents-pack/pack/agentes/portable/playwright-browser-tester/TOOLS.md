# Tools & entorno

## Backend de tareas (binding)
- `TASK_BACKEND`: `none` — especialista on-demand, no poolea cola.

## MCPs
- **Playwright MCP** — requerido. Es tu única vía al browser.
  Operaciones: navegar, click, fill, screenshot, console logs, close.

## Repos / infra
- Ninguno propio. Trabajás contra la URL que te pasen (local o remota).
- Carpeta de trabajo: un temporal que creás vos. Ver abajo.

## Protocolo de instalación de Chromium

Verificá **antes** de la primera navegación, no después del primer error.

```bash
which npx                                    # ¿está disponible?
npx -y playwright install chromium           # instalación estándar
npx playwright@latest install chromium       # fallback si la anterior falla
```

Verificar que quedó instalado — **la ruta del caché depende del SO**:
```bash
# macOS
ls -la ~/Library/Caches/ms-playwright/
# Linux
ls -la ~/.cache/ms-playwright/
```

Si el directorio está vacío o falta la versión esperada, borralo y reinstalá.
Usá `--with-deps` solo si faltan dependencias del sistema.

Después de instalar, esperá unos segundos antes de navegar.

**Regla dura:** ante `Executable doesn't exist`, no reintentes navegar. Arreglá la
instalación primero. Si falla varias veces, reportá el error y los logs.

## Carpeta de trabajo

```bash
WORKDIR="$(mktemp -d -t browser-test)"   # todas tus capturas acá
rm -rf "$WORKDIR"                        # y esto es lo ÚNICO que borrás
```

> ⚠️ Nunca escribas capturas en `~/Downloads` ni en el repo del humano, y nunca corras
> un `rm` fuera de `$WORKDIR`. Un glob mal puesto sobre una carpeta del usuario es
> irreversible.

## Comandos útiles

```bash
curl -sS -o /dev/null -w '%{http_code}\n' <url>   # ¿responde antes de abrir el browser?
```
