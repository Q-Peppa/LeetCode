/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = (nums1) => {
	let minimumOdd = Infinity;

	for (const num of nums1) {
		if ((num & 1) === 1) {
			minimumOdd = Math.min(minimumOdd, num);
		}
	}

	if (minimumOdd === Infinity) {
		return true;
	}

	for (const num of nums1) {
		if ((num & 1) === 0 && num < minimumOdd) {
			return false;
		}
	}

	return true;
};

console.log(uniformArray([1]), 'case1', 'ans = true');
console.log(uniformArray([2]), 'case2', 'ans = true');
console.log(uniformArray([1, 2]), 'case3', 'ans = true');
console.log(uniformArray([3, 2]), 'case4', 'ans = false');
console.log(uniformArray([5, 3]), 'case5', 'ans = true');

// Time: O(n)
// Space: O(1)
