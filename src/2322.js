var minimumScore = function (nums, edges) {
  const n = nums.length;

  // 建邻接表
  const adj = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  // DFS 预处理，得到每个节点的子树异或&dfs进出时间
  const xor = new Array(n),
    tin = Array(n),
    tout = Array(n);
  let timer = 0;
  const dfs = (u, p) => {
    tin[u] = timer++;
    let x = nums[u];
    for (let v of adj[u]) {
      if (v !== p) {
        x ^= dfs(v, u);
      }
    }
    xor[u] = x;
    tout[u] = timer++;
    return x;
  };

  dfs(0, -1);
  const total = xor[0];

  // 判断u是否是v的祖先
  const isAncestor = (u, v) => tin[u] <= tin[v] && tout[v] <= tout[u];

  let ans = Infinity;

  // 构建所有边，从parent到child
  let parents = Array(n).fill(-1);
  const dfs_parent = (u, p) => {
    parents[u] = p;
    for (let v of adj[u]) {
      if (v !== p) dfs_parent(v, u);
    }
  };
  dfs_parent(0, -1);

  // 收集所有非根节点及其parent
  const nodes = [];
  for (let i = 1; i < n; ++i) {
    nodes.push(i);
  }

  // 枚举所有(i, j), i != j, 实际上是枚举所有二条边
  for (let i = 0; i < nodes.length; ++i) {
    for (let j = i + 1; j < nodes.length; ++j) {
      const u = nodes[i],
        v = nodes[j];

      let x, y, z;
      if (isAncestor(u, v)) {
        // u是v祖先
        // [v] [u-v路径上的其他部分] [剩下的]
        x = xor[v];
        y = xor[u] ^ x;
        z = total ^ xor[u];
      } else if (isAncestor(v, u)) {
        // v是u祖先
        x = xor[u];
        y = xor[v] ^ x;
        z = total ^ xor[v];
      } else {
        // 无包含
        x = xor[u];
        y = xor[v];
        z = total ^ x ^ y;
      }

      // 计算分数
      let maxVal = Math.max(x, y, z);
      let minVal = Math.min(x, y, z);
      let score = maxVal - minVal;
      if (score < ans) ans = score;
    }
  }
  return ans;
};
