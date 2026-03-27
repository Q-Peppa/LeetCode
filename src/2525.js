/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = (length, width, height, mass) => {
	const total = length * width * height;
	const max = 10 ** 9;
	const isBulky =
		length >= 10 ** 4 || width >= 10 ** 4 || height >= 10 ** 4 || total >= max;
	const isHeavy = mass >= 100;
	if (isBulky && isHeavy) return 'Both';
	if (!isBulky && !isHeavy) return 'Neither';
	return isBulky ? 'Bulky' : 'Heavy';
};
