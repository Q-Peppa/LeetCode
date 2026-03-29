/**
 * @param {Map<number, number>} counter
 * @param {number} value
 * @param {number} delta
 * @return {void}
 */
const updateCounter = (counter, value, delta) => {
	const next = (counter.get(value) ?? 0) + delta;

	if (next === 0) {
		counter.delete(value);
		return;
	}

	counter.set(value, next);
};

/**
 * @param {Map<number, number>} counter
 * @param {number} value
 * @return {boolean}
 */
const hasValue = (counter, value) => {
	return (counter.get(value) ?? 0) > 0;
};

/**
 * @param {number[][]} grid
 * @param {number} rowStart
 * @param {number} rowEnd
 * @param {number} colStart
 * @param {number} colEnd
 * @param {number} target
 * @param {Map<number, number>} counter
 * @return {boolean}
 */
const canRemoveCell = (
	grid,
	rowStart,
	rowEnd,
	colStart,
	colEnd,
	target,
	counter,
) => {
	const height = rowEnd - rowStart + 1;
	const width = colEnd - colStart + 1;

	if (height * width <= 1) {
		return false;
	}

	if (height > 1 && width > 1) {
		return hasValue(counter, target);
	}

	if (height === 1) {
		return (
			grid[rowStart][colStart] === target || grid[rowStart][colEnd] === target
		);
	}

	return (
		grid[rowStart][colStart] === target || grid[rowEnd][colStart] === target
	);
};

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const canPartitionGrid = (grid) => {
	const m = grid.length;
	const n = grid[0].length;
	let total = 0;
	/** @type {Map<number, number>} */
	const bottomCounter = new Map();

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			const value = grid[row][col];
			total += value;
			updateCounter(bottomCounter, value, 1);
		}
	}

	let topSum = 0;
	/** @type {Map<number, number>} */
	const topCounter = new Map();

	for (let row = 0; row < m - 1; row++) {
		for (let col = 0; col < n; col++) {
			const value = grid[row][col];
			topSum += value;
			updateCounter(topCounter, value, 1);
			updateCounter(bottomCounter, value, -1);
		}

		const bottomSum = total - topSum;

		if (topSum === bottomSum) {
			return true;
		}

		if (topSum > bottomSum) {
			if (
				canRemoveCell(grid, 0, row, 0, n - 1, topSum - bottomSum, topCounter)
			) {
				return true;
			}
		} else if (
			canRemoveCell(
				grid,
				row + 1,
				m - 1,
				0,
				n - 1,
				bottomSum - topSum,
				bottomCounter,
			)
		) {
			return true;
		}
	}

	let leftSum = 0;
	/** @type {Map<number, number>} */
	const leftCounter = new Map();
	/** @type {Map<number, number>} */
	const rightCounter = new Map();

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			updateCounter(rightCounter, grid[row][col], 1);
		}
	}

	for (let col = 0; col < n - 1; col++) {
		for (let row = 0; row < m; row++) {
			const value = grid[row][col];
			leftSum += value;
			updateCounter(leftCounter, value, 1);
			updateCounter(rightCounter, value, -1);
		}

		const rightSum = total - leftSum;

		if (leftSum === rightSum) {
			return true;
		}

		if (leftSum > rightSum) {
			if (
				canRemoveCell(grid, 0, m - 1, 0, col, leftSum - rightSum, leftCounter)
			) {
				return true;
			}
		} else if (
			canRemoveCell(
				grid,
				0,
				m - 1,
				col + 1,
				n - 1,
				rightSum - leftSum,
				rightCounter,
			)
		) {
			return true;
		}
	}

	return false;
};

console.log(
	canPartitionGrid([
		[1, 1],
		[1, 1],
	]),
	'1',
	'ans is true',
);
console.log(canPartitionGrid([[4, 2, 1, 2]]), '2', 'ans is false');
console.log(
	canPartitionGrid([
		[1, 1, 1],
		[1, 1, 10],
	]),
	'3',
	'ans is false',
);

// Time: O(m * n)
// Space: O(m * n)
