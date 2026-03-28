function bitCount(n) {
	let res = 0;
	while (n) {
		n &= n - 1;
		res++;
	}
	return res;
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = (nums, k) => {
	const ori = nums.reduce((pre, cur) => pre ^ cur, 0);
	if (ori === k) return 0;
	return bitCount(ori ^ k);
};
