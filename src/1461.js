/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const seen = new Set();
  const totalCodes = 1 << k; // 2^k possible binary codes
  for (let i = 0; i <= s.length - k; i++) {
    const code = s.substring(i, i + k);
    seen.add(code);
  }
  return seen.size === totalCodes;
};
