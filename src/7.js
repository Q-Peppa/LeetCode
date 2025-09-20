/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let f = x < 0;
  let sum = 0;
  let k = Math.abs(x);
  while (k > 0) {
    sum = sum * 10 + (k % 10);
    k = Math.floor(k / 10);
  }
  if (sum >= 2 ** 31 - 1) return 0;
  return sum * (f ? -1 : 1);
};
