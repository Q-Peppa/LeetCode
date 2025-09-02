/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
	const check = (str1, s, e) => {
		for (; s < e; s++, e--) {
			if (str1[s] !== str1[e]) {
				return false;
			}
		}
		return true;
	};
	const check2 = (str1, str2) => {
		let i = 0;
		let j = str2.length - 1;
		while (i < j && str1[i] === str2[j]) {
			i++;
			j--;
		}
		return check(str1, i, j) || check(str2, i, j);
	};
	return check2(a, b) || check2(b, a);
};

console.log(
	checkPalindromeFormation("x", "y"),
	checkPalindromeFormation("abdef", "fecab"),
	checkPalindromeFormation("ulacfd", "jizalu"),
	checkPalindromeFormation("pvhmupgqeltozftlmfjjde", "yjgpzbezspnnpszebzmhvp"), // TRUE
	checkPalindromeFormation(
		"aejbaalflrmkswrydwdkdwdyrwskmrlfqizjezd",
		"uvebspqckawkhbrtlqwblfwzfptanhiglaabjea",
	),
);
