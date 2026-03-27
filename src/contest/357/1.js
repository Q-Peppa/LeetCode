/**
 * @param {string} s
 * @return {string}
 */
var finalString = (s) => {
	let ans = '';
	for (const c of s) {
		if (c !== 'i') {
			abs += c;
		} else {
			// reverse
			ans = ans.split('').reverse().join('');
		}
	}
	return ans;
};
