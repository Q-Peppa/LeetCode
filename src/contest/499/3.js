const minOperations = (nums) => {
	let cost = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			cost += nums[i] - nums[i + 1];
		}
	}
	return cost;
};
