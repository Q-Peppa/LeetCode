/**
 * @param {number[]} nums
 * @return {number}
 */
const countGoodSubarrays = (nums) => {
	const n = nums.length;
	const left = new Array(n).fill(-1);
	const right = new Array(n).fill(n);

	for (let i = 0, stack = [-1]; i < n; i++) {
		while (
			stack.length > 1 &&
			(nums[i] | nums[stack[stack.length - 1]]) === nums[i]
		) {
			stack.pop();
		}

		left[i] = stack[stack.length - 1];
		stack.push(i);
	}

	for (let i = n - 1, stack = [n]; i >= 0; i--) {
		while (
			stack.length > 1 &&
			(nums[i] | nums[stack[stack.length - 1]]) === nums[i] &&
			nums[i] !== nums[stack[stack.length - 1]]
		) {
			stack.pop();
		}

		right[i] = stack[stack.length - 1];
		stack.push(i);
	}

	let ans = 0;
	for (let i = 0; i < n; i++) {
		ans += (i - left[i]) * (right[i] - i);
	}

	return ans;
};

console.log(countGoodSubarrays([1, 2]), 'case1', 'ans = 2');
console.log(countGoodSubarrays([1, 3]), 'case2', 'ans = 3');
console.log(countGoodSubarrays([1, 2, 4]), 'case3', 'ans = 3');
console.log(countGoodSubarrays([3, 1, 2]), 'case4', 'ans = 5');
console.log(countGoodSubarrays([0, 0, 0]), 'case5', 'ans = 6');
console.log(countGoodSubarrays([1000000000, 73741823]), 'case6', 'ans = 2');

// Time: O(n)
// Space: O(n)
