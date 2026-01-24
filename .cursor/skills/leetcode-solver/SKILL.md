---
name: leetcode-solver
description: Solves LeetCode problems using optimized JavaScript, analyzes time/space complexity, and follows project coding standards. Use when the user asks for help with LeetCode questions, algorithms, or complexity analysis.
---

# LeetCode Solver

## Purpose
This skill guides the agent in solving LeetCode problems efficiently, ensuring code quality, performance optimization, and rigorous complexity analysis.

## Workflow

1.  **Understand & Analyze**:
    *   Identify the core algorithm (Greedy, DP, BFS/DFS, Bit Manipulation, etc.).
    *   Check constraints ($N \le 10^5 \implies O(N \log N)$ or $O(N)$).

2.  **Implementation Guidelines**:
    *   **Language**: JavaScript (`src/*.js`).
    *   **Style**:
        *   Use `var functionName = function(args) { ... }` for the main solution.
        *   Use `const` for immutable variables, `let` for mutable ones.
        *   **MUST** include JSDoc for all functions.
        *   **Comments**: Minimal. Only JSDoc and key algorithmic steps. No tutorial-style comments.
    *   **Optimization**:
        *   Use **Bit Manipulation** for state compression or cyclic operations.
        *   Use **TypedArrays** (e.g., `Int32Array`) for fixed-size integer arrays to save memory and improve cache locality.
        *   Use `Math.clz32` for fast MSB calculations.
        *   Use `BigInt` for numbers exceeding $2^{53}-1$.

3.  **Complexity Analysis** (Required):
    *   Explicitly state **Time Complexity** and **Space Complexity**.
    *   Explain the derivation (e.g., "Sorting takes $O(N \log N)$, loop takes $O(N)$").

4.  **Verification**:
    *   Append `console.log` test cases at the end of the file.
    *   Example: `console.log(solve([1,2]), "expected_output", "desc");`

## Examples

### Example 1: Bit Manipulation & Optimization

**Input**: "Solve this bitwise AND maximization problem."

**Output**:
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumAND = function(nums) {
    // Optimization: Use Int32Array for better performance
    const costs = new Int32Array(nums.length);
    let ans = 0;
    
    // ... implementation ...

    return ans;
};

// Time Complexity: O(N log N)
// Space Complexity: O(N)
```

### Example 2: Standard Solution

**Input**: "Two Sum"

**Output**:
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // ...
    }
    return [];
};
```
