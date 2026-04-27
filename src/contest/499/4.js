/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxAlternatingSum = (nums, k) => {
	const n = nums.length;

	/**
	 * @type {number}
	 */
	let maxVal = 0;
	for (let i = 0; i < n; i++) {
		if (nums[i] > maxVal) maxVal = nums[i];
	}

	const M = maxVal + 1;
	const treeLen = M + 1;

	// BIT arrays: bitUP stores dpUP at reversed index (M - val)
	// bitDOWN stores dpDOWN at normal index (val)
	const bitUP = new Float64Array(treeLen);
	const bitDOWN = new Float64Array(treeLen);

	const dpUP = new Float64Array(n);
	const dpDOWN = new Float64Array(n);
	let ans = 0;

	for (let i = 0; i < n; i++) {
		// When j = i - k becomes available, update BIT
		const j = i - k;
		if (j >= 0) {
			const v = nums[j];

			// Update bitUP with dpUP[j] at reversed index
			let idx = M - v;
			const deltaUp = dpUP[j];
			for (; idx < treeLen; idx += idx & -idx) {
				if (deltaUp > bitUP[idx]) bitUP[idx] = deltaUp;
			}

			// Update bitDOWN with dpDOWN[j] at normal index
			idx = v;
			const deltaDown = dpDOWN[j];
			for (; idx < treeLen; idx += idx & -idx) {
				if (deltaDown > bitDOWN[idx]) bitDOWN[idx] = deltaDown;
			}
		}

		const v = nums[i];

		// Query max dpDOWN where nums[j] < v (prefix [1, v-1])
		let maxSumDOWN = 0;
		let qIdx = v - 1;
		for (; qIdx > 0; qIdx -= qIdx & -qIdx) {
			if (bitDOWN[qIdx] > maxSumDOWN) maxSumDOWN = bitDOWN[qIdx];
		}
		dpUP[i] = v + maxSumDOWN;

		// Query max dpUP where nums[j] > v (reversed prefix [1, M-v-1])
		let maxSumUP = 0;
		qIdx = M - v - 1;
		for (; qIdx > 0; qIdx -= qIdx & -qIdx) {
			if (bitUP[qIdx] > maxSumUP) maxSumUP = bitUP[qIdx];
		}
		dpDOWN[i] = v + maxSumUP;

		if (dpUP[i] > ans) ans = dpUP[i];
		if (dpDOWN[i] > ans) ans = dpDOWN[i];
	}

	return ans;
};

// Test cases
console.log(maxAlternatingSum([1], 1), 1, 'single element');
console.log(maxAlternatingSum([2, 2, 2], 1), 2, 'all equal, pick one');
console.log(maxAlternatingSum([5, 3, 4, 2, 1], 2), 9, 'pick 5,4 (idx 0,2)');
console.log(maxAlternatingSum([1, 5, 3, 7, 2], 2), 12, 'pick 5,7 (idx 1,3)');
console.log(maxAlternatingSum([10, 1, 10, 1, 10], 2), 11, 'pick 10,1 or 1,10');
console.log(
	maxAlternatingSum([3, 1, 4, 1, 5, 9, 2, 6], 1),
	26,
	'3>1<4>1<9>2<6',
);
console.log(
	maxAlternatingSum([1, 2, 3, 4, 5], 1),
	9,
	'1<2<3<4<5 strictly increasing',
);
