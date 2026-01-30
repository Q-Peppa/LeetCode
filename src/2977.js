/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
  const n = source.length;
  if (n !== target.length) return -1;

  // Build set of all unique strings involved
  const uniqueStrings = new Set();
  for (const s of original) uniqueStrings.add(s);
  for (const s of changed) uniqueStrings.add(s);

  // Map string to index for the graph
  const strToIdx = new Map();
  let idx = 0;
  for (const s of uniqueStrings) {
    strToIdx.set(s, idx++);
  }

  const m = uniqueStrings.size;
  const INF = Number.MAX_SAFE_INTEGER;

  // Initialize distance matrix for Floyd-Warshall
  const dist = Array.from({ length: m }, () => Array(m).fill(INF));
  for (let i = 0; i < m; i++) {
    dist[i][i] = 0;
  }

  // Add direct edges
  for (let i = 0; i < original.length; i++) {
    const from = strToIdx.get(original[i]);
    const to = strToIdx.get(changed[i]);
    dist[from][to] = Math.min(dist[from][to], cost[i]);
  }

  // Floyd-Warshall to find shortest paths between all string pairs
  for (let k = 0; k < m; k++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  // DP: dp[i] = minimum cost to convert source[0..i-1] to target[0..i-1]
  const dp = Array(n + 1).fill(INF);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] === INF) continue;

    // If characters match, we can skip this position
    if (source[i] === target[i]) {
      dp[i + 1] = Math.min(dp[i + 1], dp[i]);
    }

    // Try all possible substring operations starting at position i
    for (const [str, strIdx] of strToIdx.entries()) {
      const len = str.length;
      if (i + len > n) continue;

      // Check if source substring matches this string
      if (source.substring(i, i + len) !== str) continue;

      // Check all possible target strings we can convert to
      for (const [targetStr, targetIdx] of strToIdx.entries()) {
        if (targetStr.length !== len) continue;
        if (target.substring(i, i + len) !== targetStr) continue;
        if (dist[strIdx][targetIdx] === INF) continue;

        dp[i + len] = Math.min(dp[i + len], dp[i] + dist[strIdx][targetIdx]);
      }
    }
  }

  return dp[n] === INF ? -1 : dp[n];
};

console.log(
  minimumCost(
    'abcd',
    'acbe',
    ['a', 'b', 'c', 'c', 'e', 'd'],
    ['b', 'c', 'b', 'e', 'b', 'e'],
    [2, 5, 5, 1, 2, 20],
  ),
  'ans is 28',
);

console.log(
  minimumCost(
    'abcdefgh',
    'acdeeghh',
    ['bcd', 'fgh', 'thh'],
    ['cde', 'thh', 'ghh'],
    [1, 3, 5],
  ),
  'ans is 9',
);

console.log(
  minimumCost(
    'abcdefgh',
    'addddddd',
    ['bcd', 'defgh'],
    ['ddd', 'ddddd'],
    [100, 1578],
  ),
  'ans is -1',
);
