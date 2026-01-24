/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return 0;

  const n = nums.length;
  const val = nums.slice();
  const prev = new Array(n).fill(-1);
  const next = new Array(n).fill(-1);
  const alive = new Array(n).fill(true);
  const ver = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    prev[i] = i - 1;
    next[i] = i + 1 < n ? i + 1 : -1;
  }

  // Count adjacent pairs where left > right
  let badPairs = 0;
  for (let i = 0; i < n - 1; i++) {
    if (val[i] > val[i + 1]) badPairs++;
  }
  if (badPairs === 0) return 0;

  const heap = new MinHeap((a, b) => {
    if (a.sum !== b.sum) return a.sum - b.sum;
    return a.left - b.left;
  });

  // Push all initial adjacent pairs
  for (let i = 0; i < n - 1; i++) {
    heap.push({
      sum: val[i] + val[i + 1],
      left: i,
      right: i + 1,
      lver: ver[i],
      rver: ver[i + 1],
    });
  }

  let ops = 0;

  while (badPairs > 0) {
    // Pop next valid pair (skip stale/invalid entries)
    let item = heap.pop();
    while (item !== null) {
      const l = item.left;
      const r = item.right;
      if (
        l >= 0 &&
        r >= 0 &&
        alive[l] &&
        alive[r] &&
        next[l] === r &&
        ver[l] === item.lver &&
        ver[r] === item.rver
      ) {
        break;
      }
      item = heap.pop();
    }

    if (item === null) {
      // No valid pair left (shouldn't happen in normal flow).
      break;
    }

    const l = item.left;
    const r = item.right;
    const lp = prev[l];
    const rn = next[r];

    // Remove contributions of affected pairs from badPairs
    if (lp !== -1 && alive[lp]) {
      if (val[lp] > val[l]) badPairs--;
    }
    if (val[l] > val[r]) badPairs--;
    if (rn !== -1 && alive[rn]) {
      if (val[r] > val[rn]) badPairs--;
    }

    // Merge r into l
    val[l] = val[l] + val[r];
    ver[l]++;
    alive[r] = false;

    // Link around r
    next[l] = rn;
    if (rn !== -1) prev[rn] = l;

    // Add updated pairs and update badPairs accordingly
    if (lp !== -1 && alive[lp]) {
      heap.push({
        sum: val[lp] + val[l],
        left: lp,
        right: l,
        lver: ver[lp],
        rver: ver[l],
      });
      if (val[lp] > val[l]) badPairs++;
    }
    if (rn !== -1 && alive[rn]) {
      heap.push({
        sum: val[l] + val[rn],
        left: l,
        right: rn,
        lver: ver[l],
        rver: ver[rn],
      });
      if (val[l] > val[rn]) badPairs++;
    }

    ops++;
  }

  return ops;
};
