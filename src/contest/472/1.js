/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) res[i] = 0;
    if (nums[i] > 0) {
      res[i] = nums[(i + nums[i]) % n];
    }
    if (nums[i] < 0) {
      let temp = -nums[i];
      let newIndex = calculateNewIndex(i, temp, n);
      res[i] = nums[newIndex];
    }
  }
  return res;
};

function calculateNewIndex(originalIndex, n, arrayLength) {
  const effectiveShift = n % arrayLength;
  let newIndex = originalIndex - effectiveShift;
  if (newIndex < 0) {
    newIndex += arrayLength;
  }

  return newIndex;
}
