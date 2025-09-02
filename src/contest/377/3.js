function conver(char) {
	return char.charCodeAt(0) - "a".charCodeAt(0);
}
/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
	const max = Number.MAX_SAFE_INTEGER;
	const graph = new Array(26).fill(0).map(() => new Array(26).fill(max));
	for (let i = 0; i < 26; i++) {
		graph[i][i] = 0;
	}
	for (let i = 0; i < original.length; i++) {
		const h = conver(original[i]);
		const v = conver(changed[i]);
		if (graph[h][v] === max) {
			graph[h][v] = cost[i];
		} else {
			graph[h][v] = Math.min(graph[h][v], cost[i]);
		}
	}
	for (let k = 0; k < 26; k++) {
		for (let i = 0; i < 26; i++) {
			for (let j = 0; j < 26; j++) {
				graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
			}
		}
	}
	let ans = 0;
	for (let i = 0; i < source.length; i++) {
		if (source[i] === target[i]) continue;

		ans += graph[conver(source[i])][conver(target[i])];
	}
	return ans >= max ? -1 : ans;
};

console.log(
	minimumCost(
		"abcd",
		"acbe",
		["a", "b", "c", "c", "e", "d"],
		["b", "c", "b", "e", "b", "e"],
		[2, 5, 5, 1, 2, 20],
	),
);
