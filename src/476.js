/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
	let s = num.toString(2);
	s = s.replaceAll('0', '#').replaceAll('1', '0').replaceAll('#', '1');
	return Number.parseInt(s, 2);
};

console.log(findComplement(5));
