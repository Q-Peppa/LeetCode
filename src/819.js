/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLowerCase();
  const s = paragraph.split(/\W/);
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!banned.includes(s[i])) {
      if (map.has(s[i])) {
        map.set(s[i], map.get(s[i]) + 1);
      } else {
        map.set(s[i], 1);
      }
    }
  }
  let max = 0;
  let res = '';
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      res = key;
    }
  }
  return res;
};

// @lc code=end
let g = mostCommonWord(
  'Bob hit a ball, the hit BALL flew far after it was hit.',
  ['hit'],
);
console.log(g);
