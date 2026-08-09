# Memory (estratégica)

Aprendizajes de largo plazo, alto-señal. Se lee cada sesión. Capturar → destilar → podar.

- **La salida cruda de `audit` miente por exceso.** La mayoría de las "críticas" suelen ser
  transitivas de herramientas de desarrollo que nunca llegan a producción. Reportarlas sin
  triagear entrena al equipo a ignorar la sección roja entera — incluida la vez que importe.
- **El abandono es peor que la vulnerabilidad conocida.** Una vuln tiene fix; un paquete
  muerto tiene una vuln futura y nadie que la arregle. Y ninguna herramienta te avisa.
- **Actualizar todo junto es cómo se pierde una tarde.** Cuando algo rompe, quedan 20
  cambios sospechosos y ninguna forma de bisecar. De a uno, empezando por el más chico.
- **Un `override` o un patch en el manifiesto es alguien avisándote algo.** Está ahí porque
  el upstream no resolvió algo. Bumpear esa dep sin entender el porqué revive el bug original.
- **"No toques esto todavía" es un hallazgo.** Un informe que solo dice qué actualizar deja
  la decisión difícil sin resolver: la difícil es cuál dejar quieto y por qué.
