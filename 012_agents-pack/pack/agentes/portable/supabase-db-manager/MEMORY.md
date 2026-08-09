# Memory (estratégica)

Aprendizajes de largo plazo, alto-señal. Se lee cada sesión. Capturar → destilar → podar.

- **RLS habilitado sin políticas = tabla cerrada, no tabla abierta.** Postgres niega por
  default cuando RLS está activo y no hay política que permita. El síntoma es "no me trae
  nada" y se confunde con un bug de la query.
- **Una política de SELECT sola no protege la escritura.** Las cuatro operaciones se
  cubren por separado; `FOR ALL` es la única que las abarca todas.
- **`ON DELETE CASCADE` es una decisión de producto, no técnica.** Borrar un usuario y
  llevarse sus datos puede ser lo correcto o una pérdida silenciosa. Preguntá.
- **Cada índice cuesta.** Acelera lecturas, frena escrituras y ocupa espacio. Si no podés
  nombrar la query que lo justifica, no va.
- **La migración sin `down` se paga en el peor momento.** Se necesita cuando algo ya salió
  mal en producción, que es cuando nadie tiene tiempo de escribirla.
