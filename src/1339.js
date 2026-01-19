var maxProduct = function (root) {
  let sum = 0;
  let best = 0;

  const dfs = (node) => {
    if (!node) return;
    sum += node.val;
    dfs(node.left);
    dfs(node.right);
  };

  const dfs2 = (node) => {
    if (!node) return 0;
    const cur = dfs2(node.left) + dfs2(node.right) + node.val;
    if (Math.abs(cur * 2 - sum) < Math.abs(best * 2 - sum)) {
      best = cur;
    }
    return cur;
  };

  dfs(root);
  dfs2(root);
  return Number((BigInt(best) * BigInt(sum - best)) % 1000000007n);
};
