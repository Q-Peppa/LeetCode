/**
 * @param {string} s
 * @param {string} t
 * @param {number} flipCost
 * @param {number} swapCost
 * @param {number} crossCost
 * @return {number}
 */
var minimumCost = function (s, t, flipCost, swapCost, crossCost) {
  let cnt01 = 0;
  let cnt10 = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    if (s[i] === '0' && t[i] === '1') cnt01++;
    else if (s[i] === '1' && t[i] === '0') cnt10++;
  }

  let ans = 0;

  // 1. Handle Mixed Pairs (one '01' and one '10')
  // We can fix a pair using one Swap (cost: swapCost)
  // OR flip both individually (cost: 2 * flipCost)
  const mixedPairs = Math.min(cnt01, cnt10);
  ans += mixedPairs * Math.min(swapCost, 2 * flipCost);

  // 2. Handle Remaining Same Type Pairs (e.g., two '01's or two '10's)
  // Let's say we have two '01's.
  // Option A: Flip both individually (cost: 2 * flipCost)
  // Option B: Convert one '01' to '10' using Cross (cost: crossCost),
  //           then pair the resulting '10' with the other '01' using Swap (cost: swapCost).
  //           Total: crossCost + swapCost.
  const rem = Math.abs(cnt01 - cnt10);
  const samePairs = Math.floor(rem / 2);
  ans += samePairs * Math.min(crossCost + swapCost, 2 * flipCost);

  // 3. Handle Last Single Mismatch (if any)
  // A single mismatch implies odd parity difference between s and t.
  // Only Flip can change parity (by +/- 1).
  // Swap preserves parity. Cross changes parity by +/- 2 (if converting mismatch).
  // So we MUST use at least one Flip (or odd number of flips).
  // Cheapest way is just 1 Flip.
  if (rem % 2 === 1) {
    ans += flipCost;
  }

  return ans;
};
