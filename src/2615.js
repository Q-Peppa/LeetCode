/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distance = (nums) => {
	const n = nums.length;
	const groups = new Map();
	for (let i = 0; i < n; i++) {
		const num = nums[i];
		if (!groups.has(num)) {
			groups.set(num, []);
		}
		groups.get(num).push(i);
	}
	const ans = new Array(n).fill(0);
	const s = Array(n + 1).fill(0);
	for (const a of groups.values()) {
		const m = a.length;
		for (let i = 0; i < m; i++) {
			s[i + 1] = s[i] + a[i];
		}
		for (let i = 0; i < m; i++) {
			const target = a[i];
			const left = target * i - s[i];
			const right = s[m] - s[i] - (m - i) * target;
			ans[target] = left + right;
		}
	}
	return ans;
};
