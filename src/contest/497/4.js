/**
 * @param {number[]} nums
 * @param {number} p
 * @param {number[][]} queries
 * @return {number}
 */
const countGoodSubseq = (nums, p, queries) => {
	const n = nums.length;
	if (n <= 1) {
		return 0;
	}

	const gcd = (a, b) => {
		let x = Math.abs(a);
		let y = Math.abs(b);
		while (y !== 0) {
			const temp = y;
			y = x % y;
			x = temp;
		}
		return x;
	};

	const hasGoodSubseq = () => {
		const reduced = [];
		for (let i = 0; i < n; i += 1) {
			const val = nums[i];
			if (val % p === 0) {
				reduced.push(val / p);
			}
		}

		if (reduced.length === 0) {
			return false;
		}

		const allDivisible = reduced.length === n;
		let current = new Map();

		for (const value of reduced) {
			const next = new Map(current);
			const existing = next.get(value);
			if (existing === undefined || 1 < existing) {
				next.set(value, 1);
			}

			for (const [g, size] of current) {
				const newG = gcd(g, value);
				const newSize = size + 1;
				const best = next.get(newG);
				if (best === undefined || newSize < best) {
					next.set(newG, newSize);
				}
			}

			current = next;
			if (!allDivisible && current.has(1)) {
				return true;
			}
		}

		const sizeForOne = current.get(1);
		if (sizeForOne === undefined) {
			return false;
		}
		if (!allDivisible) {
			return true;
		}
		return sizeForOne < n;
	};

	let result = 0;
	for (const [idx, value] of queries) {
		nums[idx] = value;
		if (hasGoodSubseq()) {
			result += 1;
		}
	}
	return result;
};

console.log(
	countGoodSubseq([4, 8, 12, 16], 2, [
		[0, 3],
		[2, 6],
	]),
	'expect 1',
);
console.log(countGoodSubseq([6, 10, 15], 1, [[0, 6]]), 'expect 0');
