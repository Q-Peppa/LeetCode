/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let m = [],
    max = Math.max;
  for (const interval of intervals) {
    if (m.length === 0 || m.at(-1).at(1) < interval[0]) {
      m.push(interval);
    } else {
      m.at(-1)[1] = max(m.at(-1)[1], interval[1]);
    }
  }
  return m;
};
