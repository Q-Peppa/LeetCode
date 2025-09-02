/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
	const ok = (a, b) => {
		return Math.abs(a - b) <= Math.min(a, b);
	};
	let res = -1e5;
	for (const e of nums) {
		for (const ee of nums) {
			// console.log(e, ee )
			if (ok(e, ee)) res = Math.max(res, e ^ ee);
		}
	}
	return res;
};
