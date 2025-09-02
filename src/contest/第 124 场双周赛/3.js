/**
 * @param {number[]} nums
 * @return {number}
 */

var maxOperations = function (nums) {
	const head = nums[0] + nums[1];
	const tail = nums[nums.length - 1] + nums[nums.length - 2];
	const headAddTail = nums[0] + nums[nums.length - 1];

	let dp = new Array(nums.length)
		.fill(1)
		.map(() => new Array(nums.length).fill(-1));
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			dp[i][j] = -1;
		}
	}
	let query = (val, i, j) => {
		if (i >= j) return 0;
		if (dp[i][j] !== -1) return dp[i][j];
		let res = 0;
		if (nums[i] + nums[i + 1] === val) {
			res = Math.max(res, 1 + query(val, i + 2, j));
		}
		if (nums[j] + nums[j - 1] === val) {
			res = Math.max(res, 1 + query(val, i, j - 2));
		}
		if (nums[i] + nums[j] === val) {
			res = Math.max(res, 1 + query(val, i + 1, j - 1));
		}
		dp[i][j] = res;
		return res;
	};

	let res = 0;
	res = Math.max(res, query(head, 0, nums.length - 1));
	res = Math.max(res, query(tail, 0, nums.length - 1));
	res = Math.max(res, query(headAddTail, 0, nums.length - 1));
	return res;
};
