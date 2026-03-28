/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
	if (nums.length <= 1) return true;
	let maxReach = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i > maxReach) return false;
		maxReach = Math.max(maxReach, i + nums[i]);
		if (maxReach >= nums.length - 1) return true;
	}
	return maxReach >= nums.length - 1;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
