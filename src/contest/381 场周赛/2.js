/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function (n, x, y) {
	const g = new Array(n + 1).fill(0);
	for (let i = 0; i < g.length; i++) {
		g[i] = new Array(n + 1).fill(0);
	}
	for (let i = 1; i < n; i++) {
		g[i][i + 1] = 1;
		g[i + 1][i] = 1;
	}
	if (x !== y) {
		g[x][y] = 1;
		g[y][x] = 1;
	}
	const ans = new Array(n + 1).fill(0);
	// dist[i][j] 表示 i 到 j 的最短距离
	let dist = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
	for (let i = 1; i < n + 1; i++) {
		for (let j = 1; j < n + 1; j++) {
			dist[i][j] = g[i][j] ? 1 : 1e9;
		}
	}
	for (let k = 1; k < n + 1; k++) {
		for (let i = 1; i < n + 1; i++) {
			for (let j = 1; j < n + 1; j++) {
				dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
			}
		}
	}
	// console.log(g);
	for (let i = 1; i < n + 1; i++) {
		let temp = new Array(n + 1).fill(0);
		for (let j = i + 1; j < n + 1; j++) {
			temp[dist[i][j]]++;
		}
		// console.log(temp);
		for (let j = 1; j < n + 1; j++) {
			ans[j] += temp[j] * 2;
		}
	}
	return ans.slice(1);
};

export default countOfPairs;
console.time("1000 times");
console.log(
	countOfPairs(10 ** 3, 1, 5), // [10,10,0,0,0]
	// countOfPairs(10 ** 5, 1, 5), // [10,10,0,0,0]
);
console.timeEnd("1000 times");
