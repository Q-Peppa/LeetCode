/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
	let pre = 1,
		cur = 1;
	for (let i = 1; i <= n; i++) {
		const temp = pre + cur;
		pre = cur;
		cur = temp;
	}
	return pre;
};
