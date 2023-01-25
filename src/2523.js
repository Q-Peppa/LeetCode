const isPrime = (i) => {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      return false;
    }
  }
  return true;
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  let bp = [];
  const length = 10 ** 6;
  for (let i = 0; i < length; i++) {
    bp[i] = true;
  }
  bp[0] = false;
  bp[1] = false;
  for (let i = 2; i < length; i++) {
    if (bp[i]) {
      for (let j = 2; i * j < length; j++) {
        bp[j * i] = false;
      }
    }
  }
  let res = [];
  let max = 99999999;
  for (let i = left; i <= right; i++) {
    for (let j = i + 1; j <= right; j++) {
      if (bp[i] && bp[j] && j - i < max) {
        max = j - i;
        res = [i, j];
        if (j - i <= 2) return res;
        break;
      }
    }
  }
  return res.length > 0 ? res : [-1, -1];
};
console.log(closestPrimes(100, 10 ** 6));
console.log(closestPrimes(10, 19));
console.log(closestPrimes(4, 6));
console.log(closestPrimes(19, 31));
