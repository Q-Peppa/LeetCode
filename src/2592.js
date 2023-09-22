import _ from 'lodash';

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function (nums) {
  const obj = _.countBy(nums);
  // 得到每个元素尽量比原数组大的数组
  // 1. 从小到大排序
  nums.sort((a, b) => a - b);
  let copyNums = [...nums];
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    let j = i;
    if (!obj[copyNums[j]]) {
      continue;
    }
    while (copyNums[j] <= temp && j < copyNums.length && obj[copyNums[j]] > 0) {
      j++;
    }

    obj[copyNums[j]]--;
    copyNums.splice(j, 1);
    res++;
  }
  return res;
};

console.log(maximizeGreatness([1, 3, 5, 2, 1, 3, 1])); // 4
console.log(maximizeGreatness([1, 2, 3, 4])); //3

console.log(maximizeGreatness([42, 8, 75, 28, 35, 21, 13, 21])); // 6
console.log(maximizeGreatness([1, 2, 2, 3])); // 2
