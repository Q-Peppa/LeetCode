/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
	const map = new Map();
	for (let i = 0; i < pattern.length; i++) {
		if (!map.has(pattern[i])) {
			map.set(pattern[i], 1);
		} else {
			let c = map.get(pattern[i]);
			map.set(pattern[i], c + 1);
		}
	}
	// console.log(Array.from(map.values()));
	const res = [];
	for (let i = 0; i < words.length; i++) {
		const map1 = new Map();
		for (let j = 0; j < words[i].length; j++) {
			if (!map1.has(words[i][j])) {
				map1.set(words[i][j], 1);
			} else {
				let c = map1.get(words[i][j]);
				map1.set(words[i][j], c + 1);
			}
		}
		if (
			Array.from(map1.values()).join("") === Array.from(map.values()).join("")
		) {
			res.push(words[i]);
		}
	}
	return res;
};

console.log(
	findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"),
);
