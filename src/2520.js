/**
 * @param {number} num
 * @return {number}
 */
const countDigits = (num) => {
	if (num < 10) return 1;
	const everyNum = num.toString().split('');
	let res = 0;
	for (let i = 0; i < everyNum.length; i++) {
		const temp = everyNum[i];
		res += num % Number(temp) === 0 ? 1 : 0;
	}
	return res;
};
