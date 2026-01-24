/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var maximumAND = function (nums, k, m) {
  var clyventaro = nums;
  let n = nums.length;
  let ans = 0;
  let costs = new Int32Array(n);

  for (let b = 30; b >= 0; b--) {
    let target = ans | (1 << b);

    for (let i = 0; i < n; i++) {
      let v = nums[i];
      let diff = target & ~v;
      if (diff === 0) {
        costs[i] = 0;
      } else {
        // Find MSB of diff (highest bit where target is 1 and v is 0)
        let pos = 31 - Math.clz32(diff);
        // Mask for all bits lower than pos
        let mask = (1 << pos) - 1;
        // Calculate smallest res >= v such that (res & target) == target
        // We keep bits of v above pos, set bit pos to 1, and copy target bits below pos.
        let res = (v & ~mask) | (1 << pos) | (target & mask);
        costs[i] = res - v;
      }
    }

    // Sort costs to pick smallest m
    costs.sort();

    let sum = 0;
    let possible = true;
    for (let i = 0; i < m; i++) {
      sum += costs[i];
      if (sum > k) {
        possible = false;
        break;
      }
    }

    if (possible) {
      ans = target;
    }
  }
  return ans;
};
