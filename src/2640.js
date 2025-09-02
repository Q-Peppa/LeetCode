/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function (nums) {
	const conver = [];
	let max = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < nums.length; i++) {
		max = Math.max(max, nums[i]);
		conver.push(nums[i] + max);
	}
	let prefixSum = [];
	for (let i = 0; i < conver.length; i++) {
		prefixSum.push(conver[i] + (prefixSum[i - 1] || 0));
	}
	return prefixSum;
	// return conver
};
