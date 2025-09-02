/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
	const bin = n.toString(2);
	let left, right;
	left = right = 0;
	let k = 0;
	for (let i = bin.length - 1; i >= 0; i--) {
		let temp = bin[i];
		if (k % 2 === 0 && temp === "1") {
			left++;
		}
		if (k % 2 === 1 && temp === "1") {
			right++;
		}
		k++;
	}
	return [left, right];
};

console.log(evenOddBit(17), evenOddBit(2));
