/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const res = [1, 2, 3, 4, 5];
  const ans = [];

  res.push(nums2[0]);
  const m = new Map();
  for (const item of nums2) {
    while (res.length && res[res.length - 1] < item) {
      m.set(res.pop(), item);
    }
    res.push(item);
  }
  for (const i of nums1) {
    ans.push(m.get(i) ?? -1);
  }
  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
