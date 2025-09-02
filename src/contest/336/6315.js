/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
	const vowels = ["a", "e", "i", "o", "u"];
	let ans = 0;
	for (let i = left; i <= right; i++) {
		let word = words[i];
		let start = word[0];
		let end = word[word.length - 1];
		if (vowels.includes(start) && vowels.includes(end)) {
			ans++;
		}
	}
	return ans;
};
