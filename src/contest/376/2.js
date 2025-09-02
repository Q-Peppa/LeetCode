/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
	nums.sort((a, b) => a - b);
	const l = nums.length;
	if (l % 3 !== 0) return [];
	let i = 0,
		j = 1;
	// 逐渐划分数组, 使得每个字数组任意两个元素之差不超过k, 如果不可能, 返回空数组
	// 要求每个字数组的长度为3
	const res = [];
	while (i < l) {
		if (nums[j] - nums[i] > k) {
			return [];
		}
		if (j - i === 2) {
			res.push(nums.slice(i, j + 1));
			i = j + 1;
			j = i + 1;
		} else {
			j++;
		}
	}
	return res;
};

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
console.log(divideArray([1, 3, 3, 2, 7, 3], 3));
