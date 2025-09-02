// 2182. 构造限制重复的字符串 https://leetcode.cn/problems/construct-string-with-repeat-limit

/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  let N = 26;
  let cnt = new Array(N).fill(0);
  for (let c of s) {
    cnt[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  let ret = new Array();
  let m = 0;
  for (let i = N - 1, j = N - 2; i >= 0 && j >= 0; ) {
    if (cnt[i] === 0) {
      m = 0;
      continue;
    } else if (m < repeatLimit) {
      cnt[i]--;
      ret.push(String.fromCharCode(i + 'a'.charCodeAt()));
      m++;
    } else if (j >= i || cnt[j] === 0) {
      j--;
    } else {
      cnt[j]--;
      ret.push(String.fromCharCode(j + 'a'.charCodeAt()));
      m = 0;
    }
  }
  return ret.join('');
};
