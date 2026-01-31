# AGENTS.md - LeetCode Repository Guidelines

## Build/Lint/Format Commands

```bash
# Format specific file(s) - USE THIS for single file changes
bun exec biome format --write src/<problem-number>.js

# Format multiple specific files
bun exec biome format --write src/1984.js src/1985.js

# Format all JavaScript files (use sparingly)
pnpm biome-fix
# Or: biome format --write src

# Lint/check specific file
biome check src/<problem-number>.js

# Fix both formatting and linting for specific file
biome check --write src/<problem-number>.js

# Test a specific solution
node src/<problem-number>.js

# Run lint-staged (pre-commit)
bun lint-staged
```

**IMPORTANT**: Always format only the file(s) you modified, not the entire src directory. This is faster and avoids unnecessary changes.

## Code Style Guidelines

### Formatting (Biome)
- **Indentation**: 2 spaces
- **Line width**: 80 characters max
- **Quotes**: Single quotes
- **Semicolons**: Always required
- **Trailing commas**: Required for multi-line structures
- **Line endings**: CRLF
- **Arrow function parentheses**: Always required

### Type Hints & Documentation
Use JSDoc for ALL functions:
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
- LeetCode solutions use `var functionName = function(params) {}`
- Use `const` for constants, `let` for mutable variables
- Never use `const` for main LeetCode function declaration

### Naming Conventions
- **Functions**: camelCase (twoSum, findOrder)
- **Classes**: PascalCase (SegmentTree, TopoSort)
- **Variables**: camelCase (nums, target, marked)

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

### Optimization Guidelines
- Use **Bit Manipulation** for state compression
- Use **TypedArrays** (e.g., `Int32Array`) for fixed-size arrays
- Use `Math.clz32` for fast MSB calculations
- Use `BigInt` for numbers exceeding $2^{53}-1$
- Prefer bitwise shifts: `(s + e) >> 1` for midpoint

### Comment Style
- **Minimal Comments**: Only JSDoc and essential algorithm explanations
- **Language**: English or Chinese acceptable
- **Complexity Analysis**: Always include at the end

### Linting Rules (src/**/*.js)
- noUndeclaredVariables: OFF
- noUnusedVariables: OFF
- noConsole: OFF (allows console.log for testing)
- Strict correctness rules: ON

### Error Handling
- Return empty arrays/null/undefined on failure
- No try-catch unless required
- Use early return statements

### Testing Pattern
```javascript
console.log(twoSum([2, 7, 11, 15], 9), "1", "ans is [0,1]");
console.log(twoSum([3, 2, 4], 6), "2", "ans is [1,2]");
```

## Pre-commit Hooks

Husky runs `bun lint-staged` before each commit:
1. Formats all staged JS files with Biome
2. Runs Biome linter on staged files

Commit messages must follow Conventional Commits:
```
<type>(<scope>): <description>
```

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert

## Workflow for Solving LeetCode Problems

1. **Understand & Analyze**:
   - Identify the core algorithm (Greedy, DP, BFS/DFS, Bit Manipulation, etc.)
   - Check constraints ($N \le 10^5 \implies O(N \log N)$ or $O(N)$)

2. **Implementation**:
   - Write solution in JavaScript following style guidelines
   - Include JSDoc for all functions
   - Add console.log test cases at the end

3. **Verification**:
   - Run `node src/<problem>.js` to test
   - Run `biome format --write src/<problem>.js` to format only the changed file
   - Verify complexity analysis is included

## Best Practices

1. Keep solutions focused and readable
2. No comments for every statement - code should be self-explanatory
3. Follow existing patterns in similar problems
4. Use modern JavaScript features (ES6+)
5. Test manually with console.log
6. Keep utility classes reusable in src/utils/
7. Organize contest solutions appropriately
8. EVERY variable and function must have JSDoc type hints
9. lodash has been imported as `_` to avoid name conflicts, just use it and don't import it again

## Environment

- **Runtime**: Node.js 22.14.0 with `--harmony` flag
- **Package Manager**: pnpm (primary), bun (for hooks)
- **Preloaded**: lodash.js 4.17.21
- **datastructures-js**: @datastructures-js/binary-search-tree, deque, graph, heap, linked-list, priority-queue, queue, set, stack, trie
- **Note**: For Binary Search Tree, Trie, and Graph, import explicitly to avoid name conflicts
- **Formatter**: Biome 2.3.11
- **Linter**: Biome with strict correctness rules

## Project Structure

```
src/
  ├── <problem-number>.js    # Individual LeetCode solutions
  └── utils/                 # Reusable utility classes
```
