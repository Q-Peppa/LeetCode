/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = (s) => {
	let maxQ = 0,
		feq = {};
	for (const char of s) {
		feq[char] = (feq[char] || 0) + 1;
		maxQ = Math.max(maxQ, feq[char]);
	}
	const q = [];
	for (const char in feq) {
		if (feq[char] === maxQ) {
			q.push(char);
		}
	}
	let res = '',
		ff = _.cloneDeep(feq);
	for (const char of s) {
		if (ff[char] === maxQ) {
			feq[char]--;
			if (feq[char] === 0) {
				res += char;
			}
		}
	}
	return res;
};
