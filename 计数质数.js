/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let arr = new Array(n).fill(1)
  let ans = 0
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      ans += 1;
      for (let j = i * i; j < n; j += i) {
        arr[j] = 0;
      }
    }
  }
  return ans
};
console.log(countPrimes(999));
console.log(countPrimes(9999));
console.log(countPrimes(99999));
console.log(countPrimes(999999));
console.log(countPrimes(9999999));

