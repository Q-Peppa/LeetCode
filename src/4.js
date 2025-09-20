/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let a = 0;
  let l1 = [...nums1],
    l2 = [...nums2];
  l1.push(...l2);
  l1.sort((a, b) => a - b);
  if (l1.length % 2 === 0) {
    a = (l1[l1.length / 2 - 1] + l1[l1.length / 2]) / 2;
  } else {
    a = l1[Math.floor(l1.length / 2)];
  }
  return a;
};
