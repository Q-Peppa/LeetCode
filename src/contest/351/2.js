/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const makeTheIntegerZero = (num1, num2) => {
	let res = Number.MAX_SAFE_INTEGER;
	for (let i = 1; i <= 35; i++) {
		if (num1 - (num2 * i + i) >= 0 && bitCount(num1 - num2 * i) <= i) {
			res = Math.min(res, i);
		}
	}
	return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};
const bitCount = (num) =>
	num
		.toString(2)
		.split('')
		.filter((v) => v === '1').length;

console.log(makeTheIntegerZero(112577768, -501662198));
