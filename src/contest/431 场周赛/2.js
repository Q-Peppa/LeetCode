function getReverseChar(char) {
	return String.fromCharCode(219 - char.charCodeAt(0));
}
/**
 * @param {string} s
 * @return {number}
 */
var calculateScore = function (s) {
	let ans = 0;
	const map = new Map();
	const use = new Set();
	const ok = (char) => {
		const k = getReverseChar(char);
		return map.has(k) && map.get(k).length > 0;
	};
	const calc = (char, cur) => {
		const k = getReverseChar(char);
		let pre = map.get(k).pop();
		if (use.has(pre) || use.has(cur)) {
			return 0;
		}
		use.add(pre);
		use.add(cur);
		return cur - pre;
	};
	map.set(s[0], [0]);
	for (let i = 1; i < s.length; i++) {
		if (ok(s[i])) {
			console.log(s[i], i);
			ans += calc(s[i], i);
		}
		if (!map.has(s[i])) {
			map.set(s[i], []);
		}
		map.get(s[i]).push(i);
	}
	return ans;
};
