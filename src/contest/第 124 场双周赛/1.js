/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
	let ans = 0;
	const head = nums[0] + nums[1];
	for (let i = 2; i < nums.length; i += 2) {
		if (nums[i] + nums[i + 1] === head) {
			ans++;
		} else {
			break;
		}
	}
	return ans + 1;
};
