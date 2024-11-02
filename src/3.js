/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  const q = [];
  for (let i = 0; i < s.length; i++) {
    let g = s[i];
    if (!q.includes(g)) {
      q.push(g);
    } else {
      while (q.includes(g)) {
        q.shift();
      }
      q.push(g);
    }
    res = Math.max(res, q.length);
  }
  return res;
};

console.log(lengthOfLongestSubstring('demo'));
