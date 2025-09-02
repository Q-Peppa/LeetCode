import * as assert from "assert";

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
	const f = new Array(n).fill(0).map((_, i) => i);
	const find = (x) => {
		while (x !== f[x]) {
			x = f[x];
		}
		return x;
	};
	const un = (x, y) => {
		const f1 = find(x);
		const f2 = find(y);
		if (f1 !== f2) {
			f[f1] = f2;
		}
	};
	for (const e of edges) {
		un(...e);
	}
	const map = {};

	for (let i = 0; i < n; i++) {
		const fa = find(i);
		map[fa] = (map[fa] ?? 0) + 1;
	}
	const temp = Object.values(map);
	if (temp.length === 1) return 0; // cycle
	let ans = 0;
	for (let i = 0; i < temp.length; i++) {
		ans += temp[i] * (n - temp[i]);
	}
	return ans / 2;
};
assert.equal(
	countPairs(7, [
		[0, 2],
		[0, 5],
		[2, 4],
		[1, 6],
		[5, 4],
	]),
	14,
);
