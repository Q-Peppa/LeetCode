/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
	// i < j < k
	//nums[i] < nums[j] 且 nums[k] < nums[j]
	let ans = 9999999999;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] < nums[j] && nums[k] < nums[j]) {
					ans = Math.min(ans, nums[i] + nums[j] + nums[k]);
				}
			}
		}
	}
	return ans === 9999999999 ? -1 : ans;
};
