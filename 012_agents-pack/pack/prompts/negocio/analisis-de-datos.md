# Prompts de Análisis de Datos

> Prompts gratis para análisis de datos, reportes e insights. Sources: [Juma](https://juma.ai/blog/chatgpt-prompts-for-data-analysis), [PromptDrive](https://promptdrive.ai/ai-prompts-data-analysis/), [Founderpath](https://founderpath.com/blog/top-ai-business-prompts)

---

## Exploración de Datos

### Evaluación Inicial de Datos
```
Tengo un dataset sobre [TEMA/DOMINIO].

Columnas: [LISTÁ LAS COLUMNAS CON TIPOS]
Filas: [CANTIDAD APROXIMADA]
Origen: [DE DÓNDE VINO EL DATO]

Ayudame a:
1. Identificar variables clave y sus relaciones
2. Sugerir análisis exploratorios iniciales
3. Marcar posibles problemas de calidad de datos para verificar
4. Recomendar visualizaciones para entendimiento inicial
5. Proponer hipótesis que valga la pena investigar
```

### Solicitud de Resumen Estadístico
```
Analiza este resumen de datos y proporcioná insights:

Dataset: [DESCRIPCIÓN]
Variables:
- [VAR 1]: Media=[X], Mediana=[Y], Desv=[Z], Rango=[A-B]
- [VAR 2]: Media=[X], Mediana=[Y], Desv=[Z], Rango=[A-B]
- [Continua con variables clave]

Correlaciones:
- [VAR A] & [VAR B]: [CORRELACIÓN]

Preguntas:
1. ¿Qué patrones se destacan?
2. ¿Hay anomalías en estas estadísticas?
3. ¿Qué relaciones debería explorar más?
4. ¿Qué métricas adicionales serían valiosas?
```

### Auditoría de Calidad de Datos
```
Realizá una evaluación de calidad de datos para mi [TIPO DE DATASET].

Verificá:
- Patrones de valores faltantes
- Métodos de detección de outliers
- Inconsistencias de tipos de datos
- Identificación de duplicados
- Integridad referencial (si es relacional)
- Consistencia temporal (si es series de tiempo)

Proporciona:
- Checklist de verificaciones de calidad
- Queries en SQL/Python para cada verificación
- Umbrales para calidad aceptable
- Sugerencias de remediación para problemas comunes
```

---

## Analítica Empresarial

### Diseño de Dashboard de KPIs
```
Diseñá un dashboard de KPIs para [TIPO DE NEGOCIO/DEPARTAMENTO].

Objetivos empresariales:
- [OBJETIVO 1]
- [OBJETIVO 2]
- [OBJETIVO 3]

Datos disponibles:
- [FUENTE DE DATOS 1]
- [FUENTE DE DATOS 2]

Proporciona:
- Top 5-7 KPIs con definiciones
- Fórmulas de cálculo para cada uno
- Recomendaciones de tipo de visualización
- Sugerencias de benchmarks/objetivos
- Dimensiones de drill-down
- Recomendaciones de frecuencia de actualización
```

### Marco de Análisis de Tendencias
```
Creá un marco para analizar tendencias en [MÉTRICA/ÁREA].

Datos disponibles:
- Período de tiempo: [RANGO DE FECHAS]
- Granularidad: [diario/semanal/mensual]
- Dimensiones: [DIMENSIONES DE DESGLOSE]

Necesito:
1. Metodología de identificación de tendencias
2. Enfoque de detección de estacionalidad
3. Criterios de marcado de anomalías
4. Marco de comparación año a año
5. Enfoque de pronóstico para los próximos [PERÍODO]

Incluí ejemplos de cálculos e interpretaciones.
```

### Configuración de Análisis de Cohortes
```
Ayudame a configurar análisis de cohortes para [COMPORTAMIENTO DE USUARIO/MÉTRICA].

Definición de cohorte: [cómo agrupar usuarios - mes de signup, canal de adquisición, etc.]
Métrica a seguir: [retención, ingresos, engagement, etc.]
Períodos de tiempo: [cohortes semanales/mensuales durante X meses]

Proporciona:
- Estructura de query SQL para creación de cohortes
- Formato de matriz de cohortes
- Guía de interpretación
- Benchmarks para comparar
- Recomendaciones de visualización
```

---

## Reportes e Insights

### Generador de Resumen Ejecutivo
```
Creá un resumen ejecutivo a partir de estos hallazgos:

Análisis: [TIPO DE ANÁLISIS]
Métricas clave:
- [MÉTRICA 1]: [VALOR] ([CAMBIO]%)
- [MÉTRICA 2]: [VALOR] ([CAMBIO]%)
- [MÉTRICA 3]: [VALOR] ([CAMBIO]%)

Hallazgos principales:
1. [HALLAZGO 1]
2. [HALLAZGO 2]
3. [HALLAZGO 3]

Formatea como:
- Resumen de 3 oraciones
- Insights clave (puntos de bala)
- Acciones recomendadas
- Riesgos/preocupaciones
- Próximos pasos

Mantené menos de 300 palabras. Audiencia ejecutiva.
```

### Marco de Narrativa de Datos
```
Ayudame a crear una narrativa de datos alrededor de [HALLAZGO CLAVE/INSIGHT].

Puntos de datos:
- [PUNTO DE DATO 1]
- [PUNTO DE DATO 2]
- [PUNTO DE DATO 3]

Audiencia: [QUIÉN VA A VER ESTO]
Objetivo: [persuadir/informar/solicitar acción]

Estructura la narrativa:
1. Hook/declaración de apertura
2. Contexto y antecedentes
3. El insight clave
4. Evidencia de apoyo
5. Implicaciones
6. Llamado a la acción

Incluí recomendaciones de visualización para cada sección.
```

### Plantilla de Reporte Automatizado
```
Creá una plantilla para un reporte [FRECUENCIA] [TIPO DE REPORTE].

Secciones necesarias:
- [SECCIÓN 1]
- [SECCIÓN 2]
- [SECCIÓN 3]

Para cada sección proporcioná:
- Métricas a incluir
- Definiciones de cálculo
- Tipo de visualización
- Prompts de comentario
- Benchmarks de comparación

Formato: [Diapositivas/Documento/Dashboard]
Incluí comentario de muestra para un período típico.
```

---

## Análisis Predictivo

### Selección de Modelo de Pronóstico
```
Ayudame a elegir el enfoque de pronóstico correcto para [MÉTRICA].

Características de datos:
- Duración del histórico: [X meses/años]
- Estacionalidad: [sí/no/desconocido]
- Tendencia: [ascendente/descendente/plana/volátil]
- Factores externos: [LISTÁ CUALQUIERA]

Necesidades de pronóstico:
- Horizonte: [cuán adelante]
- Granularidad: [diario/semanal/mensual]
- Requerimientos de precisión: [impacto empresarial de errores]

Compará enfoques:
1. Promedios móviles
2. Suavización exponencial
3. ARIMA
4. Prophet
5. Machine learning

Recomendá con justificación.
```

### Análisis de Test A/B
```
Analiza este resultado de test A/B:

Test: [QUÉ FUE TESTEADO]
Hipótesis: [RESULTADO ESPERADO]

Resultados:
- Control (n=[TAMAÑO]): [MÉTRICA] = [VALOR]
- Variante (n=[TAMAÑO]): [MÉTRICA] = [VALOR]
- Diferencia: [X]%
- P-value: [VALOR]
- Intervalo de confianza: [RANGO]

Preguntas:
1. ¿Este resultado es estadísticamente significativo?
2. ¿Es significativo prácticamente para nuestro negocio?
3. ¿Qué problemas de tamaño de muestra debería considerar?
4. ¿Cuál es mi recomendación?
5. ¿Qué tests de seguimiento sugerirías?
```

### Marco de Segmentación de Clientes
```
Diseñá un análisis de segmentación de clientes para [TIPO DE NEGOCIO].

Datos disponibles:
- Historial de transacciones: [CAMPOS]
- Datos demográficos: [CAMPOS]
- Datos de comportamiento: [CAMPOS]

Objetivos:
- [PROPÓSITO DE SEGMENTACIÓN - targeting, personalización, etc.]

Proporciona:
- Enfoque de segmentación recomendado (RFM, clustering, etc.)
- Variables a incluir
- Sugerencia de cantidad de segmentos
- Marco de perfilado de segmentos
- Estrategias accionables por segmento
```

---

## Patrones de SQL y Queries

### Constructor de Queries Complejas
```
Escribí una query SQL para [OBJETIVO DE ANÁLISIS].

Tablas disponibles:
- [TABLA 1]: columnas ([COLUMNAS])
- [TABLA 2]: columnas ([COLUMNAS])

Requerimientos:
- [REQUERIMIENTO 1]
- [REQUERIMIENTO 2]
- [FILTROS]

El output debería incluir:
- [COLUMNA/MÉTRICA 1]
- [COLUMNA/MÉTRICA 2]

Optimizá para [PERFORMANCE/LEGIBILIDAD].
Incluí comentarios explicando la lógica.
```

### Ejemplos de Funciones de Ventana
```
Mostrá cómo usar funciones de ventana para [CASO DE USO].

Estructura de datos:
- [ESQUEMA DE TABLA]

Necesito calcular:
- [CÁLCULO 1: ej., total acumulativo]
- [CÁLCULO 2: ej., ranking dentro del grupo]
- [CÁLCULO 3: ej., comparación a la fila anterior]

Proporciona:
- Query con funciones de ventana
- Explicación de cada función
- Consideraciones de performance
- Enfoques alternativos
```
