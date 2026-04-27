/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} sources
 * @return {number[][]}
 */
const colorGrid = (n, m, sources) => {
	const dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	const grid = Array.from({ length: n }, () => new Int32Array(m));
	const dist = Array.from({ length: n }, () => new Int32Array(m).fill(-1));
	const queue = [];

	for (const [r, c, color] of sources) {
		grid[r][c] = color;
		dist[r][c] = 0;
		queue.push([r, c]);
	}

	let idx = 0;
	while (idx < queue.length) {
		const [r, c] = queue[idx++];
		const curDist = dist[r][c];
		const curColor = grid[r][c];

		for (const [dr, dc] of dirs) {
			const nr = r + dr;
			const nc = c + dc;
			if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;

			if (dist[nr][nc] === -1) {
				dist[nr][nc] = curDist + 1;
				grid[nr][nc] = curColor;
				queue.push([nr, nc]);
			} else if (dist[nr][nc] === curDist + 1) {
				if (curColor > grid[nr][nc]) {
					grid[nr][nc] = curColor;
				}
			}
		}
	}

	return grid;
};

console.log(
	colorGrid(3, 3, [
		[0, 0, 1],
		[2, 2, 2],
	]),
	'1',
	'ans is [[1,1,2],[1,2,2],[2,2,2]]',
);
console.log(
	colorGrid(3, 3, [
		[0, 1, 3],
		[1, 1, 5],
	]),
	'2',
	'ans is [[3,3,3],[5,5,5],[5,5,5]]',
);
console.log(colorGrid(2, 2, [[1, 1, 5]]), '3', 'ans is [[5,5],[5,5]]');

// Complexity: O(n*m) time, O(n*m) space
