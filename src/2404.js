/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const obj = new Map();
  for (const v of nums) {
    if (!obj.has(v)) {
      obj.set(v, 0);
    }
    obj.set(v, obj.get(v) + 1);
  }
  let max = -1;
  let ans = undefined;
  for (const [k, v] of obj) {
    if (k % 2 === 0 && (v > max || (v === max && k < ans))) {
      max = v;
      ans = k;
    }
  }
  return max === -1 ? max : ans;
};
