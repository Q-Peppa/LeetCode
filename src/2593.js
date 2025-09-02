/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
	const sortNums = [...nums].sort((a, b) => a - b);
	let res = 0;
	let index = 0;
	const s = (nums1) => {
		if (nums1.length === 0) return;
		let l = sortNums[index];
		let mark = nums1.indexOf(l);
		if (mark === -1) {
			index++;
			return s(nums1);
		}

		res += l;
		nums1.splice(mark, 1);
		if (mark > 0) {
			nums1.splice(mark - 1, 1);
		}
		if (mark < nums1.length - 1) {
			nums1.splice(mark - 1, 1);
		}
		index++;
	};
	s(nums);

	return res;
};

console.log(
	findScore([
		10, 44, 10, 8, 48, 30, 17, 38, 41, 27, 16, 33, 45, 45, 34, 30, 22, 3, 42,
		42,
	]),
);

// 未完成
