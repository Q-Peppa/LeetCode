/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const vowelStrings = (words, left, right) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let ans = 0;
	for (let i = left; i <= right; i++) {
		const word = words[i];
		const start = word[0];
		const end = word[word.length - 1];
		if (vowels.includes(start) && vowels.includes(end)) {
			ans++;
		}
	}
	return ans;
};
