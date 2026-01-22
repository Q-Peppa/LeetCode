/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return 0;

  const isNonDecreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  };

  let ops = 0;
  while (!isNonDecreasing(nums)) {
    let minSum = Infinity;
    let minIdx = -1;
    for (let i = 0; i < nums.length - 1; i++) {
      const s = nums[i] + nums[i + 1];
      if (s < minSum) {
        minSum = s;
        minIdx = i;
      }
    }
    // Replace the chosen adjacent pair with their sum
    const summed = nums[minIdx] + nums[minIdx + 1];
    nums.splice(minIdx, 2, summed);
    ops++;
  }

  return ops;
};
