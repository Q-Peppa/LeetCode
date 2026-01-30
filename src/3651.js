/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var minCost = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const INF = Number.MAX_SAFE_INTEGER;

  // Collect all cells and sort by grid value
  const points = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      points.push([grid[i][j], i, j]);
    }
  }
  points.sort((a, b) => a[0] - b[0]);

  // dp[i][j] = min cost from (i,j) to (m-1,n-1) with current teleport count
  // We maintain two layers: prev (t-1 teleports) and curr (t teleports)
  let prev = Array.from({ length: m }, () => Array(n).fill(INF));

  // Base case: 0 teleports
  // dp[i][j] = cost to reach destination from (i,j) without teleport
  // Work backwards from destination
  prev[m - 1][n - 1] = 0;

  // Fill prev with 0-teleport costs (working backwards)
  // Use DP: dp[i][j] = min(dp[i+1][j] + grid[i+1][j], dp[i][j+1] + grid[i][j+1])
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) continue;

      const right = j + 1 < n ? prev[i][j + 1] + grid[i][j + 1] : INF;
      const down = i + 1 < m ? prev[i + 1][j] + grid[i + 1][j] : INF;
      prev[i][j] = Math.min(right, down);
    }
  }

  // For each additional teleport from 1 to k
  for (let t = 1; t <= k; t++) {
    const curr = Array.from({ length: m }, () => Array(n).fill(INF));

    // T[i][j] = min(prev[x][y]) for all (x,y) where grid[x][y] <= grid[i][j]
    // Use two pointers on sorted points
    const T = Array.from({ length: m }, () => Array(n).fill(INF));

    // We need to find for each point, the min prev value among all points with <= grid value
    let minCost = INF;
    let ptr = 0;

    for (let i = 0; i < points.length; i++) {
      // Add all points with value <= current to minCost
      while (ptr < points.length && points[ptr][0] <= points[i][0]) {
        const [_, x, y] = points[ptr];
        minCost = Math.min(minCost, prev[x][y]);
        ptr++;
      }

      // Update T for all points with same value as points[i]
      const val = points[i][0];
      let r = i;
      while (r < points.length && points[r][0] === val) {
        const [_, x, y] = points[r];
        T[x][y] = minCost;
        r++;
      }

      // Skip to next different value
      i = r - 1;
    }

    // Fill curr working backwards
    // curr[i][j] = min(normal move, teleport)
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (i === m - 1 && j === n - 1) {
          curr[i][j] = 0;
          continue;
        }

        // Normal move
        const right = j + 1 < n ? curr[i][j + 1] + grid[i][j + 1] : INF;
        const down = i + 1 < m ? curr[i + 1][j] + grid[i + 1][j] : INF;
        const normalCost = Math.min(right, down);

        // Teleport (use T which is min prev among cells with <= value)
        const teleportCost = T[i][j];

        curr[i][j] = Math.min(normalCost, teleportCost);
      }
    }

    prev = curr;
  }

  return prev[0][0] === INF ? -1 : prev[0][0];
};

console.log(
  minCost(
    [
      [1, 3, 3],
      [2, 5, 4],
      [4, 3, 5],
    ],
    2,
  ),
  'ans is 7',
);

console.log(
  minCost(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    1,
  ),
  'ans is 9',
);
