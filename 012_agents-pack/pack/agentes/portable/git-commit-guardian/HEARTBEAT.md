# Heartbeat (checklist)

Este perfil es **on-demand**: no tiene latido propio ni scheduler. La lista de abajo es
para cuando el humano pide una pasada de higiene sobre el repo, no un loop.

- [ ] ¿Hay cambios sin commitear hace días? (`git status`, fecha de los archivos)
- [ ] ¿Algún archivo sensible quedó trackeado? (`git ls-files | grep -iE 'env|key|pem|secret'`)
- [ ] ¿Hay ramas locales ya mergeadas para limpiar? (`git branch --merged`)
- [ ] ¿El `.gitignore` cubre los artefactos que aparecen como untracked?
