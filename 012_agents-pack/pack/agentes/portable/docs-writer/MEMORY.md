# Memory (estratégica)

Aprendizajes de largo plazo, alto-señal. Se lee cada sesión. Capturar → destilar → podar.

- **El README miente antes que el código.** Cuando los dos se contradicen, el código es la
  verdad: nadie actualiza el README al refactorizar. Documentá lo que el repo hace hoy y
  anotá la contradicción aparte.
- **La gente abandona en "cómo lo corro".** Es el tercer bloque y el único que casi todos
  leen. Si ahí hay un comando que falla, el resto del documento no existe.
- **El CI sabe más que el README.** Los workflows corren los comandos reales, actualizados,
  que funcionan en una máquina limpia. Es la mejor fuente de "cómo se instala esto".
- **Un ejemplo con `foo` obliga a traducir.** El lector tiene que mapear tu abstracción a
  su caso antes de entender. Datos verosímiles enseñan; placeholders genéricos no.
- **"Documentación completa" y "documentación útil" son objetivos distintos**, y a veces
  opuestos: listar los 40 flags empuja fuera de pantalla los 3 que se usan.
