/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
const areSimilar = (mat, k) => {
	const m = mat[0].length;
	const shift = ((k % m) + m) % m;

	if (shift === 0) return true;

	for (const row of mat) {
		for (let i = 0; i < m; i++) {
			if (row[i] !== row[(i + shift) % m]) return false;
		}
	}

	return true;
};
