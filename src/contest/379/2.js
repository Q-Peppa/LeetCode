/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function (a, b, c, d, e, f) {
	// 车坐标为a,b , 象坐标为c,d, 后e,f
	// 象一次就能吃到 , 算斜率 , 和原点的斜率相同
	let noC = true;
	for (let i = 0; i < 8; i++) {
		if (c + i === a && d - i === b) noC = false;
		if (c + i === e && d - i === f && noC) return 1;
	}
	// 向下
	noC = true;
	for (let i = 0; i < 8; i++) {
		if (c - i === a && d + i === b) noC = false;
		if (c - i === e && d + i === f && noC) return 1;
	}
	noC = true;
	for (let i = 0; i < 8; i++) {
		if (c - i === a && d - i === b) noC = false;
		if (c - i === e && d - i === f && noC) return 1;
	}
	noC = true;
	for (let i = 0; i < 8; i++) {
		if (c + i === a && d + i === b) noC = false;
		if (c + i === e && d + i === f && noC) return 1;
	}
	if (a === e || b === f) {
		if (a === e) {
			if (c === e) {
				if (d > b && d < f) return 2;
				if (d < b && d > f) return 2;
				return 1;
			}
			return 1;
		} else {
			if (d === f) {
				if (c > a && c < e) return 2;
				if (c < a && c > e) return 2;
				return 1;
			}
			return 1;
		}
	}
	return 2;
};

console.log(minMovesToCaptureTheQueen(4, 3, 3, 4, 5, 2)); // 2
console.log(minMovesToCaptureTheQueen(1, 1, 1, 4, 1, 8)); // 2
console.log(minMovesToCaptureTheQueen(5, 3, 3, 4, 5, 2)); // 1
console.log(minMovesToCaptureTheQueen(1, 6, 3, 3, 5, 6)); // 1
console.log(minMovesToCaptureTheQueen(8, 4, 8, 8, 7, 7)); // 1
console.log(minMovesToCaptureTheQueen(5, 4, 5, 2, 5, 7)); // 1
