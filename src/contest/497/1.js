/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDegrees = (matrix) => {
	if (!matrix || matrix.length === 0) {
		return [];
	}

	const n = matrix.length;
	const ans = new Array(n).fill(0);

	for (let i = 0; i < n; i += 1) {
		let degree = 0;
		const row = matrix[i];
		for (let j = 0; j < row.length; j += 1) {
			degree += row[j];
		}
		ans[i] = degree;
	}

	return ans;
};

console.log(
	findDegrees([
		[0, 1, 0],
		[1, 0, 1],
		[0, 1, 0],
	]),
	'expect [1, 2, 1]',
);
