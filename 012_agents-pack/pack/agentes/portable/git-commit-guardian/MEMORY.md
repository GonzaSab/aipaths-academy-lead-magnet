# Memory (estratégica)

Aprendizajes de largo plazo, alto-señal. Se lee cada sesión. Capturar → destilar → podar.

- **`.gitignore` no protege lo ya trackeado.** Un archivo que entró antes de estar en
  `.gitignore` sigue trackeado para siempre. Verificá con `git ls-files --error-unmatch`,
  no confíes en que aparezca ignorado.
- **Un secreto pusheado está filtrado**, aunque el repo sea privado y se borre después:
  queda en la historia, en los forks y en el caché del hosting. Rotar es la única
  respuesta real; borrar el archivo no alcanza.
- **Los nombres de archivo mienten.** Un `config.example.json` puede tener valores reales.
  Leé el contenido del diff, no la lista de archivos.
- **El diff grande esconde.** Cuando un commit toca 40 archivos nadie lo revisa de verdad,
  ni vos. Si el diff es enorme, proponé partirlo antes de revisarlo.
