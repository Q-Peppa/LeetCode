/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
	let m = grid.length;
	let n = grid[0].length;
	let k = queries.length;
	const res = [];
	const vis = new Array(m).fill(0).map(() => new Array(n).fill(0));
	const dir = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	for (let i = 0; i < k; i++) {
		if (grid[0][0] >= queries[i]) {
			res.push(0);
		} else {
			let count = 0;
			let head = [[grid[0][0], 0, 0]];
			vis[0][0] = 1;
			while (head.length) {
				let next = [];
				for (let [val, x, y] of head) {
					if (val >= queries[i]) {
						count++;
					}
					for (let [dx, dy] of dir) {
						let nx = x + dx;
						let ny = y + dy;
						if (nx >= 0 && nx < m && ny >= 0 && ny < n && !vis[nx][ny]) {
							vis[nx][ny] = 1;
							next.push([grid[nx][ny], nx, ny]);
						}
					}
				}
				head = next;
			}
			res.push(count);
		}
	}
	return res;
};

console.log(
	maxPoints(
		[
			[1, 2, 3],
			[2, 5, 7],
			[3, 5, 1],
		],
		[5, 6, 2],
	),
);
