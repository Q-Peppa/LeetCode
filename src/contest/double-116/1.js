/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
	const mod = 10 ** 9 + 7;
	const query = (i, j) => {
		const slice = nums.slice(i, j + 1);
		const size = new Set(slice).size;
		return size ** 2;
	};
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			res += query(i, j);
			res %= mod;
		}
	}
	return res % mod;
};
