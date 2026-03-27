/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = (nums) => {
	nums = nums.map((e) => e & 1);
	const [a, b] = helper(nums);
	const c = helper2(nums);
	return Math.max(a, b, c);
};

function helper(arr) {
	let odd = 0;
	let even = 0;
	for (const ele of arr) {
		if (ele & 1) odd++;
		else even++;
	}
	return [odd, even];
}
function helper2(arr) {
	let count;
	count = 0;
	let flag = arr[0] & 1;
	for (let i = 1; i < arr.length; i++) {
		if ((arr[i] & 1) !== flag) {
			count++;
			flag = arr[i] & 1;
		}
	}
	return count + 1;
}
