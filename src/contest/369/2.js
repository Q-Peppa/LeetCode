/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let ori = nums1.filter((e) => e === 0).length;
  let ori2 = nums2.filter((e) => e === 0).length;
  let n1 = _.sum(nums1.map((i) => i || 1));
  let n2 = _.sum(nums2.map((i) => i || 1));
  if (n2 > n1 && ori === 0) return -1;
  if (n2 < n1 && ori2 === 0) return -1;
  return Math.max(n1, n2);
};

/**
 * [9,5]
 * [15,12,5,21,4,26,27,9,6,29,0,18,16,0,0,0,20]
 */

console.log(
  minSum([9, 5], [15, 12, 5, 21, 4, 26, 27, 9, 6, 29, 0, 18, 16, 0, 0, 0, 20]),
);
