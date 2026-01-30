import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function (n, edges) {
  /** @type {number[][][]} */
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, 2 * w]);
  }

  /** @type {number[]} */
  const dist = new Array(n).fill(Infinity);
  dist[0] = 0;

  const pq = new MinPriorityQueue();
  pq.enqueue(0, 0);

  while (!pq.isEmpty()) {
    const result = pq.dequeue();
    const u =
      typeof result === 'object' && 'element' in result
        ? result.element
        : result;

    if (u === n - 1) return dist[u];

    for (const [v, w] of graph[u]) {
      const newDist = dist[u] + w;
      if (newDist < dist[v]) {
        dist[v] = newDist;
        pq.enqueue(v, newDist);
      }
    }
  }

  return dist[n - 1] === Infinity ? -1 : dist[n - 1];
};

console.log(
  minCost(4, [
    [0, 1, 3],
    [3, 1, 1],
    [2, 3, 4],
    [0, 2, 2],
  ]),
  'expected: 5',
);
