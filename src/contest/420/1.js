/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function (target) {
	const res = [];
	const alpha = new Array(26)
		.fill(0)
		.map((_, i) => String.fromCharCode(i + "a".charCodeAt(0)));

	const ok = (prefix, cur) => {
		const index = alpha.indexOf(cur);
		const temp = [];
		for (let i = 0; i <= index; i++) {
			temp.push(prefix + alpha[i]);
		}
		return temp;
	};
	for (let index = 0; index < target.length; index++) {
		const cur = target[index];
		const pre = target.slice(0, index);
		res.push(ok(pre, cur));
	}
	return res.flat();
};
