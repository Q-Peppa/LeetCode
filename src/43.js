/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if ('0' === num1 || '0' === num2) return '0';
  if ('1' === num1) return num2;
  if ('1' === num2) return num1;
  let i = num1.length - 1;
  let j = num2.length - 1;
  let temp = 0;
};
console.log(multiply('123', '456')); // 56088
console.log(multiply('123456789', '987654321')); // 121932631112635269
