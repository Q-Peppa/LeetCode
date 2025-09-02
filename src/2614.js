/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
	const res = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i === j || i + j === nums.length - 1) {
				res.push(nums[i][j]);
			}
		}
	}
	res.sort((a, b) => b - a);
	const max = res[0];
	const prime = new Array(max + 1).fill(1);
	prime[0] = 0;
	prime[1] = 0;
	for (let i = 2; i < prime.length; i++) {
		if (prime[i]) {
			for (let j = i * i; j < prime.length; j += i) {
				prime[j] = 0;
			}
		}
	}
	for (let v of res) {
		if (prime[v]) {
			return v;
		}
	}
	return 0;
};
