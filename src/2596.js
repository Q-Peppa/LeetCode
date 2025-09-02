/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
	const n = grid.length;
	let cur = 0;
	let end = n * n - 1;
	if (grid[0][0] !== 0) return false;
	let curPos = [0, 0];
	let ans = false;
	const checkValid = () => {
		console.log(cur);
		if (cur === end) {
			ans = true;
			return true;
		}
		let [l, r] = curPos;
		// chess knight
		if (grid[l + 2]?.[r + 1] === cur + 1) {
			cur++;
			curPos = [l + 2, r + 1];
			checkValid();
		}
		if (grid[l + 2]?.[r - 1] === cur + 1) {
			cur++;
			curPos = [l + 2, r - 1];
			checkValid();
		}
		if (grid[l - 2]?.[r + 1] === cur + 1) {
			cur++;
			curPos = [l - 2, r + 1];
			checkValid();
		}
		if (grid[l - 2]?.[r - 1] === cur + 1) {
			cur++;
			curPos = [l - 2, r - 1];
			checkValid();
		}
		if (grid[l + 1]?.[r + 2] === cur + 1) {
			cur++;
			curPos = [l + 1, r + 2];
			checkValid();
		}
		if (grid[l + 1]?.[r - 2] === cur + 1) {
			cur++;
			curPos = [l + 1, r - 2];
			checkValid();
		}
		if (grid[l - 1]?.[r + 2] === cur + 1) {
			cur++;
			curPos = [l - 1, r + 2];
			checkValid();
		}
		if (grid[l - 1]?.[r - 2] === cur + 1) {
			cur++;
			curPos = [l - 1, r - 2];
			checkValid();
		}
		ans = false;
		return ans;
	};
	checkValid();
	console.log(ans);
	return ans;
};

// checkValidGrid([
//   [0, 5, 16, 7, 10, 3],
//   [34, 26, 1, 4, 17, 8],
//   [24, 15, 6, 9, 2, 11],
//   [27, 35, 25, 20, 31, 18],
//   [14, 23, 32, 29, 12, 21],
//   [33, 28, 13, 22, 19, 30],
// ]);
checkValidGrid([
	[0, 11, 16, 5, 20],
	[17, 4, 19, 10, 15],
	[12, 1, 8, 21, 6],
	[3, 18, 23, 14, 9],
	[24, 13, 2, 7, 22],
]);
