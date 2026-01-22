class DC {
  marked = [];
  edgeTo = [];
  cycle = false;
  onStack = [];
  /**
   * @param {number[]} G
   */
  constructor(G) {
    for (let i = 0; i < G.length; i++) {
      if (!this.marked[i]) this.dfs(G, i);
    }
  }
  /**
   * @param {number[]} G
   * @param {number} v
   */
  dfs(G, v) {
    this.onStack[v] = true;
    this.marked[v] = true;
    for (let w of G[v]) {
      if (this.hasCycle()) return;
      else if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.dfs(G, w);
      } else if (this.onStack[w]) {
        this.cycle = true;
      }
    }
    this.onStack[v] = false;
  }
  hasCycle() {
    return this.cycle;
  }
  noCycle() {
    return !this.hasCycle();
  }
}
class TopoSort {
  marked = [];
  pre = [];
  post = [];
  reversePost = [];
  constructor(G) {
    for (let i = 0; i < G.length; i++) {
      if (!this.marked[i]) this.dfs(G, i);
    }
  }
  dfs(G, v) {
    this.pre.push(v);
    this.marked[v] = true;
    for (let w of G[v]) {
      if (!this.marked[w]) this.dfs(G, w);
    }
    this.post.push(v);
    this.reversePost.unshift(v);
  }
}
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const map = new Array(numCourses).fill(0).map(() => []);
  for (const [v, w] of prerequisites) {
    map[v].push(w);
  }
  const dc = new DC(map);
  //  console.log(dc)
  if (dc.noCycle()) {
    const topo = new TopoSort(map);
    return topo.post;
  }
  return [];
};
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
  'ans is [0,1,2,3] or [0,2,1,3]',
);
console.log(findOrder(1, []), 'ans is [0]');
console.log(
  findOrder(2, [
    [1, 0],
    [0, 1],
  ]),
  'ans is []',
);
