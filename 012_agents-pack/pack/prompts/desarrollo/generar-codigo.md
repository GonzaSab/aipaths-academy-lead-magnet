# Prompts de Generación de Código

> Prompts gratuitos para generar código en varios lenguajes y frameworks. Sources: [DocsBot](https://docsbot.ai/prompts/programming), [Vibe Code Directory](https://vibecodedirectory.beehiiv.com/p/50-best-ai-coding-prompts-for-2025-free-templates-for-lovable-cursor-github-copilot-and-more-to-buil)

---

## Generación de Funciones y Componentes

### Generador de Funciones Básicas
```
Escribí una función en [LENGUAJE] que [DESCRIPCIÓN].

Requisitos:
- Nombre de la función: [NOMBRE]
- Parámetros de entrada: [PARAMS CON TIPOS]
- Tipo de retorno: [TIPO DE RETORNO]
- Manejar casos especiales: [LISTA DE CASOS ESPECIALES]

Incluir:
- Anotaciones/sugerencias de tipo
- Validación de entrada
- Comentarios Docstring/JSDoc
- Ejemplo de uso
```

### Generador de Endpoints de API
```
Creá un endpoint de API en [FRAMEWORK: Express/FastAPI/Next.js] para [PROPÓSITO].

Especificaciones:
- Método: [GET/POST/PUT/DELETE]
- Ruta: [/api/endpoint]
- Cuerpo de solicitud: [ESQUEMA]
- Formato de respuesta: [ESQUEMA]
- Autenticación: [requerida/opcional/ninguna]

Incluir:
- Validación de entrada
- Manejo de errores con códigos de estado apropiados
- Tipos de TypeScript (si aplica)
- Ejemplo de solicitud/respuesta
```

### Generador de Componentes React
```
Creá un componente React [TypeScript] para [PROPÓSITO DEL COMPONENTE].

Props:
- [PROP 1]: [TIPO] - [DESCRIPCIÓN]
- [PROP 2]: [TIPO] - [DESCRIPCIÓN]

Requisitos:
- Componente funcional con hooks
- Interfaces TypeScript propias
- Estilos responsivos usando [Módulos CSS/Tailwind/styled-components]
- Accesibilidad (etiquetas ARIA, navegación por teclado)
- Estados de carga y error

Incluir comentarios explicando la lógica clave.
```

### Generador de Esquemas de Base de Datos
```
Diseñá un esquema de base de datos para [TIPO DE APLICACIÓN].

Requisitos:
- Base de datos: [PostgreSQL/MySQL/MongoDB]
- Entidades principales: [LISTA DE ENTIDADES]
- Relaciones: [DESCRIBIR RELACIONES]

Proporcionar:
- Definiciones de tablas/colecciones
- Claves primarias y foráneas
- Índices para consultas comunes
- Archivo de migración (si SQL)
- Datos de ejemplo
```

---

## Implementación de Funcionalidades Completas

### Operaciones CRUD
```
Generá operaciones CRUD completas para [ENTIDAD] en [FRAMEWORK].

Stack: [p. ej., Next.js + Prisma + PostgreSQL]

Crear:
- Modelo/esquema de base de datos
- Rutas de API (crear, leer, actualizar, eliminar, listar)
- Esquemas de validación de entrada
- Manejo de errores
- Tipos de TypeScript

Seguir convenciones [REST/GraphQL].
Incluir paginación para el endpoint de listar.
```

### Flujo de Autenticación
```
Implementá autenticación [TIPO DE AUTENTICACIÓN: JWT/Session/OAuth] para [FRAMEWORK].

Funcionalidades necesarias:
- Registro de usuario
- Login/logout
- Hash de contraseña
- Refresco de token (si JWT)
- Middleware de ruta protegida
- Flujo de reinicio de contraseña

Requisitos de seguridad:
- Limitación de velocidad
- Sanitización de entrada
- Configuraciones seguras de cookies
- Protección CSRF
```

### Manejador de Carga de Archivos
```
Creá un manejador de carga de archivos para [FRAMEWORK].

Requisitos:
- Tamaño máximo de archivo: [TAMAÑO]
- Tipos permitidos: [TIPOS MIME]
- Almacenamiento: [local/S3/Cloudinary]
- Múltiples archivos: [sí/no]

Incluir:
- Validación de archivo
- Seguimiento del progreso
- Manejo de errores
- Limpieza en caso de fallo
- Retornar metadatos del archivo cargado
```

---

## Patrones de Código y Utilidades

### Hook Personalizado (React)
```
Creá un hook de React personalizado llamado use[NOMBRE_HOOK] que [DESCRIPCIÓN].

Funcionalidad:
- [FUNCIONALIDAD 1]
- [FUNCIONALIDAD 2]

Retornar:
- [VALORES DE RETORNO]

Incluir:
- Tipos de TypeScript
- Limpieza al desmontar
- Manejo de errores
- Ejemplo de uso en un componente
```

### Librería de Funciones Utilitarias
```
Creá un módulo de utilidad para [PROPÓSITO: manejo de fechas/manipulación de strings/validación].

Incluir estas funciones:
1. [FUNCIÓN 1]: [DESCRIPCIÓN]
2. [FUNCIÓN 2]: [DESCRIPCIÓN]
3. [FUNCIÓN 3]: [DESCRIPCIÓN]

Requisitos:
- Funciones puras (sin efectos secundarios)
- Soporte completo de TypeScript
- Documentación JSDoc
- Ejemplos de pruebas unitarias
- Manejar casos especiales
```

### Configuración de Gestión de Estado
```
Configurá [LIBRERÍA DE ESTADO: Zustand/Redux/Jotai] para [TIPO DE APLICACIÓN].

Estructura del estado:
- [SLICE DE ESTADO 1]: [DESCRIPCIÓN]
- [SLICE DE ESTADO 2]: [DESCRIPCIÓN]

Incluir:
- Configuración del almacén
- Acciones/mutaciones tipadas
- Selectores
- Manejo de acciones asincrónicas
- Integración de DevTools
- Persistencia (si es necesaria)
```

---

## Implementación de Algoritmos

### Implementación de Estructura de Datos
```
Implementá una [ESTRUCTURA DE DATOS] en [LENGUAJE].

Incluir métodos:
- [MÉTODO 1]
- [MÉTODO 2]
- [MÉTODO 3]

Requisitos:
- Comentarios de complejidad de tiempo para cada método
- Soporte de tipos genéricos (si aplica)
- Implementación de iterador
- Ejemplo de uso
```

### Solución de Algoritmo
```
Escribí una solución en [LENGUAJE] para: [DESCRIPCIÓN DEL PROBLEMA]

Entrada: [FORMATO DE ENTRADA]
Salida: [FORMATO DE SALIDA]
Restricciones: [RESTRICCIONES]

Proporcionar:
- Solución óptima con explicación
- Análisis de complejidad de tiempo y espacio
- Manejo de casos especiales
- Casos de prueba
- Enfoques alternativos (si corresponden)
```
