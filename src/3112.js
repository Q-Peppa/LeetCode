/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} disappear
 * @return {number[]}
 */
var minimumTime = function (n, edges, disappear) {
	const adj = Array.from({ length: n }, () => []);
	for (const [u, v, length] of edges) {
		adj[u].push([v, length]);
		adj[v].push([u, length]);
	}
	const pq = new MinPriorityQueue();
	pq.enqueue([0, 0], 0);
	const answer = Array(n).fill(-1);
	answer[0] = 0;
	while (!pq.isEmpty()) {
		const [t, u] = pq.dequeue().element;
		if (t !== answer[u]) {
			continue;
		}
		for (const [v, length] of adj[u]) {
			if (
				t + length < disappear[v] &&
				(answer[v] === -1 || t + length < answer[v])
			) {
				pq.enqueue([t + length, v], t + length);
				answer[v] = t + length;
			}
		}
	}
	return answer;
};
