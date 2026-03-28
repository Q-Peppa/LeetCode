/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
const countSubarrays = (nums, k, m) => {
	if (k <= 0 || nums.length === 0) {
		return 0;
	}

	/** @type {Map<number, number>} */
	const freqDistinct = new Map();
	/** @type {Map<number, number>} */
	const freqSatisfied = new Map();

	let leftDistinct = 0;
	let leftSatisfied = 0;
	let distinct = 0;
	let satisfied = 0;
	let ans = 0;

	/**
	 * @param {Map<number, number>} map
	 * @param {number} key
	 * @return {number}
	 */
	const get = (map, key) => map.get(key) ?? 0;

	for (let right = 0; right < nums.length; right++) {
		const x = nums[right];

		const dOld = get(freqDistinct, x);
		if (dOld === 0) {
			distinct++;
		}
		freqDistinct.set(x, dOld + 1);

		const sOld = get(freqSatisfied, x);
		const sNow = sOld + 1;
		freqSatisfied.set(x, sNow);
		if (sOld < m && sNow >= m) {
			satisfied++;
		}

		while (distinct > k) {
			const y = nums[leftDistinct];
			const oldCount = get(freqDistinct, y);
			const newCount = oldCount - 1;
			if (newCount === 0) {
				freqDistinct.delete(y);
				distinct--;
			} else {
				freqDistinct.set(y, newCount);
			}
			leftDistinct++;
		}

		while (satisfied >= k) {
			const y = nums[leftSatisfied];
			const oldCount = get(freqSatisfied, y);
			const newCount = oldCount - 1;

			if (oldCount >= m && newCount < m) {
				satisfied--;
			}

			if (newCount === 0) {
				freqSatisfied.delete(y);
			} else {
				freqSatisfied.set(y, newCount);
			}
			leftSatisfied++;
		}

		const maxLeftBySatisfied = leftSatisfied - 1;
		if (maxLeftBySatisfied >= leftDistinct) {
			ans += maxLeftBySatisfied - leftDistinct + 1;
		}
	}

	return ans;
};

console.log(countSubarrays([1, 1, 2, 2], 2, 2), 'case1', 'ans = 1');
console.log(countSubarrays([1, 2, 1, 2, 1, 2], 2, 2), 'case2', 'ans = 6');
console.log(countSubarrays([1, 1, 1], 1, 2), 'case3', 'ans = 3');
console.log(countSubarrays([1, 2, 3], 2, 1), 'case4', 'ans = 2');

// Time: O(n)
// Space: O(u), u = number of distinct values in nums.
