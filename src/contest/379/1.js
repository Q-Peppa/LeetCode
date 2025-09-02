/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
	let max = 0,
		ans = 0;
	for (const [hei, wid] of dimensions) {
		const Diagonal = Math.sqrt(hei * hei + wid * wid);
		if (Diagonal > max || (Diagonal === max && hei * wid > ans)) {
			max = Diagonal;
			ans = hei * wid;
		}
	}
	return ans;
};
