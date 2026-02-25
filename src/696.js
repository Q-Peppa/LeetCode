/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const counts = [];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++;
    else {
      counts.push(count);
      count = 1;
    }
  }
  counts.push(count);
  let result = 0;
  for (let i = 1; i < counts.length; i++) {
    result += Math.min(counts[i], counts[i - 1]);
  }
  return result;
};
const res = countBinarySubstrings('00110011') === 6; // "0011", "01", "1100", "10", "0011", and "01"
console.log(res);
