/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
	const check = () => {
		if (n === 1) return true;
		return ((n + 1) & n) === 0;
	};
	do {
		if (check()) return n;
	} while (n < 1e9);
};
