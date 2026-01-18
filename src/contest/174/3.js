/**
 * @param {number[]} nums
 * @param {number} target1
 * @param {number} target2
 * @return {number}
 */
var alternatingXOR = function (nums, target1, target2) {
  /** @type {number} */
  const mod = 1000000007;
  /** @type {number} */
  const n = nums.length;
  /** @type {number} */
  let prefix = 0;

  /** @type {Map<number, number>} */
  const mapDp1 = new Map();
  /** @type {Map<number, number>} */
  const mapDp2 = new Map();

  // dp2 at position 0 is 1 (no blocks yet)
  mapDp2.set(0, 1);

  /** @type {number} */
  let dp1 = 0;
  /** @type {number} */
  let dp2 = 0;

  for (let i = 0; i < n; i++) {
    prefix ^= nums[i];

    const key1 = prefix ^ target1;
    const key2 = prefix ^ target2;

    dp1 = mapDp2.get(key1) || 0;
    dp2 = mapDp1.get(key2) || 0;

    const prev1 = mapDp1.get(prefix) || 0;
    const prev2 = mapDp2.get(prefix) || 0;

    mapDp1.set(prefix, (prev1 + dp1) % mod);
    mapDp2.set(prefix, (prev2 + dp2) % mod);
  }

  return (dp1 + dp2) % mod;
};
