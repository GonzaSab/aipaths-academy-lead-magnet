# Code Generation Prompts

> Free prompts for generating code across languages and frameworks. Sources: [DocsBot](https://docsbot.ai/prompts/programming), [Vibe Code Directory](https://vibecodedirectory.beehiiv.com/p/50-best-ai-coding-prompts-for-2025-free-templates-for-lovable-cursor-github-copilot-and-more-to-buil)

---

## Function & Component Generation

### Basic Function Generator
```
Write a [LANGUAGE] function that [DESCRIPTION].

Requirements:
- Function name: [NAME]
- Input parameters: [PARAMS WITH TYPES]
- Return type: [RETURN TYPE]
- Handle edge cases: [LIST EDGE CASES]

Include:
- Type annotations/hints
- Input validation
- Docstring/JSDoc comments
- Example usage
```

### API Endpoint Generator
```
Create a [FRAMEWORK: Express/FastAPI/Next.js] API endpoint for [PURPOSE].

Specifications:
- Method: [GET/POST/PUT/DELETE]
- Route: [/api/endpoint]
- Request body: [SCHEMA]
- Response format: [SCHEMA]
- Authentication: [required/optional/none]

Include:
- Input validation
- Error handling with proper status codes
- TypeScript types (if applicable)
- Example request/response
```

### React Component Generator
```
Create a React [TypeScript] component for [COMPONENT PURPOSE].

Props:
- [PROP 1]: [TYPE] - [DESCRIPTION]
- [PROP 2]: [TYPE] - [DESCRIPTION]

Requirements:
- Functional component with hooks
- Proper TypeScript interfaces
- Responsive styling using [CSS Modules/Tailwind/styled-components]
- Accessibility (ARIA labels, keyboard navigation)
- Loading and error states

Include comments explaining key logic.
```

### Database Schema Generator
```
Design a database schema for [APPLICATION TYPE].

Requirements:
- Database: [PostgreSQL/MySQL/MongoDB]
- Main entities: [ENTITY LIST]
- Relationships: [DESCRIBE RELATIONSHIPS]

Provide:
- Table/collection definitions
- Primary and foreign keys
- Indexes for common queries
- Migration file (if SQL)
- Example seed data
```

---

## Full Feature Implementation

### CRUD Operations
```
Generate complete CRUD operations for [ENTITY] in [FRAMEWORK].

Stack: [e.g., Next.js + Prisma + PostgreSQL]

Create:
- Database model/schema
- API routes (create, read, update, delete, list)
- Input validation schemas
- Error handling
- TypeScript types

Follow [REST/GraphQL] conventions.
Include pagination for list endpoint.
```

### Authentication Flow
```
Implement [AUTH TYPE: JWT/Session/OAuth] authentication for [FRAMEWORK].

Features needed:
- User registration
- Login/logout
- Password hashing
- Token refresh (if JWT)
- Protected route middleware
- Password reset flow

Security requirements:
- Rate limiting
- Input sanitization
- Secure cookie settings
- CSRF protection
```

### File Upload Handler
```
Create a file upload handler for [FRAMEWORK].

Requirements:
- Max file size: [SIZE]
- Allowed types: [MIME TYPES]
- Storage: [local/S3/Cloudinary]
- Multiple files: [yes/no]

Include:
- File validation
- Progress tracking
- Error handling
- Cleanup on failure
- Return uploaded file metadata
```

---

## Code Patterns & Utilities

### Custom Hook (React)
```
Create a custom React hook called use[HOOK_NAME] that [DESCRIPTION].

Functionality:
- [FEATURE 1]
- [FEATURE 2]

Return:
- [RETURN VALUES]

Include:
- TypeScript types
- Cleanup on unmount
- Error handling
- Example usage in a component
```

### Utility Function Library
```
Create a utility module for [PURPOSE: date handling/string manipulation/validation].

Include these functions:
1. [FUNCTION 1]: [DESCRIPTION]
2. [FUNCTION 2]: [DESCRIPTION]
3. [FUNCTION 3]: [DESCRIPTION]

Requirements:
- Pure functions (no side effects)
- Full TypeScript support
- JSDoc documentation
- Unit test examples
- Handle edge cases
```

### State Management Setup
```
Set up [STATE LIBRARY: Zustand/Redux/Jotai] for [APP TYPE].

State structure:
- [STATE SLICE 1]: [DESCRIPTION]
- [STATE SLICE 2]: [DESCRIPTION]

Include:
- Store configuration
- Typed actions/mutations
- Selectors
- Async action handling
- DevTools integration
- Persistence (if needed)
```

---

## Algorithm Implementation

### Data Structure Implementation
```
Implement a [DATA STRUCTURE] in [LANGUAGE].

Include methods:
- [METHOD 1]
- [METHOD 2]
- [METHOD 3]

Requirements:
- Time complexity comments for each method
- Generic type support (if applicable)
- Iterator implementation
- Example usage
```

### Algorithm Solution
```
Write a [LANGUAGE] solution for: [PROBLEM DESCRIPTION]

Input: [INPUT FORMAT]
Output: [OUTPUT FORMAT]
Constraints: [CONSTRAINTS]

Provide:
- Optimal solution with explanation
- Time and space complexity analysis
- Edge case handling
- Test cases
- Alternative approaches (if relevant)
```
