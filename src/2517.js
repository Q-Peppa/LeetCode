/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
	price.sort((a, b) => a - b);
	if (k === 2) return price[price.length - 1] - price[0];
	console.log(price);
	let head = price[0];
	let tail = price[price.length - 1];
	let max = 0;
	for (let i = 1; i < price.length - 1; i++) {
		let temp = Math.min(price[i] - head, tail - price[i]);
		if (temp > max) max = temp;
	}
	return max;
};
// console.log(maximumTastiness([13, 5, 1, 8, 21, 2], 3));
// console.log(maximumTastiness([7, 7, 7, 7], 2));
// console.log(maximumTastiness([1, 3, 1], 2));
console.log(maximumTastiness([34, 116, 83, 15, 150, 56, 69, 42, 26], 6));
