/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumOR = (grid) => {
	let allBits = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			allBits |= grid[i][j];
		}
	}

	/**
	 * @param {number} mask
	 * @return {boolean}
	 */
	const canUseMask = (mask) => {
		for (let i = 0; i < grid.length; i++) {
			let ok = false;
			for (let j = 0; j < grid[i].length; j++) {
				if ((grid[i][j] | mask) === mask) {
					ok = true;
					break;
				}
			}
			if (!ok) {
				return false;
			}
		}
		return true;
	};

	let ans = allBits;
	for (let bit = 30; bit >= 0; bit--) {
		if (((ans >> bit) & 1) === 0) {
			continue;
		}
		const candidate = ans ^ (1 << bit);
		if (canUseMask(candidate)) {
			ans = candidate;
		}
	}

	return ans;
};

console.log(
	minimumOR([
		[1, 2],
		[4, 8],
	]),
	'case1',
	'ans = 5',
);
console.log(
	minimumOR([
		[7, 3],
		[2, 1],
	]),
	'case2',
	'ans = 3',
);

// Time: O(31 * m * n)
// Space: O(1)
