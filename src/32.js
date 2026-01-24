/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let dp = new Array(s.length).fill(0);
  dp[0] = 0;
  let ans = 0;
  for (let i = 0, p; i < s.length; i++) {
    if (s[i] === ')') {
      p = i - dp[i - 1] - 1;
      if (p >= 0 && s[p] === '(') {
        dp[i] = dp[i - 1] + 2 + (p > 0 ? dp[p - 1] : 0);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};
console.log(longestValidParentheses('(()'), longestValidParentheses(')()())'));
