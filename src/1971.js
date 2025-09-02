class DepthPaths {
	marked = undefined;
	s = undefined;
	constructor(G, s) {
		this.marked = new Array(G.length).fill(false);
		this.s = s;
		this.G = G;
		this.dfs(G, s);
	}
	dfs(G, v) {
		this.marked[v] = true;
		for (const w of G[v]) {
			if (!this.marked[w]) {
				this.dfs(G, w);
			}
		}
	}
	pathTo(w) {
		return this.marked[w];
	}
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
	const map = Array.from({ length: n }, () => []);
	for (let [k, v] of edges) {
		console.log("k,v ", k, v);
		map[k].push(v);
		map[v].push(k);
	}
	console.log("g", map);
	const g = new DepthPaths(map, source);

	return g.pathTo(destination);
};

validPath(
	6,
	[
		[0, 1],
		[0, 2],
		[3, 5],
		[5, 4],
		[4, 3],
	],
	0,
	5,
);
