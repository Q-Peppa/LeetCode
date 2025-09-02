/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
	const res = [];
	let minL = 0;
	const count = (ss) => {
		let ans = 0;
		for (let i = 0; i < ss.length; i++) {
			if (ss[i] === "1") ans++;
		}
		return ans;
	};
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "0") continue;
		for (let j = i + 1; j < s.length + 1; j++) {
			const sl = s.slice(i, j);
			if (count(sl) === k) {
				minL = Math.min(minL, sl.length);
				res.push(sl);
			}
		}
	}
	const min = res.filter((e) => e.length !== minL);
	min.sort((a, b) => b - a);
	return min.at(-1) ?? "";
};
