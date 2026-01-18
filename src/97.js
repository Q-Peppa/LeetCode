/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  //Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
  // An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
  // s = s1 + s2 + ... + sn
  // t = t1 + t2 + ... + tm
  // |n - m| <= 1
  const m = s1.length;
  const n = s2.length;
  if (m + n !== s3.length) return false;
  const dp = Array(m + 1)
    .fill(false)
    .map(() => Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const p = i + j - 1;
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[p]);
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[p]);
      }
    }
  }
  return dp[m][n];
};
const ans = isInterleave('aabcc', 'dbbca', 'aadbbcbcac');
console.log(ans);
