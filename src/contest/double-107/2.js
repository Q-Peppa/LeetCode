/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function (x, y, z) {
	let res = z * 2;
	let ans = "";
	while (x > 0 && y > 0) {
		ans += "AA";
		x--;
		ans += "BB";
		y--;
	}
	if (y > 0) {
		ans = "BB" + ans;
	}
	if (ans.endsWith("A") && y > 0) {
		res += 2;
	}
	if (ans.endsWith("B") && x > 0) {
		res += 2;
	}
	return ans.length + res;
};
// x = 2, y = 5, z = 1
console.log(longestString(2, 5, 1)); // 7

//x = 3, y = 2, z = 2
console.log(longestString(3, 2, 2)); // 6
