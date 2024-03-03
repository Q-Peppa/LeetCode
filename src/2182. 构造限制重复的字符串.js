/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  let dp = new Array(26).fill(0);
  for (let c of s) {
    dp[c.charCodeAt() - 97]++;
  }
  let ans = '',
    cur = 0;
  while (ans.length !== s.length) {
    for (let i = 25; i >= 0; i--) {
      cur = 0;
      while (dp[i] && cur < repeatLimit) {
        ans += String.fromCharCode(i + 97);
        cur++;
        dp[i]--;
      }
      if (dp[i] && cur >= repeatLimit) {
        let f = false;
        for (let j = i - 1; j >= 0; j--) {
          if (dp[j]) {
            f = true;
            ans += String.fromCharCode(j + 97);
            dp[j]--;
            cur = 0;
            break;
          }
        }
        i++;

        if (!f) return ans;
      }
    }
  }

  return ans;
};
console.log(repeatLimitedString('cczazcc', 3));
