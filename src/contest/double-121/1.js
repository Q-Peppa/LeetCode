/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
	const res = [];
	let end = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] === 1) {
			end += nums[i];
		} else {
			break;
		}
	}
	// console.log(end)
	for (let i = end; i < 3000; i++) {
		// console.log("inner" , i)
		if (!nums.includes(i)) return i;
	}
	return -1;
};
