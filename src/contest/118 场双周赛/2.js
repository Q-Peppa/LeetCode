/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function (n, m, hBars, vBars) {
	hBars.sort((a, b) => a - b);
	vBars.sort((a, b) => a - b);
	const maxLen = (arr) => {
		// 求出arr最大连续数字的长度, 比如[1,2,3,5,6,7,9,10]的最大连续数字长度为3
		let max = 0,
			cur = 1;
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] === arr[i - 1] + 1) {
				cur++;
			} else {
				max = Math.max(max, cur);
				cur = 1;
			}
		}
		max = Math.max(max, cur);
		return max + 1;
	};
	// console.log('maxL', maxLen([2, 3, 5]));
	let maxHLen = maxLen(hBars);
	let maxVLen = maxLen(vBars);
	return Math.min(maxHLen, maxVLen) ** 2;
};
// n = 2, m = 1, hBars = [2,3], vBars = [2]
console.log(
	"maximizeSquareHoleArea(2, 1, [2,3], [2]) is: ",
	maximizeSquareHoleArea(2, 1, [2, 3], [2]),
);
//n = 1, m = 1, hBars = [2], vBars = [2]
console.log(
	"maximizeSquareHoleArea(1, 1, [2], [2]) is: ",
	maximizeSquareHoleArea(1, 1, [2], [2]),
);
//n = 2, m = 3, hBars = [2,3], vBars = [2,3,4]
console.log(
	"maximizeSquareHoleArea(2, 3, [2,3], [2,3,4]) is: ",
	maximizeSquareHoleArea(2, 3, [2, 3], [2, 3, 4]),
);
