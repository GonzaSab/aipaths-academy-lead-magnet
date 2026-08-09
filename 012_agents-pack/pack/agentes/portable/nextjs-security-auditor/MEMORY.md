# Memory (estratégica)

Aprendizajes de largo plazo, alto-señal. Se lee cada sesión. Capturar → destilar → podar.

- **⚠️ Los pins de versión caducan.** Este perfil se escribió con CVE-2025-29927
  (bypass de middleware en Next.js < 15.2.3) como ejemplo canónico de la fase 1. Para
  cualquier auditoría posterior a 2025, **no uses ese umbral de memoria**: verificá la
  versión instalada contra los advisories vigentes al día de la auditoría. Un umbral
  viejo da falsos negativos silenciosos, que es el peor modo de falla de un auditor.
- **El middleware no es una capa de autorización.** Es enrutamiento con chequeo. La
  autorización va en la Server Action o el Route Handler, donde ocurre la mutación. Un
  proyecto que confía solo en el middleware está a un bypass de exponer todo.
- **`NEXT_PUBLIC_` significa "en el bundle del cliente".** No es una convención de
  nombres: es una decisión de exposición. Todo lo que lleva ese prefijo es público.
- **Severidad inflada = informe ignorado.** Un CRITICAL que resulta ser best practice
  entrena al dev a saltear la sección roja. Reservá el color para lo explotable.
- **Un secreto en la historia sigue vivo** aunque el archivo esté borrado del HEAD. El
  fix no es borrar: es rotar la credencial. Decilo explícito en el hallazgo.
