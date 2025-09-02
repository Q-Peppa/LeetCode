/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const l = grid.length;
  const m = new Map();
  const res = [];
  for (const row of grid) {
    for (const num of row) {
      m.set(num, (m.get(num) || 0) + 1);
    }
  }
  for (let i = 1; i <= l ** 2; i++) {
    if (m.get(i) === undefined) {
      res.push(i);
    } else if (m.get(i) === 2) {
      res.unshift(i);
    }
  }
  return res;
};
