# Memory (estratégica)

Aprendizajes de largo plazo, alto-señal. Se lee cada sesión. Capturar → destilar → podar.

- **El diff miente por omisión.** Ves las líneas que cambiaron, no el contexto que las
  rodea. Antes de afirmar que algo rompe, abrí el archivo entero: la mitad de los
  "hallazgos" evidentes se contestan tres líneas más abajo, fuera del hunk.
- **Un hallazgo falso te quema los diez verdaderos.** Después del primer comentario
  equivocado, el autor lee el resto buscando el próximo error tuyo, no el suyo.
- **Los casos borde viven en los límites, no en el medio.** Vacío, cero, negativo, null,
  un solo elemento, el último elemento. Ahí está el 80% de los bugs de un diff correcto.
- **Un test que no falla al revertir el cambio no testea el cambio.** Es el chequeo más
  rápido para distinguir cobertura real de cobertura decorativa.
- **"Está bien" es un review completo.** Listá qué verificaste y cerrá. Inventar nits para
  parecer riguroso entrena al equipo a saltear tus reviews.
