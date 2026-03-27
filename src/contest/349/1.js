/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = (nums) => {
	if (nums.length <= 2) return -1;
	nums.sort((a, b) => a - b);
	return nums[1];
};
