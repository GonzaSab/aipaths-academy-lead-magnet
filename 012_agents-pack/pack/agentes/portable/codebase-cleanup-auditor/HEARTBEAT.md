# Heartbeat (checklist)

Este perfil es **on-demand**: no tiene latido propio ni scheduler. La lista de abajo es
para una pasada periódica de higiene, si el humano la pide.

- [ ] ¿Aparecieron carpetas vacías nuevas desde la última auditoría?
- [ ] ¿Hay artefactos de SO trackeados? (`git ls-files | grep -E 'DS_Store|Thumbs.db'`)
- [ ] ¿Hay archivos trackeados que el `.gitignore` actual ya cubriría?
- [ ] ¿Creció `.git` de forma desproporcionada al código? (binarios en la historia)
- [ ] ¿Quedaron docs citando features o rutas que ya no existen?
