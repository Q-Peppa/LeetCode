/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
	let n = nums.length;
	let mod = 1e9 + 7;
	let sorted = Array.from(new Set(nums.slice().sort((a, b) => a - b)));
	let rank = new Map();
	sorted.forEach((num, index) => rank.set(num, index + 1));
	let bit = new Array(n + 1).fill(0);
	function update(i, val) {
		for (; i <= n; i += i & -i) {
			bit[i] = (bit[i] + val) % mod;
		}
	}
	function query(i) {
		let res = 0;
		for (; i > 0; i -= i & -i) {
			res = (res + bit[i]) % mod;
		}
		return res;
	}
	nums.forEach((num) => {
		let r = rank.get(num);
		update(r, (query(r - 1) + 1) % mod);
	});
	return query(n);
};
console.log(incremovableSubarrayCount([5, 3, 4, 6, 7]));
console.log(incremovableSubarrayCount([6, 5, 7, 8]));
console.log(incremovableSubarrayCount([8, 7, 6, 6]));
console.log(incremovableSubarrayCount([10, 10]));
