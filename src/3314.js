/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  const res = [];
  for (let v of nums) {
    let found = -1;
    // x must be <= v (since x | (x+1) >= x), so search 0..v
    for (let x = 0; x <= v; x++) {
      if ((x | (x + 1)) === v) {
        found = x;
        break;
      }
    }
    res.push(found);
  }
  return res;
};
console.log(minBitwiseArray([2, 3, 5, 7]));

// Test cases
console.log(minBitwiseArray([11, 13, 31]));
