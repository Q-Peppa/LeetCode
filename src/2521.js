/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function (nums) {
  // 质因数
  let primeFactors = [];
  for (let n of nums) {
    for (let i = 2; i <= n; i++) {
      // 如果能被i整除
      while (n % i === 0) {
        // 除以i
        n /= i;
        // 把i放入质因数数组
        primeFactors.push(i);
      }
    }
  }
  // 从2开始遍历

  // 去重
  let set = new Set(primeFactors);
  return set.size;
};
