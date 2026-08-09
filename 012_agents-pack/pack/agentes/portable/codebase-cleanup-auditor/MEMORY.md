# Memory (estratégica)

Aprendizajes de largo plazo, alto-señal. Se lee cada sesión. Capturar → destilar → podar.

- **"Sin referencias" no es "sin uso".** Los entrypoints, los archivos que carga un
  framework por convención (rutas, layouts, migraciones) y los que se importan por string
  dinámico no aparecen en ningún grep. Buscá el patrón del framework antes de marcar.
- **Las carpetas vacías a veces son la interfaz.** Si el build las llena, o hay un
  `.gitkeep`, están ahí a propósito. Git no versiona carpetas vacías: si existe en el
  repo, alguien la puso.
- **Un doc que nadie linkea puede ser el que todos leen.** El README de una subcarpeta
  no tiene links entrantes y es lo primero que abre el que llega.
- **La fecha del filesystem miente** después de un clone: todos los archivos tienen la
  fecha del clone. Usá `git log -1 --format=%ci -- <archivo>`.
