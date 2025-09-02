/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
	let sum = 0;
	let row = grid.length;
	let col = grid[0].length;
	for (let i = 0; i < col; i++) {
		let max = [];
		for (let j = 0; j < row; j++) {
			// make every line max ele to - 1
			let maxEle = Math.max(...grid[j]);
			if (maxEle > 0) {
				let maxIndex = grid[j].indexOf(maxEle);
				grid[j][maxIndex] = -1;
				max.push(maxEle);
			}
		}
		sum += Math.max(...max);
	}
	return sum;
};
console.log(
	deleteGreatestValue([
		[1, 2, 4],
		[3, 3, 1],
	]),
);
console.log(deleteGreatestValue([[10]]));
