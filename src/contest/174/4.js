/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} start
 * @param {string} target
 * @return {number[]}
 */
var minimumFlips = function (n, edges, start, target) {
  /** @typedef {[number, number]} Neighbor */
  /** @type {Neighbor[][]} */
  const adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    adj[u].push([v, i]);
    adj[v].push([u, i]);
  }

  const diff = new Array(n);
  for (let i = 0; i < n; i++) {
    diff[i] = (start.charCodeAt(i) ^ target.charCodeAt(i)) & 1;
  }

  const parent = new Array(n).fill(-1);
  const parentEdge = new Array(n).fill(-1);
  const order = [];
  const stack = [0];

  parent[0] = 0;
  while (stack.length) {
    const node = stack.pop();
    order.push(node);
    for (const [next, idx] of adj[node]) {
      if (next === parent[node]) continue;
      parent[next] = node;
      parentEdge[next] = idx;
      stack.push(next);
    }
  }

  const selectToParent = new Array(n).fill(0);
  const chosen = [];
  let possible = true;

  for (let i = order.length - 1; i >= 0; i--) {
    const node = order[i];
    let childParity = 0;
    for (const [next] of adj[node]) {
      if (next === parent[node]) continue;
      childParity ^= selectToParent[next];
    }

    const needParent = diff[node] ^ childParity;
    selectToParent[node] = needParent;

    if (node === 0) {
      if (needParent !== 0) {
        possible = false;
        break;
      }
    } else if (needParent === 1) {
      chosen.push(parentEdge[node]);
    }
  }

  if (!possible) return [-1];
  chosen.sort((a, b) => a - b);
  return chosen;
};
