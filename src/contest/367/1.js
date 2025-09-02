/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
	const n = nums.length;
	const abs = Math.abs;
	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < n; ++j) {
			if (
				abs(i - j) >= indexDifference &&
				abs(nums[i] - nums[j]) >= valueDifference
			)
				return [i, j];
		}
	}
	return [-1, -1];
};
