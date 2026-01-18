# LeetCode JavaScript Solutions

A personal collection of LeetCode solutions and contest submissions in
JavaScript, plus reusable utilities for common data structures.

> [!NOTE]
> This repository is focused on practice and reference. There is no automated
> test framework; solutions are verified with manual runs.

## Repository structure

- [src/](src/) — individual problem solutions (one file per problem id)
- [src/utils/](src/utils/) — reusable data structures (e.g., segment tree,
	union-find)
- [src/contest/](src/contest/) — weekly and biweekly contest submissions
- [contest/](contest/) — additional contest archives

## Getting started

Prerequisites:

- Node.js 22.x
- pnpm (recommended)

Install dependencies:

```bash
pnpm install
```

## Run a solution

Run any solution file directly with Node.js:

```bash
node src/1.js
```

You can also add quick manual checks inside a solution file using
`console.log` and run it the same way.

> [!TIP]
> Use problem id files under [src/](src/) for main solutions, and
> [src/contest/](src/contest/) for contest entries.

## Formatting and linting

This project uses Biome for formatting and linting.

```bash
# Format all JS files in src
pnpm biome-fix

# Lint without writing changes
biome check src
```

## Conventions

- Solutions use `var functionName = function (...) {}` for LeetCode
	compatibility.
- JSDoc comments are used for function signatures.
- Indentation is 2 spaces; single quotes and semicolons are required.

## Dependencies

- [lodash](https://www.npmjs.com/package/lodash) — utility helpers
- [datastructures-js](https://www.npmjs.com/package/datastructures-js) —
	additional data structures

> [!IMPORTANT]
> Prefer built-in JavaScript features. External libraries are used only when
> they simplify complex data structures.
