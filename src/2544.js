/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
	let sum = 0;
	let str = n.toString();
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
			sum += parseInt(str[i]);
		} else {
			sum -= parseInt(str[i]);
		}
	}
	return sum;
};
// console.log('alternateDigitSum(111)',alternateDigitSum(521))
