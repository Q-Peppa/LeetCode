/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
var processQueries = (c, connections, queries) => {
  const uf = new UnionFind(c + 1);
  const heap = {}; // root -> PriorityQueue
  const online = Array(c + 1).fill(true);
  for (let i = 1; i <= c; i++) {
    heap[i] = new PriorityQueue((a, b) => a - b);
    heap[i].push(i);
  }

  function mergeHeap(rootA, rootB) {
    // 将 B 的堆全部倒进 A
    while (!heap[rootB].isEmpty()) {
      heap[rootA].push(heap[rootB].pop());
    }
    delete heap[rootB];
  }

  connections.some(([x, y]) => {
    let rx = uf.find(x);
    let ry = uf.find(y);
    if (rx !== ry) {
      let newRoot = uf.union(rx, ry);
      let oldRoot = newRoot === rx ? ry : rx;
      mergeHeap(newRoot, oldRoot);
    }
  });

  const res = [];
  queries.some(([query, nodeId]) => {
    if (query === 1) {
      if (online[nodeId]) {
        res.push(nodeId);
      } else {
        let r = uf.find(nodeId);
        while (!heap[r].isEmpty() && !online[heap[r].front()]) {
          heap[r].pop();
        }
        if (heap[r].isEmpty()) {
          res.push(-1);
        } else {
          res.push(heap[r].front());
        }
      }
    } else {
      online[nodeId] = false;
    }
  });

  return res;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    let rx = this.find(x);
    let ry = this.find(y);
    if (rx === ry) return rx;
    if (this.rank[rx] < this.rank[ry]) {
      this.parent[rx] = ry;
      return ry;
    } else if (this.rank[rx] > this.rank[ry]) {
      this.parent[ry] = rx;
      return rx;
    } else {
      this.parent[ry] = rx;
      this.rank[rx]++;
      return rx;
    }
  }
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
