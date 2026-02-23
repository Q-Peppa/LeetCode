/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function (nums) {
  const t = {},
    freqCount = {};
  for (const num of nums) {
    if (t[num]) t[num]++;
    else t[num] = 1;
  }
  for (const value of Object.values(t)) {
    if (freqCount[value]) freqCount[value]++;
    else freqCount[value] = 1;
  }
  for (const v of nums) {
    if (freqCount[t[v]] === 1) return v;
  }
  return -1;
};
