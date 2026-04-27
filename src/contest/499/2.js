/**
 * @param {string} s
 * @return {string}
 */
const sortVowels = (s) => {
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
	const freq = {};
	const firstPos = {};
	const positions = [];

	for (let i = 0; i < s.length; i++) {
		if (vowels.has(s[i])) {
			positions.push(i);
			freq[s[i]] = (freq[s[i]] || 0) + 1;
			if (firstPos[s[i]] === undefined) {
				firstPos[s[i]] = i;
			}
		}
	}

	const sorted = Object.keys(freq).sort((a, b) => {
		if (freq[b] !== freq[a]) return freq[b] - freq[a];
		return firstPos[a] - firstPos[b];
	});

	const expanded = [];
	for (const ch of sorted) {
		for (let i = 0; i < freq[ch]; i++) {
			expanded.push(ch);
		}
	}

	const arr = s.split('');
	for (let i = 0; i < positions.length; i++) {
		arr[positions[i]] = expanded[i];
	}
	return arr.join('');
};
