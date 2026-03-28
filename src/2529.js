/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = (nums) => {
	let [pos, neg] = [0, 0];

	for (const i of nums) {
		if (i > 0) {
			pos++;
		} else {
			neg++;
		}
	}
	return Math.max(pos, neg);
};
