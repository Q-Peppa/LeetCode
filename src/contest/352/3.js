/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
	let ans = 0;
	let repeat = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = nums.length - 1; j > i; j--) {
			const max = Math.max(...nums.slice(i, j + 1));
			const min = Math.min(...nums.slice(i, j + 1));
			if (max - min <= 2) {
				let len = j - i + 1;
				ans += ((1 + len) * len) / 2;
				repeat += len;
				i = j;
				break;
			}
		}
	}
	return ans - repeat + nums.length;
};
//  [5,4,2,4]
console.log(continuousSubarrays([5, 4, 2, 4])); // 8
//  [1,2,3]]
console.log(continuousSubarrays([1, 2, 3])); // 6
// [65,66,67,66,66,65,64,65,65,64]
console.log(continuousSubarrays([65, 66, 67, 66, 66, 65, 64, 65, 65, 64])); //43
