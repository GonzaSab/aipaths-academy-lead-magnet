# Debugging & Error Resolution Prompts

> Free prompts for debugging code and fixing errors. Sources: [DocsBot](https://docsbot.ai/prompts/programming), [Qodo](https://www.qodo.ai/blog/best-ai-coding-assistant-tools/)

---

## Error Analysis

### General Error Debug
```
I'm getting this error in my [LANGUAGE/FRAMEWORK] code:

Error message:
```
[PASTE ERROR MESSAGE]
```

Relevant code:
```[language]
[PASTE CODE]
```

Context:
- What I was trying to do: [DESCRIPTION]
- When it occurs: [TRIGGER]
- Environment: [NODE VERSION, BROWSER, OS, etc.]

Please:
1. Explain what's causing this error
2. Provide the fix
3. Explain why the fix works
4. Suggest how to prevent similar issues
```

### Stack Trace Analysis
```
Analyze this stack trace and identify the root cause:

```
[PASTE FULL STACK TRACE]
```

My code structure:
[BRIEF DESCRIPTION OF RELEVANT FILES]

Questions:
1. What is the actual source of the error?
2. What is the chain of events that led to it?
3. How do I fix it?
4. Are there any related issues I should check?
```

### Runtime vs Build Error
```
I have a [runtime/build/compilation] error:

Error:
```
[ERROR OUTPUT]
```

Environment:
- [LANGUAGE] version: [VERSION]
- Build tool: [WEBPACK/VITE/TSC/etc.]
- Package manager: [NPM/YARN/PNPM]

Recent changes:
- [WHAT CHANGED RECENTLY]

Help me understand if this is a:
- Configuration issue
- Dependency conflict
- Code syntax/logic error
- Environment mismatch
```

---

## Specific Error Types

### Type Errors (TypeScript)
```
I'm getting TypeScript errors I don't understand:

```typescript
[PASTE CODE WITH TYPE ERROR]
```

Error:
```
[PASTE TS ERROR]
```

My types/interfaces:
```typescript
[PASTE RELEVANT TYPES]
```

Please:
1. Explain the type mismatch
2. Show the correct typing
3. Explain TypeScript's reasoning
4. Suggest type-safe alternatives
```

### Async/Promise Errors
```
I'm having issues with async code:

```[language]
[PASTE ASYNC CODE]
```

Problem: [DESCRIBE THE ISSUE - race condition, unhandled rejection, etc.]

Expected behavior: [WHAT SHOULD HAPPEN]
Actual behavior: [WHAT'S HAPPENING]

Help me:
1. Identify the async issue
2. Fix the promise chain/async flow
3. Add proper error handling
4. Prevent memory leaks or dangling promises
```

### Memory Leaks
```
I suspect a memory leak in my [APP TYPE] application.

Symptoms:
- [SYMPTOM 1: e.g., increasing memory usage]
- [SYMPTOM 2: e.g., slow performance over time]

Relevant code:
```[language]
[PASTE SUSPICIOUS CODE]
```

Components/features involved:
- [LIST COMPONENTS]

Help me:
1. Identify potential memory leak sources
2. Suggest monitoring approach
3. Provide fixes
4. Add cleanup mechanisms
```

---

## Performance Debugging

### Slow Code Analysis
```
This code is running slower than expected:

```[language]
[PASTE SLOW CODE]
```

Context:
- Input size: [DATA SIZE]
- Current execution time: [TIME]
- Expected execution time: [TARGET]

Please:
1. Identify performance bottlenecks
2. Analyze time complexity
3. Suggest optimizations
4. Provide optimized version
5. Explain the performance gains
```

### Query Optimization
```
This database query is slow:

```sql
[PASTE QUERY]
```

Table structure:
```sql
[PASTE SCHEMA]
```

Current indexes:
- [LIST INDEXES]

Query stats:
- Execution time: [TIME]
- Rows examined: [COUNT]

Optimize for:
1. Query rewrite
2. Index suggestions
3. Explain analysis
4. Alternative approaches
```

### Bundle Size Debug
```
My [FRAMEWORK] app bundle is too large.

Current stats:
- Total bundle: [SIZE]
- Largest chunks: [LIST]

Dependencies (package.json):
```json
[PASTE RELEVANT DEPS]
```

Help me:
1. Identify heavy dependencies
2. Find lighter alternatives
3. Suggest code splitting strategy
4. Configure tree shaking
5. Lazy loading opportunities
```

---

## Environment & Configuration

### Dependency Conflicts
```
I'm having dependency/version conflicts:

Error:
```
[PASTE ERROR]
```

My package.json dependencies:
```json
[PASTE DEPENDENCIES]
```

Lock file excerpt (if relevant):
```
[PASTE RELEVANT SECTION]
```

Help me:
1. Identify the conflict
2. Find compatible versions
3. Resolve without breaking other deps
4. Prevent future conflicts
```

### Environment Issues
```
My code works in [ENVIRONMENT A] but fails in [ENVIRONMENT B].

Works in: [LOCAL/DEV/STAGING]
Fails in: [PRODUCTION/CI/DOCKER]

Error in failing environment:
```
[PASTE ERROR]
```

Code:
```[language]
[PASTE CODE]
```

Differences I know of:
- [LIST KNOWN DIFFERENCES]

Help me identify environment-specific issues and create portable code.
```

---

## Debugging Strategies

### Systematic Debug Approach
```
I have a bug that I can't isolate:

Symptom: [DESCRIBE THE BUG]
Reproducibility: [always/sometimes/random]
Started after: [RECENT CHANGE OR "unknown"]

What I've tried:
- [DEBUG ATTEMPT 1]
- [DEBUG ATTEMPT 2]

Relevant code sections:
```[language]
[PASTE CODE]
```

Help me create a systematic debugging plan:
1. Isolation steps
2. Logging points to add
3. Test cases to write
4. Binary search approach for finding the cause
```

### Log Analysis
```
I need help analyzing these logs to find the issue:

```
[PASTE LOGS]
```

Expected flow: [DESCRIBE EXPECTED BEHAVIOR]
Actual outcome: [DESCRIBE WHAT HAPPENED]

Help me:
1. Identify anomalies in the logs
2. Trace the execution path
3. Find where it diverged from expected
4. Suggest additional logging points
```
