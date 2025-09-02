/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
	const res = [];
	const used = {};
	for (let i = 0; i < nums.length; i++) {
		used[i] = 0;
	}
	nums.sort();
	const dfs = (available = []) => {
		if (available.length === nums.length) {
			res.push(available.slice());
			return;
		}
		for (let i = 0; i < nums.length; i++) {
			if (used[i] === 0) {
				if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) {
					continue;
				}
				used[i] = 1;
				available.push(nums[i]);
				dfs(available);
				used[i] = 0;
				available.pop();
			}
		}
	};
	dfs([]);
	return res;
};
