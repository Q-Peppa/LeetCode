/*
 * @lc app=leetcode.cn id=335 lang=javascript
 *
 * [335] 路径交叉
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function (distance) {
  for (let i = 3, l = distance.length; i < l; i++) {
    // Case 1: current line crosses the line 3 steps ahead of it
    if (distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3]) return true;
    // Case 2: current line crosses the line 4 steps ahead of it
    else if (i >= 4 && distance[i - 1] == distance[i - 3] && distance[i] + distance[i - 4] >= distance[i - 2]) return true;
    // Case 3: current line crosses the line 6 steps ahead of it
    else if (i >= 5 && distance[i - 2] >= distance[i - 4] && distance[i] + distance[i - 4] >= distance[i - 2] && distance[i - 1] <= distance[i - 3] && distance[i - 1] + distance[i - 5] >= distance[i - 3]) return true;
  }
  return false;
};
// @lc code=end

console.log(isSelfCrossing([2, 1, 1, 2]))
console.log(isSelfCrossing([1, 2, 3, 4]))
console.log(isSelfCrossing([1, 1, 1, 1]))