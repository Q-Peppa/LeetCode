/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
	if (k === nums.length) {
		if (k === 1) return nums[0];
		let res = nums[0];
		for (let i = 1; i < nums.length; i++) {
			res = res & nums[i];
		}
		return res;
	}
	if (k === 1) {
		return nums.reduce((acc, cur) => acc | cur, 0);
	}
	let res = 0;
	const queryIisOne = (num, i) => {
		const temp = num.toString(2).split("").reverse().join("");
		return temp[i] === "1";
	};

	for (let j = 0; j < 31; j++) {
		let count = 0;
		for (let i = 0; i < nums.length; i++) {
			if (queryIisOne(nums[i], j)) {
				count++;
			}
		}
		console.log("c", j, count);
		res += count >= k ? 2 ** j : 0;
	}

	return res;
};

console.log("findKOr", findKOr([7, 12, 9, 8, 9, 15], 4));
// [22,7,27,30,15,30,28]
// 4
// 30
console.log("findKOr", findKOr([22, 7, 27, 30, 15, 30, 28], 4));
