/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  if (n === 0) return [0];
  const result = [0];
  for (let i = 0; i < n; i++) {
    for (let j = result.length - 1; j >= 0; j--) {
      result.push(result[j] | (1 << i));
    }
  }
  return result;
};
