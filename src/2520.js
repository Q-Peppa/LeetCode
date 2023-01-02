/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  if (num < 10) return 1;
  let everyNum = num.toString().split('');
  let res = 0;
  for (let i = 0; i < everyNum.length; i++) {
    let temp = everyNum[i];
    res += num % Number(temp) === 0 ? 1 : 0;
  }
  return res;
};
