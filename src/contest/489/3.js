var almostPalindromic = function (s) {
  const n = s.length;
  if (n <= 1) return 0;
  let dp = Array.from({ length: n }, () => new Int32Array(n));

  let maxLen = 0;
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;

      if (len === 1) {
        dp[i][j] = 0; // 它是纯回文
      } else {
        if (s[i] === s[j]) {
          dp[i][j] = dp[i + 1][j - 1];
        } else {
          // 不相等时，最少删除次数 = 1 + min(左边删, 右边删)
          dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1]);
        }
      }
      if (dp[i][j] === 1 || (dp[i][j] === 0 && len >= 2)) {
        maxLen = Math.max(maxLen, len);
      }
    }
  }

  // 特殊情况：如果整个字符串是纯回文且长度为 n，
  // 删掉一个字符后的最长准回文子串长度就是 n
  // 照应原代码逻辑
  return maxLen;
};
