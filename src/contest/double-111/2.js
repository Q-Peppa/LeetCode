/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
	let i = 0,
		j = 0;
	while (i < str1.length && j < str2.length) {
		const [s1, s2] = [str1.charCodeAt(i), str2.charCodeAt(j)];
		if (s1 === s2 || s1 + 1 === s2 || s1 - 25 === s2) {
			i++;
			j++;
		} else {
			i++;
		}
	}
	return j === str2.length;
};

console.log(canMakeSubsequence("abc", "ad"));
// zc ad
console.log(canMakeSubsequence("zc", "ad"));
// ab d
console.log(canMakeSubsequence("ab", "d"));
// fp , p

console.log(canMakeSubsequence("fp", "p"));
