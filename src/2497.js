var maxStarSum = function (vals, edges, k) {
	const n = vals.length;
	const a = [];
	const graph = new Array(n).fill(0).map(() => []);
	for (const [u, v] of edges) {
		graph[u].push(v);
		graph[v].push(u);
	}

	let max = -1000000000;

	for (let i = 0; i < n; i++) {
		a.length = 0;
		for (const j of graph[i]) {
			a.push(vals[j]);
		}
		a.sort((a, b) => b - a);
		let t = k;
		let s = vals[i];
		for (let j of a) {
			if (j > 0 && t--) {
				s += j;
			} else break;
		}
		max = Math.max(max, s);
	}
	return max;
};
console.log(
	maxStarSum(
		[1, 2, 3, 4, 10, -10, -20],
		[
			[0, 1],
			[1, 2],
			[1, 3],
			[3, 4],
			[3, 5],
			[3, 6],
		],
		2,
	),
	maxStarSum([-5], [], 0),
	maxStarSum(
		[1, -8, 0],
		[
			[1, 0],
			[2, 1],
		],
		1,
	),
);
