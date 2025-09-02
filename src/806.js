/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = function (widths, s) {
	let line = 1;
	let width = 0;
	for (let i = 0; i < s.length; i++) {
		const index = s.charCodeAt(i) - 97;
		const w = widths[index];
		if (width + w > 100) {
			line++;
			width = w;
		} else {
			width += w;
		}
	}
	return [line, width];
};
