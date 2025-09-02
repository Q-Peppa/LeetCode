/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
	//   // 背包 总容量为n , 分为 3 个包, 每个包的容量不超过limit, 返回总方案
	let ans = 0;
	const dfs = (n, limit, cur) => {
		if (n === 0) {
			ans++;
			return;
		}
		if (cur > limit) return;
		dfs(n - cur, limit, cur);
		dfs(n, limit, cur + 1);
	};
	dfs(n, limit, 1);
};

console.log("distributeCandies", distributeCandies(10 ** 5, 10 ** 5));
console.log("distributeCandies", distributeCandies(5, 2));
console.log("distributeCandies", distributeCandies(3, 3));
