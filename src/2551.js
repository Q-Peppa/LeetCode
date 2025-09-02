/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
	let res = [];
	for (let i = 0; i < weights.length - 1; i++) {
		res.push(weights[i] + weights[i + 1]);
	}
	res.sort((a, b) => a - b);
	let a = 0,
		b = 0;
	for (let i = 0; i < k - 1; i++) {
		a += res[i];
	}
	res = res.reverse();
	for (let i = 0; i < k - 1; i++) {
		b += res[i];
	}
	return b - a;
};
