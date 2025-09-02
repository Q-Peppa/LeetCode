/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
  const row = new Set();
  const col = new Set();
  let r, c;
  r = c = n;
  let ans = 0;
  while (queries.length) {
    let [t, index, val] = queries.pop();
    if (t === 0 && !row.has(index)) {
      ans += c * val;
      r -= 1;
      row.add(index);
    } else if (t === 1 && !col.has(index)) {
      ans += r * val;
      c -= 1;
      col.add(index);
    }
  }
  return ans;
};
