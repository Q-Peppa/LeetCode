/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const minimumOperationsToMakeKPeriodic = (word, k) => {
	const n = word.length;
	const dict = {};
	for (let i = 0; i < n; i += k) {
		const seq = word.slice(i, i + k);
		if (dict[seq] === undefined) {
			dict[seq] = 1;
		} else {
			dict[seq]++;
		}
	}
	const v = Object.values(dict);
	return _.sum(v) - _.max(v);
};
