/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = (n) => {
	let sum = 0;
	const str = n.toString();
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
			sum += parseInt(str[i], 10);
		} else {
			sum -= parseInt(str[i], 10);
		}
	}
	return sum;
};
// console.log('alternateDigitSum(111)',alternateDigitSum(521))
