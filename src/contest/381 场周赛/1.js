/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  let ans = 1,
    time = 1;
  for (let i = 1; i < word.length; i++) {
    if (i % 8 === 0) time++;
    ans += time;
  }
  return ans;
};
