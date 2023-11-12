/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  const n = nums1.length;

  // 最大化数组末位元素的最少操作次数, 每次可以交换两个数组的相同位置元素, 求最小操作次数
  if (
    Math.max(...nums1) === nums1.at(-1) &&
    Math.max(...nums2) === nums2.at(-1)
  )
    return 0;
	const dp =
};

minOperations([1, 2, 7], [4, 5, 3]);
minOperations([10, 18, 12, 12], [19, 6, 5, 12]);
