/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
	if ('0' === num1 || '0' === num2) return '0';
	if ('1' === num1) return num2;
	if ('1' === num2) return num1;
	const i = num1.length - 1;
	const j = num2.length - 1;
	const temp = 0;
};
console.log(multiply('123', '456')); // 56088
console.log(multiply('123456789', '987654321')); // 121932631112635269
