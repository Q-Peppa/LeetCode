/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function (nums) {
	let n = nums.length;
	if (n === 1) return 1;
	nums.sort((a, b) => a - b);
	let res = 0;
	let rightCur = 0; // rightMax 是被选中的下一个数字
	const left = [];
	if (nums[0] < 0) res++;

	for (let i = 0; i < n; i++) {
		left.push(nums[i]);
		rightCur = nums[i + 1] ?? 1e6;
		if (left.length > nums[i] && left.length < rightCur) {
			res++;
		}
	}
	console.log(res);
	return res;
};

countWays([6, 0, 3, 3, 6, 7, 2, 7]);
