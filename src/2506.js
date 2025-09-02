/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
	const n = words.length;
	const w = [];
	for (let i = 0; i < n; i++) {
		let temp = 0;
		for (let j = 0; j < words[i].length; j++) {
			temp |= 1 << (words[i][j].charCodeAt(0) - 97);
		}
		w.push(temp);
	}
	let count = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (w[i] === w[j]) count++;
		}
	}
	return count;
};
console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]));
console.log(similarPairs(["aabb", "ab", "ba"]));
console.log(similarPairs(["nba", "cba", "dba"]));
