/**
 * @param {number[]} nums
 * @return {number}
 */
const sortableIntegers = (nums) => {
	const n = nums.length;
	const divisors = [];

	for (let d = 1; d * d <= n; d++) {
		if (n % d !== 0) {
			continue;
		}

		divisors.push(d);
		if (d * d !== n) {
			divisors.push(n / d);
		}
	}

	let ans = 0;

	for (let i = 0; i < divisors.length; i++) {
		const k = divisors[i];
		let ok = true;
		let prevMax = -Infinity;

		for (let start = 0; start < n; start += k) {
			let minValue = nums[start];
			let maxValue = nums[start];
			let descents = 0;

			for (let j = start; j < start + k; j++) {
				const value = nums[j];
				if (value < minValue) {
					minValue = value;
				}
				if (value > maxValue) {
					maxValue = value;
				}

				const nextIndex = j + 1 === start + k ? start : j + 1;
				if (value > nums[nextIndex]) {
					descents++;
					if (descents > 1) {
						ok = false;
						break;
					}
				}
			}

			if (!ok) {
				break;
			}

			if (prevMax > minValue) {
				ok = false;
				break;
			}

			prevMax = maxValue;
		}

		if (ok) {
			ans += k;
		}
	}

	return ans;
};

// Time: O(n * d(n)), where d(n) is the number of divisors of n.
// Space: O(d(n)).

console.log(sortableIntegers([3, 1, 2]), '1', 'ans is 3');
console.log(sortableIntegers([7, 6, 5]), '2', 'ans is 0');
console.log(sortableIntegers([5, 8]), '3', 'ans is 3');
