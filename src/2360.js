class DC {
  marked = [];
  edgeTo = [];
  cycle = [];
  cycleList = [];
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
        this.cycle = [];
        for (let x = v; x !== w; x = this.edgeTo[x]) {
          this.cycle.push(x);
        }
        this.cycle.push(w);
        this.cycle.push(v);
        this.cycleList.push(this.cycle);
      }
    }
    this.onStack[v] = false;
  }

  hasCycle() {
    return this.cycle.length > 0;
  }

  noCycle() {
    return !this.hasCycle();
  }
}
/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
  const map = new Array(edges.length).fill(0).map(() => []);
  for (let i of edges) {
    if (edges[i] < 0) continue;
    map[i].push(edges[i]);
  }
  const dc = new DC(map);
  if (dc.noCycle()) return -1;
  let max = 0;
  for (const cy of dc.cycleList) {
    max = Math.max(max, cy.length);
  }
  return max;
};
