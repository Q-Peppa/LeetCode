/**
 * @param {string[]} words
 * @param {string} x
 * @return {number[]}
 */
const findWordsContaining = (words, x) => {
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
