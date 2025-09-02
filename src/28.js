/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (needle.length === 0) return 0;
	const pi = new Array(needle.length).fill(0);
	for (let i = 1, j = 0; i < needle.length; i++) {
		while (j > 0 && needle[i] !== needle[j]) j = pi[j - 1];
		if (needle[i] === needle[j]) j++;
		pi[i] = j;
	}
	for (let i = 0, j = 0; i < haystack.length; i++) {
		while (j > 0 && haystack[i] !== needle[j]) j = pi[j - 1];
		if (haystack[i] === needle[j]) j++;
		if (j === needle.length) return i - j + 1;
	}
	return -1;
};
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("", ""));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("sadbutsad", "sad"));
