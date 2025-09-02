/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  // 背包 总容量为n , 分为3个包, 每个包的容量不超过limit, 返回总方案
  let ans = 0;
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: 4 }, () => 0),
  );
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 3; j++) {
      for (let k = 0; k <= limit && k <= i; k++) {
        dp[i][j] += dp[i - k][j - 1];
      }
    }
  }
  for (let i = 1; i <= 3; i++) {
    ans += dp[n][i];
  }
  return ans;
};
