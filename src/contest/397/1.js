/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const findPermutationDifference = (s, t) => {
	let res = 0;
	for (let i = 0; i < s.length; i++) {
		const ele = s[i];
		const index = t.indexOf(ele);
		res += Math.abs(index - i);
	}
	return res;
};
