class Cycle {
  marked = [];
  hasCycle = false;
  constructor(G) {
    for (let i = 0; i < G.length; i++) {
      if (!this.marked[i]) this.dfs(G, i, i);
    }
  }
  dfs(G, v, u) {
    this.marked[v] = true;
    for (const w of G[v]) {
      if (!this.marked[w]) {
        this.dfs(G, w, v);
      } else if (w !== u) {
        this.hasCycle = true;
      }
    }
  }
}
class GraphProperties {
  constructor(G) {
    this.G = G;
  }
  girth() {
    let girth = Infinity;
    for (let i = 0; i < this.G.length; i++) {
      const dc = new Cycle(this.G);
      if (dc.hasCycle) {
        girth = Math.min(girth, dc.cycle.length);
      }
    }
    return girth;
  }
}
