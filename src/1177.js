var f = (str, k) => {
	const times = _.countBy(str);
	let odd = 0;
	for (let v of Object.values(times)) {
		if (v % 2 === 1) odd++;
	}
	return odd <= k * 2 + 1;
};
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
	let pre = new Array(s.length + 1).fill(0);
	pre[0] = 1;
	let t = s[0];
	for (let i = 1; i <= s.length; i++) {
		pre[i] = pre[i - 1] + (t.includes(s[i]) ? 0 : 1);
		t += s[i];
	}
	console.log(pre, t);
	return queries.map((e) => {
		if (e[0] === e[1] || e[2] >= s.length - 1) return true;
		let feq = pre[e[1]] - pre[e[0]];
		return f(feq, e[2]);
	});
};
canMakePaliQueries("abcda", [[3, 3, 0]]);
