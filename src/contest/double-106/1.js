/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
	let str = n.toString() + (n * 2).toString() + (n * 3).toString();
	if (str.length !== 9) return false;
	for (let i = 1; i <= 9; i++) {
		if (!str.includes(i.toString())) return false;
	}
	return true;
};
