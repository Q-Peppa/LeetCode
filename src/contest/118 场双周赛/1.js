/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
	const res = [];
	let index = 0;
	for (const e of words) {
		if (e.includes(x)) {
			res.push(index);
		}
		index++;
	}
	return res;
};
