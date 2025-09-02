/**
 * @param {number} area
 * @return {number[]}
 */
/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function (area) {
	const max = ~~Math.sqrt(area);

	for (let i = max; i > 0; --i) {
		if (area % i === 0) {
			return [area / i, i];
		}
	}
};
