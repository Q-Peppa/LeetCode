/**
 * @param {number[]} mountain
 * @return {number[]}
 */
const findPeaks = (mountain) => {
	// if (mountain.length <= 2) return [];
	const res = [];
	for (let i = 1; i < mountain.length - 1; i++) {
		if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
			res.push(i);
		}
	}
	return res;
};
