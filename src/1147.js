/**
 * @param {string} text
 * @return {number}
 */
const longestDecomposition = (text) => {
	let res = 0;
	/**
	 *
	 * @param {number} start
	 * @param {number} end
	 * @param {string} endString
	 * @returns
	 */
	const dfs = (start, end, endString) => {
		if (start > end) {
			return;
		}
		for (let i = 0; i < endString.length; i++) {
			const left = endString.slice(0, i + 1);
			const right = endString.slice(endString.length - i - 1);
			if (left === right) {
				res += left === endString ? 1 : 2;
				return dfs(
					start + i + 1,
					end - i - 1,
					endString.slice(i + 1, endString.length - i - 1),
				);
				// return;
			}
		}
	};

	dfs(0, text.length - 1, text);
	return res;
};
