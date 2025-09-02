const checkRepeat = (s) => {
  let t = true;
  let pre = undefined;
  for (const char of s) {
    if (pre === undefined) {
      pre = char;
    } else {
      if (pre === char && !t) {
        return false;
      } else if (pre === char && t) {
        t = false;
      }
    }
    pre = char;
  }
  return true;
};
/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {
  if (s.length <= 2) return s.length;
  let max = -9999;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const temp = s.slice(i, j + 1);
      if (checkRepeat(temp)) {
        max = Math.max(max, temp.length);
      }
    }
  }
  return max;
};
