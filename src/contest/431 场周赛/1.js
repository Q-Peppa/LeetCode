let gcd = (a, b) => {
	return b === 0 ? a : gcd(b, a % b);
};
let lcm = (a, b) => {
	return (a * b) / gcd(a, b);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		let pre = nums[i];
		let g, l;
		let prod = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			prod *= nums[j];
			g = gcd(g || pre, nums[j]);
			l = lcm(l || pre, nums[j]);
			pre = nums[j];
			if (prod === g * l) {
				console.log(i, j, prod);
				res = Math.max(res, j - i + 1);
			}
		}
	}
	return res;
};
