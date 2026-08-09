---
name: escribir-tests
description: "Escribir tests que atrapen bugs de verdad, no que suban el coverage. Disparar con 'escribí tests para esto', 'falta cobertura', 'testeá esta función'."
---

# Escribir tests

Un test sirve si **falla cuando el código está mal**. El coverage no mide eso: mide qué
líneas se ejecutaron, que es otra cosa.

## El chequeo que decide todo

Antes de dar un test por bueno:

> **Rompé el código a propósito. ¿El test falla?**

Cambiá un `>` por `>=`, invertí una condición, devolvé `null`. Si el test sigue verde, no
está testeando nada — está ejecutando líneas.

Es el filtro más barato que existe y descarta la mayoría de los tests decorativos.

## Qué testear, en orden

### 1. Los bordes, no el medio
Ahí vive el 80% de los bugs:

| Categoría | Casos |
|---|---|
| Vacío | lista vacía, string vacío, objeto sin campos |
| Uno | un solo elemento (rompe los loops que asumen ≥2) |
| Límite | cero, negativo, el máximo, el máximo + 1 |
| Ausente | `null`, `undefined`, campo que no vino |
| Repetido | duplicados donde se espera unicidad |

El caso feliz con tres elementos ya funciona. Testealo una vez y seguí.

### 2. El contrato, no la implementación
Testeá **qué** devuelve, no **cómo** lo calcula. Un test que verifica que se llamó a
`_helperInterno()` se rompe en el próximo refactor sin que nada esté mal — y eso entrena
al equipo a borrar tests en vez de arreglarlos.

### 3. Los errores
Que falle bien es parte del contrato. ¿Tira la excepción correcta? ¿Con qué mensaje?
¿Deja el estado consistente?

## Cómo se escribe uno

```
test("[qué comportamiento], cuando [qué condición]")
  ├── Preparar:  el estado mínimo. Nada que no haga falta.
  ├── Ejecutar:  una sola llamada
  └── Verificar: una sola cosa
```

**El nombre es documentación.** `test("devuelve 0 cuando la lista está vacía")` le dice al
próximo qué se rompió. `test("test caso 3")` lo obliga a leer el cuerpo.

## Anti-patterns

| Qué | Por qué falla |
|---|---|
| Un test que verifica cinco cosas | Falla una y no sabés cuál sin leer el código |
| Mockear todo lo que toca | Testeás tus mocks, no tu código |
| Tests que dependen del orden | Verde en local, rojo en CI, y nadie sabe por qué |
| `expect(result).toBeTruthy()` | `"error"` es truthy. Verificá el valor real |
| Fechas o random sin fijar | Falla un martes a las 23:59 y nunca más |
| Copiar el cálculo en el test | Si el código y el test comparten el bug, los dos pasan |

## Cuándo NO escribir un test

Vale decirlo, porque el reflejo es testear todo:

- Getters y setters triviales sin lógica
- Código que va a cambiar la semana que viene (testealo cuando se estabilice)
- Wrappers de una librería: eso testea la librería, no tu código
- La UI pixel por pixel: se rompe con cada cambio de diseño y no atrapa nada

Un test que se borra tres meses después nunca debió escribirse.

## Antes de entregar

- [ ] Rompí el código y **cada** test nuevo falló
- [ ] Los nombres dicen qué comportamiento se verifica
- [ ] Están cubiertos: vacío, uno, límite, ausente
- [ ] Ningún test depende de otro ni del orden
- [ ] Sin fechas reales ni random sin semilla
- [ ] Corren en menos de lo que alguien tolera esperar
