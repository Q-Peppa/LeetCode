/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findValidElements = (nums) => {
	const n = nums.length;
	const leftMax = new Array(n).fill(-Infinity);
	const rightMax = new Array(n).fill(-Infinity);
	for (let i = 1; i < n; i++) {
		leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
	}
	for (let i = n - 2; i >= 0; i--) {
		rightMax[i] = Math.max(rightMax[i + 1], nums[i + 1]);
	}
	const ans = [];
	for (let i = 0; i < n; i++) {
		if (
			i === 0 ||
			i === n - 1 ||
			nums[i] > leftMax[i] ||
			nums[i] > rightMax[i]
		) {
			ans.push(nums[i]);
		}
	}
	return ans;
};
