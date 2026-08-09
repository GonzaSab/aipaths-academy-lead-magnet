# Prompts de Depuración y Resolución de Errores

> Prompts gratuitos para depurar código y corregir errores. Sources: [DocsBot](https://docsbot.ai/prompts/programming), [Qodo](https://www.qodo.ai/blog/best-ai-coding-assistant-tools/)

---

## Análisis de Errores

### Depuración General de Errores
```
Estoy recibiendo este error en mi código de [LENGUAJE/FRAMEWORK]:

Mensaje de error:
```
[PEGÁ EL MENSAJE DE ERROR]
```

Código relevante:
```[language]
[PEGÁ EL CÓDIGO]
```

Contexto:
- Lo que intentaba hacer: [DESCRIPCIÓN]
- Cuándo ocurre: [DISPARADOR]
- Entorno: [VERSIÓN DE NODE, NAVEGADOR, SO, etc.]

Por favor:
1. Explicá qué está causando este error
2. Proporcionar la solución
3. Explicá por qué funciona la solución
4. Sugerí cómo prevenir problemas similares
```

### Análisis de Rastreo de Pila
```
Analizá este rastreo de pila e identificá la causa raíz:

```
[PEGÁ EL RASTREO COMPLETO]
```

Mi estructura de código:
[DESCRIPCIÓN BREVE DE LOS ARCHIVOS RELEVANTES]

Preguntas:
1. ¿Cuál es la verdadera fuente del error?
2. ¿Cuál es la cadena de eventos que llevó a esto?
3. ¿Cómo lo corrijo?
4. ¿Hay algún problema relacionado que debería verificar?
```

### Error de Tiempo de Ejecución vs Compilación
```
Tengo un error de [tiempo de ejecución/compilación/construcción]:

Error:
```
[SALIDA DE ERROR]
```

Entorno:
- Versión de [LENGUAJE]: [VERSIÓN]
- Herramienta de construcción: [WEBPACK/VITE/TSC/etc.]
- Gestor de paquetes: [NPM/YARN/PNPM]

Cambios recientes:
- [QUÉ CAMBIÓ RECIENTEMENTE]

Ayudame a entender si esto es un:
- Problema de configuración
- Conflicto de dependencias
- Error de sintaxis/lógica de código
- Desajuste de entorno
```

---

## Tipos de Errores Específicos

### Errores de Tipo (TypeScript)
```
Estoy recibiendo errores de TypeScript que no entiendo:

```typescript
[PEGÁ CÓDIGO CON ERROR DE TIPO]
```

Error:
```
[PEGÁ ERROR DE TS]
```

Mis tipos/interfaces:
```typescript
[PEGÁ TIPOS RELEVANTES]
```

Por favor:
1. Explicá la falta de coincidencia de tipos
2. Mostrar la tipificación correcta
3. Explicá el razonamiento de TypeScript
4. Sugerí alternativas seguras en cuanto a tipos
```

### Errores de Async/Promise
```
Tengo problemas con código asincrónico:

```[language]
[PEGÁ CÓDIGO ASINCRÓNICO]
```

Problema: [DESCRIBIR EL PROBLEMA - condición de carrera, rechazo no manejado, etc.]

Comportamiento esperado: [LO QUE DEBERÍA PASAR]
Comportamiento actual: [LO QUE ESTÁ PASANDO]

Ayudame a:
1. Identificar el problema asincrónico
2. Corregir la cadena de promesas/flujo asincrónico
3. Agregar manejo de errores adecuado
4. Prevenir filtraciones de memoria o promesas colgantes
```

### Filtraciones de Memoria
```
Sospecho que hay una fuga de memoria en mi aplicación [TIPO DE APLICACIÓN].

Síntomas:
- [SÍNTOMA 1: p. ej., uso de memoria en aumento]
- [SÍNTOMA 2: p. ej., rendimiento lento con el tiempo]

Código relevante:
```[language]
[PEGÁ CÓDIGO SOSPECHOSO]
```

Componentes/funcionalidades involucradas:
- [LISTAR COMPONENTES]

Ayudame a:
1. Identificar posibles fuentes de fuga de memoria
2. Sugerir enfoque de monitoreo
3. Proporcionar correcciones
4. Agregar mecanismos de limpieza
```

---

## Depuración de Rendimiento

### Análisis de Código Lento
```
Este código está ejecutándose más lentamente de lo esperado:

```[language]
[PEGÁ CÓDIGO LENTO]
```

Contexto:
- Tamaño de entrada: [TAMAÑO DE DATOS]
- Tiempo de ejecución actual: [TIEMPO]
- Tiempo de ejecución esperado: [OBJETIVO]

Por favor:
1. Identificar cuellos de botella de rendimiento
2. Analizar complejidad de tiempo
3. Sugerir optimizaciones
4. Proporcionar versión optimizada
5. Explicar las ganancias de rendimiento
```

### Optimización de Consultas
```
Esta consulta de base de datos es lenta:

```sql
[PEGÁ CONSULTA]
```

Estructura de tabla:
```sql
[PEGÁ ESQUEMA]
```

Índices actuales:
- [LISTAR ÍNDICES]

Estadísticas de consulta:
- Tiempo de ejecución: [TIEMPO]
- Filas examinadas: [CANTIDAD]

Optimizar para:
1. Reescritura de consulta
2. Sugerencias de índices
3. Análisis de explicación
4. Enfoques alternativos
```

### Depuración de Tamaño de Paquete
```
Mi paquete de [FRAMEWORK] es demasiado grande.

Estadísticas actuales:
- Paquete total: [TAMAÑO]
- Fragmentos más grandes: [LISTAR]

Dependencias (package.json):
```json
[PEGÁ DEPS RELEVANTES]
```

Ayudame a:
1. Identificar dependencias pesadas
2. Encontrar alternativas más ligeras
3. Sugerir estrategia de code splitting
4. Configurar tree shaking
5. Oportunidades de carga perezosa
```

---

## Entorno y Configuración

### Conflictos de Dependencias
```
Tengo conflictos de dependencias/versiones:

Error:
```
[PEGÁ ERROR]
```

Mis dependencias de package.json:
```json
[PEGÁ DEPENDENCIAS]
```

Extracto de archivo de bloqueo (si corresponde):
```
[PEGÁ SECCIÓN RELEVANTE]
```

Ayudame a:
1. Identificar el conflicto
2. Encontrar versiones compatibles
3. Resolver sin romper otras deps
4. Prevenir conflictos futuros
```

### Problemas de Entorno
```
Mi código funciona en [ENTORNO A] pero falla en [ENTORNO B].

Funciona en: [LOCAL/DEV/STAGING]
Falla en: [PRODUCCIÓN/CI/DOCKER]

Error en entorno en falla:
```
[PEGÁ ERROR]
```

Código:
```[language]
[PEGÁ CÓDIGO]
```

Diferencias que conozco:
- [LISTAR DIFERENCIAS CONOCIDAS]

Ayudame a identificar problemas específicos del entorno y crear código portátil.
```

---

## Estrategias de Depuración

### Enfoque de Depuración Sistemático
```
Tengo un bug que no puedo aislar:

Síntoma: [DESCRIBIR EL BUG]
Reproducibilidad: [siempre/a veces/aleatorio]
Comenzó después de: [CAMBIO RECIENTE O "desconocido"]

Lo que he intentado:
- [INTENTO DE DEPURACIÓN 1]
- [INTENTO DE DEPURACIÓN 2]

Secciones de código relevantes:
```[language]
[PEGÁ CÓDIGO]
```

Ayudame a crear un plan de depuración sistemático:
1. Pasos de aislamiento
2. Puntos de registro a agregar
3. Casos de prueba a escribir
4. Enfoque de búsqueda binaria para encontrar la causa
```

### Análisis de Registros
```
Necesito ayuda analizando estos registros para encontrar el problema:

```
[PEGÁ REGISTROS]
```

Flujo esperado: [DESCRIBIR COMPORTAMIENTO ESPERADO]
Resultado actual: [DESCRIBIR LO QUE PASÓ]

Ayudame a:
1. Identificar anomalías en los registros
2. Rastrear la ruta de ejecución
3. Encontrar dónde se desvió de lo esperado
4. Sugerir puntos de registro adicionales
```
