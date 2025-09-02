/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let len = 0;
  const check = (l, r) => {
    if (nums.slice(l, r).length === 1) return true;
    // nums[i] % 2 != nums[i + 1] % 2
    let f = true;
    for (let i = l; i < r - 1; i++) {
      if (nums[i] % 2 === nums[i + 1] % 2) {
        f = false;
        break;
      }
    }
    return f;
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) continue;
    let j = i + 1;
    let slice = nums.slice(i, j);
    while (check(i, j) && slice.every((e) => e <= threshold)) {
      len = Math.max(len, j - i);
      j++;
      slice = nums.slice(i, j);
      if (j > nums.length) break;
    }
  }
  return len;
};

// nums = [3,2,5,4], threshold = 5
console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));
// nums = [1,2], threshold = 2
console.log(longestAlternatingSubarray([1, 2], 2));

// ：nums = [2,3,4,5], threshold = 4
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4));

// [4]
// 1
console.log(longestAlternatingSubarray([4], 1));

// [8,4]
// 6
console.log(longestAlternatingSubarray([8, 4], 6)); // 1
// [2,8]
// 4
console.log(longestAlternatingSubarray([2, 8], 4)); // 1
// 2,2 18
console.log(longestAlternatingSubarray([2, 2], 18)); // 1
// 4,3,1  4
console.log(longestAlternatingSubarray([4, 3, 1], 4)); // 2
