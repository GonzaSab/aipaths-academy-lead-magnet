# Data Analysis Prompts

> Free prompts for data analysis, reporting, and insights. Sources: [Juma](https://juma.ai/blog/chatgpt-prompts-for-data-analysis), [PromptDrive](https://promptdrive.ai/ai-prompts-data-analysis/), [Founderpath](https://founderpath.com/blog/top-ai-business-prompts)

---

## Data Exploration

### Initial Data Assessment
```
I have a dataset about [TOPIC/DOMAIN].

Columns: [LIST COLUMNS WITH TYPES]
Rows: [APPROXIMATE COUNT]
Source: [WHERE DATA CAME FROM]

Help me:
1. Identify key variables and their relationships
2. Suggest initial exploratory analyses
3. Flag potential data quality issues to check
4. Recommend visualizations for initial understanding
5. Propose hypotheses worth investigating
```

### Statistical Summary Request
```
Analyze this data summary and provide insights:

Dataset: [DESCRIPTION]
Variables:
- [VAR 1]: Mean=[X], Median=[Y], Std=[Z], Range=[A-B]
- [VAR 2]: Mean=[X], Median=[Y], Std=[Z], Range=[A-B]
- [Continue for key variables]

Correlations:
- [VAR A] & [VAR B]: [CORRELATION]

Questions:
1. What patterns stand out?
2. Are there anomalies in these statistics?
3. What relationships should I explore further?
4. What additional metrics would be valuable?
```

### Data Quality Audit
```
Perform a data quality assessment framework for my [DATASET TYPE].

Check for:
- Missing values patterns
- Outlier detection methods
- Data type inconsistencies
- Duplicate identification
- Referential integrity (if relational)
- Temporal consistency (if time-series)

Provide:
- Checklist of quality checks
- SQL/Python queries for each check
- Thresholds for acceptable quality
- Remediation suggestions for common issues
```

---

## Business Analytics

### KPI Dashboard Design
```
Design a KPI dashboard for [BUSINESS TYPE/DEPARTMENT].

Business goals:
- [GOAL 1]
- [GOAL 2]
- [GOAL 3]

Available data:
- [DATA SOURCE 1]
- [DATA SOURCE 2]

Provide:
- Top 5-7 KPIs with definitions
- Calculation formulas for each
- Visualization type recommendations
- Benchmark/target suggestions
- Drill-down dimensions
- Refresh frequency recommendations
```

### Trend Analysis Framework
```
Create a framework to analyze trends in [METRIC/AREA].

Data available:
- Time period: [DATE RANGE]
- Granularity: [daily/weekly/monthly]
- Dimensions: [BREAKDOWN DIMENSIONS]

I need:
1. Trend identification methodology
2. Seasonality detection approach
3. Anomaly flagging criteria
4. Year-over-year comparison framework
5. Forecasting approach for next [PERIOD]

Include example calculations and interpretations.
```

### Cohort Analysis Setup
```
Help me set up cohort analysis for [USER BEHAVIOR/METRIC].

Cohort definition: [how to group users - signup month, acquisition channel, etc.]
Metric to track: [retention, revenue, engagement, etc.]
Time periods: [weekly/monthly cohorts over X months]

Provide:
- SQL query structure for cohort creation
- Cohort matrix format
- Interpretation guide
- Benchmarks to compare against
- Visualization recommendations
```

---

## Reporting & Insights

### Executive Summary Generator
```
Create an executive summary from these findings:

Analysis: [ANALYSIS TYPE]
Key metrics:
- [METRIC 1]: [VALUE] ([CHANGE]%)
- [METRIC 2]: [VALUE] ([CHANGE]%)
- [METRIC 3]: [VALUE] ([CHANGE]%)

Main findings:
1. [FINDING 1]
2. [FINDING 2]
3. [FINDING 3]

Format as:
- 3-sentence overview
- Key insights (bullet points)
- Recommended actions
- Risks/concerns
- Next steps

Keep under 300 words. Executive audience.
```

### Data Storytelling Framework
```
Help me create a data story around [KEY FINDING/INSIGHT].

Data points:
- [DATA POINT 1]
- [DATA POINT 2]
- [DATA POINT 3]

Audience: [WHO WILL SEE THIS]
Goal: [persuade/inform/request action]

Structure the narrative:
1. Hook/opening statement
2. Context and background
3. The key insight
4. Supporting evidence
5. Implications
6. Call to action

Include visualization recommendations for each section.
```

### Automated Report Template
```
Create a template for a [FREQUENCY] [REPORT TYPE] report.

Sections needed:
- [SECTION 1]
- [SECTION 2]
- [SECTION 3]

For each section provide:
- Metrics to include
- Calculation definitions
- Visualization type
- Commentary prompts
- Comparison benchmarks

Format: [Slides/Document/Dashboard]
Include sample commentary for a typical period.
```

---

## Predictive Analysis

### Forecast Model Selection
```
Help me choose the right forecasting approach for [METRIC].

Data characteristics:
- History length: [X months/years]
- Seasonality: [yes/no/unknown]
- Trend: [upward/downward/flat/volatile]
- External factors: [LIST ANY]

Forecast needs:
- Horizon: [how far ahead]
- Granularity: [daily/weekly/monthly]
- Accuracy requirements: [business impact of errors]

Compare approaches:
1. Moving averages
2. Exponential smoothing
3. ARIMA
4. Prophet
5. Machine learning

Recommend with justification.
```

### A/B Test Analysis
```
Analyze this A/B test result:

Test: [WHAT WAS TESTED]
Hypothesis: [EXPECTED OUTCOME]

Results:
- Control (n=[SIZE]): [METRIC] = [VALUE]
- Variant (n=[SIZE]): [METRIC] = [VALUE]
- Difference: [X]%
- P-value: [VALUE]
- Confidence interval: [RANGE]

Questions:
1. Is this result statistically significant?
2. Is it practically significant for our business?
3. What sample size issues should I consider?
4. What's my recommendation?
5. What follow-up tests would you suggest?
```

### Customer Segmentation Framework
```
Design a customer segmentation analysis for [BUSINESS TYPE].

Available data:
- Transaction history: [FIELDS]
- Demographics: [FIELDS]
- Behavior data: [FIELDS]

Goals:
- [SEGMENTATION PURPOSE - targeting, personalization, etc.]

Provide:
- Recommended segmentation approach (RFM, clustering, etc.)
- Variables to include
- Number of segments suggestion
- Segment profiling framework
- Actionable strategies per segment
```

---

## SQL & Query Patterns

### Complex Query Builder
```
Write a SQL query to [ANALYSIS GOAL].

Tables available:
- [TABLE 1]: columns ([COLUMNS])
- [TABLE 2]: columns ([COLUMNS])

Requirements:
- [REQUIREMENT 1]
- [REQUIREMENT 2]
- [FILTERS]

Output should include:
- [COLUMN/METRIC 1]
- [COLUMN/METRIC 2]

Optimize for [PERFORMANCE/READABILITY].
Include comments explaining logic.
```

### Window Function Examples
```
Show me how to use window functions for [USE CASE].

Data structure:
- [TABLE SCHEMA]

I need to calculate:
- [CALCULATION 1: e.g., running total]
- [CALCULATION 2: e.g., rank within group]
- [CALCULATION 3: e.g., comparison to previous row]

Provide:
- Query with window functions
- Explanation of each function
- Performance considerations
- Alternative approaches
```
