/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
	let canDiv = 0,
		not = 0;
	for (let i = 1; i <= n; i++) {
		if (i % m === 0) canDiv += i;
		else not += i;
	}
	return not - canDiv;
};
