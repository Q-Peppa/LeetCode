/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
	let cols = [];
	const res = [];
	function isValid(row, col) {
		for (let i = 0; i < row; i++) {
			if (cols[i] === col) return !1; // 当前列已经有皇后
			if (row - i === Math.abs(col - cols[i])) return !1;
		}
		return 1;
	}

	function place(row) {
		if (row === cols.length) {
			res.push(show());
			return;
		}
		for (let col = 0; col < cols.length; col++) {
			if (isValid(row, col)) {
				cols[row] = col;
				place(row + 1);
			}
		}
	}

	function placeQueen(n) {
		if (n < 1) return;
		cols = new Array(n);
		place(0);
	}

	function show() {
		const t = [];
		let t2 = "";
		for (let row = 0; row < cols.length; row++) {
			for (let col = 0; col < cols.length; col++) {
				if (cols[row] === col) {
					t2 += "Q";
				} else {
					t2 += ".";
				}
			}
			t.push(t2);
			t2 = "";
		}
		return t;
	}

	placeQueen(n);
	return res;
};
console.log(solveNQueens(4));
console.log(solveNQueens(1));
