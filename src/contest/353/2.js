/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
	let dp = new Array(nums.length).fill(-1);
	const canJump = (i, j) => {
		const temp = nums[j] - nums[i];
		return temp <= target && temp >= -target && dp[j] !== -1;
	};
	dp[0] = 0;
	for (let i = 1; i < nums.length; i++) {
		const temp = [];
		for (let j = 0; j < i; j++) {
			if (canJump(i, j)) {
				if (dp[i] === -1) {
					temp.push(dp[j] + 1);
				}
			}
		}
		dp[i] = temp.length > 0 ? Math.max(...temp) : -1;
	}
	console.log(dp);
	return dp.at(-1);
};
// ：nums = [1,3,6,4,1,2], target = 2
console.log(maximumJumps([1, 3, 6, 4, 1, 2], 2));
// nums = [1,3,6,4,1,2], target = 3
console.log(maximumJumps([1, 3, 6, 4, 1, 2], 3));
// nums = [1,3,6,4,1,2], target = 0
console.log(maximumJumps([1, 3, 6, 4, 1, 2], 0));

// [[0,2,1,3]
// 1

console.log(maximumJumps([0, 2, 1, 3], 1));
