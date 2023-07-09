const toSorted = (nums) => {
  const sorted = [...nums];
  sorted.sort((a, b) => a - b);
  return sorted;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumImbalanceNumbers = function (nums) {
  let ans = 0;
  const check = (sorted) => {
    let unblanced = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      if (sorted[i + 1] - sorted[i] > 1) unblanced++;
    }
    return unblanced;
  };
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const sorted = toSorted(nums.slice(i, j));
      if (sorted.length === 1) continue;
      else {
        const f = check(sorted);
        if (f) ans += f;
      }
    }
  }
  return ans;
};
