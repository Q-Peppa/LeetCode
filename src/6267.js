class Edge {
  u;
  v;
  next;
  constructor(u, v, next) {
    this.u = u;
    this.v = v;
    this.next = next;
  }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var isPossible = function (n, edges) {
  const maxn = 100005;
  const ans = [];
  const E = new Array(maxn).fill(0);
  let H = new Array(maxn).fill(-1),
    cntE = 0,
    du = new Array(maxn).fill(0),
    vis = new Array(maxn).fill(false),
    m = 0;
  const addEdge = (u, v) => {
    E[cntE] = new Edge(u, v, H[u]);
    H[u] = cntE++;
    E[cntE] = new Edge(v, u, H[v]);
    H[v] = cntE++;
  };
  const dfs = (u) => {
    for (let e = H[u]; ~e; ) {
      if (vis[e / 2]) e = E[e].next;
      else {
        vis[e / 2] = true;
        let t = e;
        e = E[e].next;
        dfs(E[t].v);
        ans.push(t);
      }
    }
  };
  const work = () => {
    let last = -1;
    for (let i = 1; i <= n; i++) {
      if (du[i] % 2) {
        if (last === -1) last = i;
        else {
          addEdge(last, i);
          last = -1;
        }
      }
    }
    if ((cntE / 2) % 2) addEdge(1, 1);
    dfs(1);
  };
  for (let [u, v] of edges) {
    addEdge(u, v);
    du[u]++;
    du[v]++;
  }
  work();
  for (let i = 0; i < ans.length; i++) {
    if (i & 1) {
      console.log(E[ans[i]].v, E[ans[i]].u);
    } else {
      console.log(E[ans[i]].u, E[ans[i]].v);
    }
  }
};

// console.log(
//   isPossible(5, [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 2],
//     [1, 4],
//     [2, 5],
//   ]),
// );
console.log(
  isPossible(4, [
    [1, 2],
    [3, 4],
  ]),
);
// console.log(
//   isPossible(4, [
//     [1, 2],
//     [1, 3],
//     [1, 4],
//   ]),
// );
