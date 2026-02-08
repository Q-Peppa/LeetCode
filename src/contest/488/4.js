var maxScore = function (nums1, nums2, k) {
  const n = nums1.length;
  const m = nums2.length;

  if (k > Math.min(n, m)) return 0;
  let prev = Array(m + 1)
    .fill(null)
    .map(() => Array(k + 1).fill(-Infinity));
  let curr = Array(m + 1)
    .fill(null)
    .map(() => Array(k + 1).fill(-Infinity));
  for (let j = 0; j <= m; j++) {
    prev[j][0] = 0;
  }

  for (let i = 1; i <= n; i++) {
    curr[0][0] = 0;
    for (let j = 1; j <= m; j++) {
      curr[j][0] = 0;
      for (let t = 1; t <= k; t++) {
        curr[j][t] = Math.max(prev[j][t], curr[j - 1][t]);
        if (prev[j - 1][t - 1] !== -Infinity) {
          const product = nums1[i - 1] * nums2[j - 1];
          curr[j][t] = Math.max(curr[j][t], prev[j - 1][t - 1] + product);
        }
      }
    }
    [prev, curr] = [curr, prev];
  }

  return prev[m][k] === -Infinity ? 0 : prev[m][k];
};
