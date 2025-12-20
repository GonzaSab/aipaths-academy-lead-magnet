# Testing & Code Review Prompts

> Free prompts for test generation and code quality. Sources: [GitHub Copilot](https://github.com/github/awesome-copilot), [Tabnine](https://www.tabnine.com), [Qodo](https://www.qodo.ai/blog/best-ai-coding-assistant-tools/)

---

## Unit Testing

### Test Suite Generator
```
Generate a comprehensive test suite for this [LANGUAGE] code:

```[language]
[PASTE CODE TO TEST]
```

Testing framework: [Jest/Vitest/Pytest/etc.]

Include tests for:
- Happy path scenarios
- Edge cases
- Error conditions
- Boundary values
- Null/undefined handling

For each test:
- Descriptive test name
- Arrange-Act-Assert pattern
- Clear assertions
- Mocking where needed
```

### Test Cases from Requirements
```
Generate test cases based on these requirements:

Feature: [FEATURE NAME]
Requirements:
1. [REQUIREMENT 1]
2. [REQUIREMENT 2]
3. [REQUIREMENT 3]

Acceptance criteria:
- [CRITERIA 1]
- [CRITERIA 2]

Generate:
- Unit tests for each requirement
- Integration test scenarios
- Edge case tests
- Regression test ideas
```

### Mock & Stub Generation
```
Create mocks and stubs for testing this code:

```[language]
[PASTE CODE WITH EXTERNAL DEPENDENCIES]
```

External dependencies:
- [DEPENDENCY 1: e.g., database, API]
- [DEPENDENCY 2]

Testing framework: [FRAMEWORK]
Mocking library: [Jest mocks/Sinon/unittest.mock/etc.]

Provide:
- Mock implementations
- Stub factories
- Spy setups
- Reset/cleanup helpers
```

---

## Integration & E2E Testing

### API Integration Tests
```
Generate integration tests for this API endpoint:

Endpoint: [METHOD] [/path]
Request body:
```json
[SCHEMA]
```

Response:
```json
[SCHEMA]
```

Business rules:
- [RULE 1]
- [RULE 2]

Testing framework: [Supertest/pytest/etc.]

Test scenarios:
- Successful requests
- Validation failures
- Authentication/authorization
- Rate limiting
- Database state verification
```

### E2E Test Scenarios
```
Create E2E test scenarios for [FEATURE/USER FLOW].

User flow:
1. [STEP 1]
2. [STEP 2]
3. [STEP 3]

Testing tool: [Playwright/Cypress/Selenium]

Include:
- Page object models
- Test data setup
- Assertions at each step
- Cleanup procedures
- Screenshots on failure
- Cross-browser considerations
```

### Component Testing (React)
```
Write component tests for this React component:

```tsx
[PASTE COMPONENT]
```

Testing library: [React Testing Library/Enzyme]

Test:
- Rendering with different props
- User interactions (clicks, inputs)
- Conditional rendering
- Event handler calls
- Accessibility
- Async behavior
- Error boundaries
```

---

## Code Review

### Code Review Checklist
```
Review this code and provide feedback:

```[language]
[PASTE CODE]
```

Context: [WHAT THIS CODE DOES]

Review for:
1. **Correctness**: Logic errors, edge cases
2. **Performance**: Time/space complexity, bottlenecks
3. **Security**: Vulnerabilities, input validation
4. **Maintainability**: Readability, naming, structure
5. **Best practices**: Language idioms, patterns

Format as:
- 🔴 Critical issues (must fix)
- 🟡 Suggestions (should consider)
- 🟢 Good practices observed
- 💡 Learning opportunities
```

### Security Review
```
Perform a security review on this code:

```[language]
[PASTE CODE]
```

Code type: [API endpoint/form handler/auth logic/etc.]

Check for:
- SQL/NoSQL injection
- XSS vulnerabilities
- CSRF issues
- Authentication flaws
- Authorization bypass
- Sensitive data exposure
- Input validation gaps
- Insecure dependencies

Severity rating for each finding.
Suggested fixes with code examples.
```

### Performance Review
```
Review this code for performance:

```[language]
[PASTE CODE]
```

Expected load: [REQUESTS/SEC, DATA SIZE, USERS]

Analyze:
- Algorithm efficiency (Big O)
- Memory usage patterns
- Database query efficiency
- Caching opportunities
- Async/parallel processing options
- Resource cleanup

Provide benchmarking suggestions.
```

---

## Refactoring

### Code Smell Detection
```
Analyze this code for code smells and suggest refactoring:

```[language]
[PASTE CODE]
```

Look for:
- Long methods/functions
- Duplicate code
- Deep nesting
- Large classes
- Feature envy
- Primitive obsession
- Dead code

For each smell:
- Identify the problem
- Explain why it's problematic
- Suggest specific refactoring
- Show refactored code
```

### Modernization Suggestions
```
Suggest how to modernize this legacy code:

```[language]
[PASTE LEGACY CODE]
```

Current: [LANGUAGE VERSION/FRAMEWORK VERSION]
Target: [MODERN VERSION]

Consider:
- New language features to use
- Deprecated patterns to replace
- Modern library alternatives
- Improved error handling
- Better type safety
- Current best practices

Provide step-by-step migration path.
```

### Extract & Organize
```
This file has grown too large. Help me reorganize:

```[language]
[PASTE LARGE FILE]
```

Suggest:
- Logical modules/files to extract
- Shared utilities to create
- Clear boundaries between concerns
- Import/export structure
- Directory organization

Show the resulting file structure and key extractions.
```

---

## Documentation

### Code Documentation Generator
```
Generate documentation for this code:

```[language]
[PASTE CODE]
```

Create:
- JSDoc/docstrings for functions
- Type documentation
- Usage examples
- Parameter descriptions
- Return value documentation
- Exception/error documentation
- Complexity notes where relevant
```

### README Generator
```
Generate a README.md for this project:

Project: [NAME]
Purpose: [DESCRIPTION]
Tech stack: [TECHNOLOGIES]

Key files/folders:
- [FILE/FOLDER]: [PURPOSE]

Include sections:
- Overview
- Installation
- Quick start
- Configuration
- API reference (if applicable)
- Contributing guidelines
- License
```
