/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
	const n = nums.length;
	if (n === 3) return nums[0] + nums[1] + nums[2];
	let ans = 1e9;
	for (let i = 1; i < n - 1; i++) {
		for (let j = i; j < n - 1; j++) {
			// divide the array into 3 part , 0-i , i-j , j-n
			const f = nums.slice(0, i);
			const s = nums.slice(i, j + 1);
			const t = nums.slice(j + 1);
			// 一个数组的 代价 是它的 第一个 元素
			ans = Math.min(ans, f[0] + s[0] + t[0]);
		}
	}
	return ans;
};
console.log(minimumCost([1, 2, 3, 12]));
