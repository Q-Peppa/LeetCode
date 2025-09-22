/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const { last } = _;
  let res = new Array(m).fill(0).map((e) => new Array(n).fill(0));
  res[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        res[i][j] = 1;
      } else {
        res[i][j] = res[i - 1][j] + res[i][j - 1];
      }
    }
  }

  return last(last(res));
};
