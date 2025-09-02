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
    if (m.length === 0 || m.at(-1)[1] < interval[0]) {
      m.push(interval);
    } else {
      m.at(-1)[1] = max(m.at(-1)[1], interval[1]);
    }
  }
  return m;
};
/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  // meetings[i] = [start_i, end_i]
  meetings = merge(meetings);
  let count = 0;
  for (const [l, r] of meetings) {
    count += r - l + 1;
  }
  return days - count;
};
