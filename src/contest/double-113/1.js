/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  const checkUpper = () => {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) return false;
    }
    return true;
  };
  if (checkUpper()) return 0;
  const rightMove = (n) => {
    n.unshift(n.pop());
  };
  for (let i = 0; i < nums.length; i++) {
    rightMove(nums);
    if (checkUpper()) return i + 1;
  }
  return -1;
};
