# AGENTS.md - LeetCode Repository Guidelines

## Build/Lint/Format Commands

### Code Formatting & Linting
```bash
# Format all JavaScript files in src directory
pnpm biome-fix

# Alternative: Run Biome directly for more control
biome format --write src

# Lint files (check for issues)
biome check src

# Fix both formatting and linting issues
biome check --write src
```

### Testing
No automated test framework is configured. Solutions are tested manually using console.log statements.
To test a specific solution:
```bash
# Run the file directly with Node.js
node src/1.js
# or
node src/207.js
```

## Project Structure

```
src/
├── *.js                 # Individual LeetCode problem solutions
├── utils/               # Reusable utility classes and functions
│   ├── SegmentTree.js   # Segment tree data structure
│   ├── SortedList.js    # Sorted list implementation
│   └── union.js         # Union-Find/Disjoint Set
└── contest/             # Contest problem solutions
    ├── 第 124 场双周赛/
    └── 第 387 场周赛/
```

## Code Style Guidelines

### Basic Formatting (Biome Configuration)
- **Indentation**: 2 spaces
- **Line width**: 80 characters max
- **Quotes**: Single quotes (' ')
- **Semicolons**: Always required
- **Trailing commas**: Required for multi-line structures
- **Line endings**: LF (Unix-style)
- **Arrow function parentheses**: Always required

### Type Hints & Documentation
Use JSDoc comments for function signatures:
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

### Exports & Function Declarations
- LeetCode solutions use `var functionName` for compatibility:
```javascript
var solutionName = function (params) {
  // implementation
};
```
- Use `const` for constants and `let` for variables that change
- Avoid `const` for the main function declaration (LeetCode requirement)

### Naming Conventions
- **Functions**: camelCase (e.g., `twoSum`, `addTwoNumbers`, `findOrder`)
- **Classes**: PascalCase (e.g., `SegmentTree`, `SortedList`, `TopoSort`)
- **Variables**: camelCase (e.g., `nums`, `target`, `marked`, `onStack`)
- **Method names**: camelCase (e.g., `add`, `remove`, `get`, `isEmpty`)

### Import Style
- ES Modules (`import`/`export`) are enabled via `"type": "module"` in package.json
- Built-in JavaScript features are preferred over external libraries
- Use external dependencies only when necessary:
  - `lodash` - Utility functions
  - `datastructures-js` - Additional data structures

### Class Implementation
Use modern ES6 class syntax with field declarations:
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

### Utility Classes
Utility classes should be reusable and placed in `src/utils/`:
- Constructor functions with prototype methods are also acceptable
- Provide clear JSDoc comments for all public methods

### Comment Style
- Use JSDoc for function documentation
- Inline comments can be in English or Chinese (mixed in codebase)
- Comment complex algorithms and data structures

### Pre-commit Hooks
Husky is configured to run `pnpm biome-fix` before each commit.
This automatically formats all JavaScript files in the src directory.

### Linting Rules
The following Biome rules are active for src/**/*.js:
- No undeclared variables (off)
- No unused variables (off)
- No console (off - allows console.log for testing)
- Strict correctness and suspicious rules enabled

Common errors to avoid:
- Constant conditions
- Self-assignment
- Duplicate parameters/object keys
- Unreachable code
- Unsafe optional chaining

### Error Handling
- Most LeetCode solutions return empty arrays or null/undefined on failure
- No explicit try-catch blocks unless problem requires
- Use return statements for early exits

### Bitwise Operations
Bitwise shifts are used for efficiency:
- `(s + e) >> 1` for midpoint calculation
- Preferred over `Math.floor((s + e) / 2)`

### Testing Pattern
Add test cases using console.log:
```javascript
console.log(twoSum([2, 7, 11, 15], 9), "1", "ans is [0,1]");
console.log(twoSum([3, 2, 4], 6), "2", "ans is [1,2]");
```

## Additional Notes

- This is a personal LeetCode problem collection
- Contest solutions are organized by contest name
- No automated testing framework - manual verification only
- Code is primarily for practice and reference
- Chinese comments are acceptable in the codebase

## External Dependencies

### lodash
Utility library for common operations. Use sparingly - prefer native JavaScript methods.

### datastructures-js
Provides additional data structures. Used when problems require complex data structures not built into JavaScript.

## Best Practices

1. Keep solutions focused and readable
2. Add comments explaining non-trivial algorithms
3. Follow the existing patterns in similar problems
4. Use modern JavaScript features (ES6+)
5. Run biome-fix before committing (automated via husky)
6. Test manually with console.log statements
7. Keep utility classes reusable and well-documented
8. Organize contest solutions in appropriate directories
9. every variable and function should have a jsdoc comment types

## Environment

### Runtime
- Node.js 22 (22.14.0)
- Code runs with the `--harmony` flag enabled for modern ES6 features

### Preloaded Libraries
- lodash.js 4.17.21 is available by default

### datastructures-js Versions
- "@datastructures-js/binary-search-tree": "5.4.0"
- "@datastructures-js/deque": "1.0.8"
- "@datastructures-js/graph": "5.3.1"
- "@datastructures-js/heap": "4.3.7"
- "@datastructures-js/linked-list": "6.1.4"
- "@datastructures-js/priority-queue": "6.3.5"
- "@datastructures-js/queue": "4.3.0"
- "@datastructures-js/set": "4.2.2"
- "@datastructures-js/stack": "3.1.6"
- "@datastructures-js/trie": "4.2.3"

Note: For Binary Search Tree, Trie, and Graph, you must import them explicitly to avoid name conflicts in some problems.
