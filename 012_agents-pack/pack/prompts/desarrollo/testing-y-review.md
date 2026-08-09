# Prompts de Pruebas y Revisión de Código

> Prompts gratuitos para generación de pruebas y calidad de código. Sources: [GitHub Copilot](https://github.com/github/awesome-copilot), [Tabnine](https://www.tabnine.com), [Qodo](https://www.qodo.ai/blog/best-ai-coding-assistant-tools/)

---

## Pruebas Unitarias

### Generador de Suite de Pruebas
```
Generá una suite de pruebas completa para este código en [LENGUAJE]:

```[language]
[PEGÁ CÓDIGO A PROBAR]
```

Framework de pruebas: [Jest/Vitest/Pytest/etc.]

Incluir pruebas para:
- Escenarios de ruta feliz
- Casos especiales
- Condiciones de error
- Valores límite
- Manejo de nulo/indefinido

Para cada prueba:
- Nombre de prueba descriptivo
- Patrón Arrange-Act-Assert
- Aserciones claras
- Mocking donde sea necesario
```

### Generador de Casos de Prueba desde Requisitos
```
Generá casos de prueba basados en estos requisitos:

Funcionalidad: [NOMBRE DE FUNCIONALIDAD]
Requisitos:
1. [REQUISITO 1]
2. [REQUISITO 2]
3. [REQUISITO 3]

Criterios de aceptación:
- [CRITERIO 1]
- [CRITERIO 2]

Generar:
- Pruebas unitarias para cada requisito
- Escenarios de prueba de integración
- Pruebas de casos especiales
- Ideas para pruebas de regresión
```

### Generación de Mock y Stub
```
Creá mocks y stubs para probar este código:

```[language]
[PEGÁ CÓDIGO CON DEPENDENCIAS EXTERNAS]
```

Dependencias externas:
- [DEPENDENCIA 1: p. ej., base de datos, API]
- [DEPENDENCIA 2]

Framework de pruebas: [FRAMEWORK]
Librería de mocking: [Jest mocks/Sinon/unittest.mock/etc.]

Proporcionar:
- Implementaciones de mock
- Fábricas de stub
- Configuraciones de spy
- Helpers de reinicio/limpieza
```

---

## Pruebas de Integración y E2E

### Pruebas de Integración de API
```
Generá pruebas de integración para este endpoint de API:

Endpoint: [MÉTODO] [/ruta]
Cuerpo de solicitud:
```json
[ESQUEMA]
```

Respuesta:
```json
[ESQUEMA]
```

Reglas de negocio:
- [REGLA 1]
- [REGLA 2]

Framework de pruebas: [Supertest/pytest/etc.]

Escenarios de prueba:
- Solicitudes exitosas
- Fallos de validación
- Autenticación/autorización
- Limitación de velocidad
- Verificación del estado de la base de datos
```

### Escenarios de Pruebas E2E
```
Creá escenarios de pruebas E2E para [FUNCIONALIDAD/FLUJO DE USUARIO].

Flujo de usuario:
1. [PASO 1]
2. [PASO 2]
3. [PASO 3]

Herramienta de pruebas: [Playwright/Cypress/Selenium]

Incluir:
- Modelos de objetos de página
- Configuración de datos de prueba
- Aserciones en cada paso
- Procedimientos de limpieza
- Capturas de pantalla en caso de fallo
- Consideraciones de navegador cruzado
```

### Pruebas de Componentes (React)
```
Escribí pruebas de componentes para este componente de React:

```tsx
[PEGÁ COMPONENTE]
```

Librería de pruebas: [React Testing Library/Enzyme]

Pruebar:
- Renderización con diferentes props
- Interacciones del usuario (clics, entradas)
- Renderización condicional
- Llamadas de manejador de eventos
- Accesibilidad
- Comportamiento asincrónico
- Límites de error
```

---

## Revisión de Código

### Lista de Verificación de Revisión de Código
```
Revisá este código y proporcioná retroalimentación:

```[language]
[PEGÁ CÓDIGO]
```

Contexto: [LO QUE HACE ESTE CÓDIGO]

Revisar para:
1. **Correctitud**: Errores de lógica, casos especiales
2. **Rendimiento**: Complejidad tiempo/espacio, cuellos de botella
3. **Seguridad**: Vulnerabilidades, validación de entrada
4. **Mantenibilidad**: Legibilidad, nombres, estructura
5. **Mejores prácticas**: Idiomas del lenguaje, patrones

Formato como:
- 🔴 Problemas críticos (deben corregirse)
- 🟡 Sugerencias (considerar)
- 🟢 Buenas prácticas observadas
- 💡 Oportunidades de aprendizaje
```

### Revisión de Seguridad
```
Realizá una revisión de seguridad en este código:

```[language]
[PEGÁ CÓDIGO]
```

Tipo de código: [endpoint de API/manejador de formulario/lógica de autenticación/etc.]

Revisar para:
- Inyección SQL/NoSQL
- Vulnerabilidades XSS
- Problemas CSRF
- Fallas de autenticación
- Bypass de autorización
- Exposición de datos sensibles
- Faltas de validación de entrada
- Dependencias inseguras

Calificación de gravedad para cada hallazgo.
Correcciones sugeridas con ejemplos de código.
```

### Revisión de Rendimiento
```
Revisá este código para rendimiento:

```[language]
[PEGÁ CÓDIGO]
```

Carga esperada: [SOLICITUDES/SEG, TAMAÑO DE DATOS, USUARIOS]

Analizar:
- Eficiencia algorítmica (Big O)
- Patrones de uso de memoria
- Eficiencia de consultas de base de datos
- Oportunidades de caché
- Opciones de procesamiento asincrónico/paralelo
- Limpieza de recursos

Proporcionar sugerencias de evaluación comparativa.
```

---

## Refactorización

### Detección de Olores de Código
```
Analizá este código para olores de código y sugerí refactorización:

```[language]
[PEGÁ CÓDIGO]
```

Buscar:
- Métodos/funciones largos
- Código duplicado
- Anidamiento profundo
- Clases grandes
- Feature envy
- Obsesión primitiva
- Código muerto

Para cada olor:
- Identificar el problema
- Explicar por qué es problemático
- Sugerir refactorización específica
- Mostrar código refactorizado
```

### Sugerencias de Modernización
```
Sugerí cómo modernizar este código heredado:

```[language]
[PEGÁ CÓDIGO HEREDADO]
```

Actual: [VERSIÓN DE LENGUAJE/VERSIÓN DE FRAMEWORK]
Objetivo: [VERSIÓN MODERNA]

Considerar:
- Nuevas características de lenguaje a usar
- Patrones deprecados a reemplazar
- Alternativas modernas de librería
- Manejo de errores mejorado
- Mejor seguridad de tipos
- Mejores prácticas actuales

Proporcionar ruta de migración paso a paso.
```

### Extracción y Organización
```
Este archivo se volvió demasiado grande. Ayudame a reorganizar:

```[language]
[PEGÁ ARCHIVO GRANDE]
```

Sugerir:
- Módulos/archivos lógicos a extraer
- Utilidades compartidas a crear
- Límites claros entre preocupaciones
- Estructura de importación/exportación
- Organización de directorio

Mostrar la estructura de archivo resultante y extracciones clave.
```

---

## Documentación

### Generador de Documentación de Código
```
Generá documentación para este código:

```[language]
[PEGÁ CÓDIGO]
```

Crear:
- JSDoc/docstrings para funciones
- Documentación de tipos
- Ejemplos de uso
- Descripciones de parámetros
- Documentación de valor de retorno
- Documentación de excepción/error
- Notas de complejidad donde corresponda
```

### Generador de README
```
Generá un README.md para este proyecto:

Proyecto: [NOMBRE]
Propósito: [DESCRIPCIÓN]
Stack de tecnología: [TECNOLOGÍAS]

Archivos/carpetas clave:
- [ARCHIVO/CARPETA]: [PROPÓSITO]

Incluir secciones:
- Descripción general
- Instalación
- Inicio rápido
- Configuración
- Referencia de API (si aplica)
- Pautas de contribución
- Licencia
```
