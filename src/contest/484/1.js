/**
 * @param {string} s
 * @return {number}
 */
const residuePrefixes = (s) => {
	let count = 0;
	const distinctSet = new Set();

	for (let i = 0; i < s.length; i++) {
		distinctSet.add(s[i]);
		if (distinctSet.size === (i + 1) % 3) {
			count++;
		}
	}

	return count;
};
