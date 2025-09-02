/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
	let k = 0;
	const findByKmp = (arr) => {
		let m = arr.length,
			n = nums.length;
		if (k + m > n) return -1;
		const pi = new Array(m).fill(0);
		for (let i = 1, j = 0; i < m; i++) {
			while (j > 0 && arr[i] !== arr[j]) j = pi[j - 1];
			if (arr[i] === arr[j]) j++;
			pi[i] = j;
		}
		for (let i = k, j = 0; i < n; i++) {
			while (j > 0 && nums[i] !== arr[j]) j = pi[j - 1];
			if (nums[i] === arr[j]) j++;
			if (j === m) return i - m + 1;
		}
		return -1;
	};
	for (let g of groups) {
		k = findByKmp(g);
		if (k === -1) return false;
		k += g.length;
	}
	return true;
};

console.log(
	canChoose([[21, 22, 21, 22, 21, 30]], [21, 22, 21, 22, 21, 22, 21, 30]),
);
