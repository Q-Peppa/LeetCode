/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let l = 0,
    r = 0,
    max = 0;

  /**
   * @param {number} left
   * @param { number } right
   */
  const dfs = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > max) {
        max = right - left + 1;
        l = left;
        r = right;
      }
      left--;
      right++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    dfs(i, i);
    dfs(i, i + 1);
  }
  return s.slice(l, r + 1);
};
