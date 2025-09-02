/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
  let total = 0;
  let muti = 1;
  let copy = n;
  while (n) {
    total += n % 10;
    muti *= n % 10;
    n = Math.floor(n / 10);
  }
  // console.log(copy,  total ,muti)
  return copy % (total + muti) === 0;
};
