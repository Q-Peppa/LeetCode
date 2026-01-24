/**
 * @param {number[][]} lists
 * @return {number}
 */
var minMergeCost = function (lists) {
  const n = lists.length;
  const dp = new Array(1 << n).fill(Infinity);

  // Precompute/Cache merged arrays, medians, and lengths
  const mergedArrays = new Array(1 << n);
  const medians = new Array(1 << n);
  const lengths = new Array(1 << n);

  // Base cases
  for (let i = 0; i < n; i++) {
    const mask = 1 << i;
    mergedArrays[mask] = lists[i];
    medians[mask] = lists[i][(lists[i].length - 1) >> 1];
    lengths[mask] = lists[i].length;
    dp[mask] = 0;
  }

  for (let mask = 1; mask < 1 << n; mask++) {
    // Skip base cases (single list)
    if ((mask & (mask - 1)) === 0) continue;

    // Construct merged array from two pre-calculated sub-masks
    // We deterministically split by the lowest set bit to build the array
    const lowBit = mask & -mask;
    const rest = mask ^ lowBit;

    const arrA = mergedArrays[lowBit];
    const arrB = mergedArrays[rest];

    const lenA = arrA.length;
    const lenB = arrB.length;
    const merged = new Array(lenA + lenB);
    let p1 = 0,
      p2 = 0,
      k = 0;

    while (p1 < lenA && p2 < lenB) {
      if (arrA[p1] < arrB[p2]) merged[k++] = arrA[p1++];
      else merged[k++] = arrB[p2++];
    }
    while (p1 < lenA) merged[k++] = arrA[p1++];
    while (p2 < lenB) merged[k++] = arrB[p2++];

    mergedArrays[mask] = merged;
    lengths[mask] = merged.length;
    medians[mask] = merged[(merged.length - 1) >> 1];

    // DP Transition
    // Try all possible splits of the current mask into two non-empty submasks
    // To avoid duplicates (A,B vs B,A), we enforce that the lowest set bit
    // of the current mask always stays in subset1.
    const fixed = mask & -mask;
    const varying = mask ^ fixed;

    let minCost = Infinity;

    // Iterate through all subsets of 'varying'
    // varying is mask without the lowest bit.
    // s will be the varying part of subset1.
    // subset1 = fixed | s
    for (let s = varying; ; s = (s - 1) & varying) {
      const subset1 = s | fixed;
      const subset2 = mask ^ subset1;

      // Cost = cost(sub1) + cost(sub2) + merge_cost
      // merge_cost = len(sub1) + len(sub2) + |med(sub1) - med(sub2)|
      // len(sub1) + len(sub2) is just lengths[mask]
      const currentCost =
        dp[subset1] +
        dp[subset2] +
        lengths[mask] +
        Math.abs(medians[subset1] - medians[subset2]);

      if (currentCost < minCost) {
        minCost = currentCost;
      }

      if (s === 0) break;
    }
    dp[mask] = minCost;
  }

  return dp[(1 << n) - 1];
};
