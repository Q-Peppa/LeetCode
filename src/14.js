/**
 * @param {string[]} s
 * @return {string}
 */
const longestCommonPrefix = (s) => {
	const str = `&${s.join('&')}`;
	let maxStr = '';
	let regStr = '&';
	for (let i = 0; i < s[0].length; i++) {
		regStr += s[0][i];
		const reg = new RegExp(regStr, 'g');
		const match = str.match(reg);
		if (match.length === s.length) {
			maxStr = regStr;
		}
	}
	return maxStr.substring(1);
};
