/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
	if (s.length === 1) return 0;
	if (s.length === 2) return s === "10" ? 1 : 0;
	let z = 0,
		ans = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === "1" && z === 0) continue;
		if (s[i] === "0") {
			z++;
		}
		if (s[i] === "1") {
			ans += z;
		}
	}
	return ans;
};
