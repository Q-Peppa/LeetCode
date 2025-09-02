/**
 * @param {number[]} nums
 * @return {number[]}
 */
let distance = function (nums) {
	const n = nums.length;
	let groups = new Map();
	for (let i = 0; i < n; i++) {
		const num = nums[i];
		if (!groups.has(num)) {
			groups.set(num, []);
		}
		groups.get(num).push(i);
	}
	let ans = new Array(n).fill(0);
	let s = Array(n + 1).fill(0);
	for (let a of groups.values()) {
		let m = a.length;
		for (let i = 0; i < m; i++) {
			s[i + 1] = s[i] + a[i];
		}
		for (let i = 0; i < m; i++) {
			let target = a[i];
			let left = target * i - s[i];
			let right = s[m] - s[i] - (m - i) * target;
			ans[target] = left + right;
		}
	}
	return ans;
};
