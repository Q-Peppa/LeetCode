/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function (s) {
  let count = 0;
  let distinctSet = new Set();

  for (let i = 0; i < s.length; i++) {
    distinctSet.add(s[i]);
    if (distinctSet.size === (i + 1) % 3) {
      count++;
    }
  }

  return count;
};
