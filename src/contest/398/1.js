/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
	if (nums.length <= 1) return true;
	const pair = []; // 存储相邻两个数字;
	for (let i = 0; i < nums.length - 1; i++) {
		pair.push([nums[i], nums[i + 1]]);
	}
	// console.log('p,', pair);
	for (let [a, b] of pair) {
		if (a % 2 === b % 2) return false;
	}
	return true;
};
isArraySpecial([3, 4, 1, 2, 6]);
