const subsetXORSum = function (nums) {
	const ret = [0];
	nums.forEach((i) => ret.forEach((s) => ret.push(i ^ s)));
	console.log(ret);
	return ret.reduce((r, i) => r + i, 0);
};

console.log(subsetXORSum([5, 1, 6]));
