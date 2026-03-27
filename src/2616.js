/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minimizeMax = (nums, p) => {
	nums.sort((a, b) => a - b);
	let left = 0;
	let right = 1e9 + 10;
	while (left < right) {
		const m = (left + right) >> 1;
		let rest = p;
		for (let i = 1; i < nums.length && rest; ) {
			if (nums[i] - nums[i - 1] <= m) {
				rest--;
				i += 2;
			} else {
				i++;
			}
		}
		if (rest <= 0) right = m;
		else left = m + 1;
	}
	return left;
};
