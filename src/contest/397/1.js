/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let ele = s[i];
    let index = t.indexOf(ele);
    res += Math.abs(index - i);
  }
  return res;
};
