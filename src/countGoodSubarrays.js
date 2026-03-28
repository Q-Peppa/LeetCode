/**
 * @param {number[]} nums
 * @return {number}
 */
const countGoodSubarrays = (nums) => {
	const n = nums.length;
	const prev = new Array(n).fill(-1);
	const next = new Array(n).fill(n);

	// monotonic decreasing stack for prev[i]: nearest index to the left where nums[j] >= nums[i]
	for (let i = 0, stack = []; i < n; i++) {
		while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
			stack.pop();
		}
		prev[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
		stack.push(i);
	}

	// monotonic decreasing stack for next[i]: nearest index to the right where nums[j] > nums[i]
	for (let i = n - 1, stack = []; i >= 0; i--) {
		while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
			stack.pop();
		}
		next[i] = stack.length === 0 ? n : stack[stack.length - 1];
		stack.push(i);
	}

	let ans = BigInt(0);
	for (let i = 0; i < n; i++) {
		// left choices: (prev_greater[i] + 1) to i  → i - prev[i] positions
		// right choices: i to (next_greater[i] - 1) → next[i] - i positions
		ans += BigInt(i - prev[i]) * BigInt(next[i] - i);
	}

	return ans;
};

console.log(countGoodSubarrays([1, 1, 1]), 6, 'all subarrays good');
console.log(countGoodSubarrays([1, 0, 0]), 6, '[1,0,0]');
console.log(countGoodSubarrays([1, 0, 1]), 7, '[1,0,1]');
console.log(countGoodSubarrays([1, 2, 3]), 3, 'only single-element subarrays');
console.log(countGoodSubarrays([1, 2, 1]), 6, '[1,2,1]');
console.log(countGoodSubarrays([3, 1]), 2, '[3,1]: singles only');
console.log(countGoodSubarrays([1]), 1, 'single element');

// Time: O(n), Space: O(n)
