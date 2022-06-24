/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  const arr = new Array(n).fill(1);
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      ans += 1;
      for (let j = i * i; j < n; j += i) {
        arr[j] = 0;
      }
    }
  }
  return ans;
};
