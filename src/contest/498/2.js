/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const firstStableIndex = (nums, k) => {
	const n = nums.length;
	const suffixMin = new Int32Array(n);
	suffixMin[n - 1] = nums[n - 1];
	for (let i = n - 2; i >= 0; i--) {
		suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
	}
	let prefixMax = -Infinity;
	for (let i = 0; i < n; i++) {
		if (nums[i] > prefixMax) {
			prefixMax = nums[i];
		}
		if (prefixMax - suffixMin[i] <= k) {
			return i;
		}
	}
	return -1;
};

console.log(firstStableIndex([5, 0, 1, 4], 3), '1', 'ans is 3');
console.log(firstStableIndex([3, 2, 1], 1), '2', 'ans is -1');
console.log(firstStableIndex([0], 0), '3', 'ans is 0');

// Complexity: O(n) time, O(n) space
