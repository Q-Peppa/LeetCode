/**
 * @param {number} l
 * @param {number} r
 * @param {string} directions
 * @return {number}
 */
const countGoodIntegersOnPath = (l, r, directions) => {
	const pathIdx = [0];
	let row = 0;
	let col = 0;
	for (const ch of directions) {
		if (ch === 'D') row++;
		else col++;
		pathIdx.push(row * 4 + col);
	}

	const isPath = new Array(16).fill(false);
	for (const idx of pathIdx) {
		isPath[idx] = true;
	}

	/**
	 * @param {bigint | number} x
	 * @return {number}
	 */
	const countUpTo = (x) => {
		if (x < 0) return 0;
		const s = typeof x === 'bigint' ? x.toString() : String(x);
		const digits = s.padStart(16, '0').split('').map(Number);

		const memo = Array.from({ length: 16 }, () =>
			Array.from({ length: 2 }, () => new Array(10).fill(-1)),
		);

		/**
		 * @param {number} pos
		 * @param {number} tight
		 * @param {number} prev
		 * @return {number}
		 */
		const dfs = (pos, tight, prev) => {
			if (pos === 16) return 1;
			if (memo[pos][tight][prev] !== -1) return memo[pos][tight][prev];

			const limit = tight ? digits[pos] : 9;
			let total = 0;

			for (let d = 0; d <= limit; d++) {
				const nextTight = tight && d === limit ? 1 : 0;
				if (isPath[pos]) {
					if (d >= prev) {
						total += dfs(pos + 1, nextTight, d);
					}
				} else {
					total += dfs(pos + 1, nextTight, prev);
				}
			}

			memo[pos][tight][prev] = total;
			return total;
		};

		return dfs(0, 1, 0);
	};

	return countUpTo(r) - countUpTo(l - 1);
};

console.log(countGoodIntegersOnPath(8, 10, 'DDDRRR'), '1', 'ans is 2');
console.log(
	countGoodIntegersOnPath(123456789, 123456790, 'DDRRDR'),
	'2',
	'ans is 1',
);
console.log(
	countGoodIntegersOnPath(1288561398769758, 1288561398769758, 'RRRDDD'),
	'3',
	'ans is 0',
);

// Complexity: O(16 * 2 * 10 * 10) time, O(16 * 2 * 10) space per DP call
