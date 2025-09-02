const _ = require('lodash');
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  return _.mergeWith(nums1, nums2, (a, b) => {
    if (a[0] === b[0]) {
      return [[a[0], a[1] + b[1]]];
    } else {
      return [
        [a[0], a[1]],
        [b[0], b[1]],
      ];
    }
  })
    .flat()
    .sort((a, b) => a[0] - b[0]);
};
console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
  ),
);
