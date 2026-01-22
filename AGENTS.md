# AGENTS.md - LeetCode Repository Guidelines

## Build/Lint/Format Commands

```bash
# Format all JavaScript files in src directory
pnpm biome-fix

# Format directly with Biome
biome format --write src

# Lint/check for issues
biome check src

# Fix both formatting and linting
biome check --write src

# Test a specific solution
node src/1.js
```

## Code Style Guidelines

### Formatting (Biome)
- **Indentation**: 2 spaces
- **Line width**: 80 characters max
- **Quotes**: Single quotes
- **Semicolons**: Always required
- **Trailing commas**: Required for multi-line structures
- **Line endings**: LF
- **Arrow function parentheses**: Always required

### Type Hints & Documentation
Use JSDoc for ALL functions and methods:
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // implementation
};
```

### Function Declarations
- LeetCode solutions use `var functionName`:
```javascript
var solutionName = function (params) {};
```
- Use `const` for constants, `let` for mutable variables
- Never use `const` for main LeetCode function declaration

### Naming Conventions
- **Functions**: camelCase (twoSum, findOrder)
- **Classes**: PascalCase (SegmentTree, TopoSort)
- **Variables**: camelCase (nums, target, marked, onStack)
- **Methods**: camelCase (add, remove, get, isEmpty)

### Import Style
- ES Modules enabled via `"type": "module"` in package.json
- Prefer built-in JavaScript over external libraries
- External deps: lodash sparingly, datastructures-js when needed

### Class Implementation
Use ES6 class syntax with field declarations:
```javascript
class MyClass {
  field1 = [];
  field2 = false;

  constructor(params) {
    // initialization
  }

  method(param) {
    // implementation
  }
}
```

### Comment Style
- JSDoc for all function/method documentation
- Inline comments: English or Chinese acceptable
- Comment complex algorithms and data structures

### Linting Rules (src/**/*.js)
- noUndeclaredVariables: OFF
- noUnusedVariables: OFF
- noConsole: OFF (allows console.log for testing)
- Strict correctness rules: ON

Common errors to avoid:
- Constant conditions, self-assignment, duplicate keys
- Unreachable code, unsafe optional chaining

### Error Handling
- Return empty arrays/null/undefined on failure
- No try-catch unless required by problem
- Use early return statements

### Bitwise Operations
Prefer bitwise shifts for efficiency:
- `(s + e) >> 1` for midpoint (not `Math.floor`)

### Testing Pattern
```javascript
console.log(twoSum([2, 7, 11, 15], 9), "1", "ans is [0,1]");
console.log(twoSum([3, 2, 4], 6), "2", "ans is [1,2]");
```

## Pre-commit Hooks
Husky runs `pnpm biome-fix` before each commit (auto-formats src/**/*.js).

## Best Practices

1. Keep solutions focused and readable
2. Add comments explaining non-trivial algorithms
3. Follow existing patterns in similar problems
4. Use modern JavaScript features (ES6+)
5. Test manually with console.log
6. Keep utility classes reusable in src/utils/
7. Organize contest solutions appropriately
8. EVERY variable and function must have JSDoc type hints

## Environment

- **Runtime**: Node.js 22.14.0 with `--harmony` flag
- **Preloaded**: lodash.js 4.17.21
- **datastructures-js**: @datastructures-js/binary-search-tree, deque, graph, heap, linked-list, priority-queue, queue, set, stack, trie
- **Note**: For Binary Search Tree, Trie, and Graph, import explicitly to avoid name conflicts
