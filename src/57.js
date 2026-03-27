/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = (intervals, newInterval) => merge([...intervals, newInterval]);
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = (intervals) => {
	if (intervals.length === 0) return [];
	intervals.sort((a, b) => a[0] - b[0]);
	/** @type {number[][]} */
	const m = [],
		max = Math.max;
	for (const interval of intervals) {
		if (m.length === 0 || m[m.length - 1][1] < interval[0]) {
			m.push(interval);
		} else {
			m[m.length - 1][1] = max(m[m.length - 1][1], interval[1]);
		}
	}
	return m;
};
