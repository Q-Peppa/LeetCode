/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function (s) {
	let maxQ = 0,
		feq = {};
	for (let char of s) {
		feq[char] = (feq[char] || 0) + 1;
		maxQ = Math.max(maxQ, feq[char]);
	}
	const q = [];
	for (let char in feq) {
		if (feq[char] === maxQ) {
			q.push(char);
		}
	}
	let res = "",
		ff = _.cloneDeep(feq);
	for (let char of s) {
		if (ff[char] === maxQ) {
			feq[char]--;
			if (feq[char] === 0) {
				res += char;
			}
		}
	}
	return res;
};
