import _ from "lodash";

function countBits(n) {
	let ans = 0;
	while (n) {
		ans += n & 1;
		n >>= 1;
	}
	return ans;
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
	/**
	 * In one operation, you can swap any two adjacent elements if they have the same number of set bits. You are allowed to do this operation any number of times (including zero).
	 *
	 * Return true if you can sort the array, else return false.
	 */
	const n = nums.length;
	const ori = [...nums].sort((a, b) => a - b);
	if (_.isEqual(nums, ori)) return true;
	if (n === 1) return true;
	const bits = Array(n).fill(0);
	for (let i = 0; i < n; i++) {
		bits[i] = countBits(nums[i]);
	}
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n - 1; j++) {
			if (nums[i] > nums[j]) {
				if (bits[i] !== bits[j]) return false;
			}
		}
	}
	return true;
};

console.log(canSortArray([160, 247, 127]));
