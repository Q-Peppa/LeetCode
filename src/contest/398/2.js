function deal(nums) {
	if (nums.length <= 1) return [true];
	const pair = []; // 存储相邻两个数字;
	for (let i = 0; i < nums.length - 1; i++) {
		pair.push([nums[i], nums[i + 1]]);
	}
	return pair.map((e) => e[0] % 2 !== e[1] % 2);
}
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
	const res = deal(nums);
	if (res.length === 1) {
		return queries.map((e) => true);
	}
	// 设计一个结构 , 可以快速查询bool[] res 的 a-b区间是否都是true
	const prefix = new Array(res.length + 1).fill(0);
	for (let i = 0; i < res.length; i++) {
		prefix[i + 1] = prefix[i] + res[i];
	}
	const ans = [];
	// console.log(prefix);
	for (let i = 0; i < queries.length; i++) {
		const [a, b] = queries[i];
		ans.push(prefix[b] - prefix[a] === b - a);
	}
	// console.log(ans);
	return ans;
};

isArraySpecial(
	[4, 3, 1, 6],
	[
		[0, 2],
		[2, 3],
	],
);
