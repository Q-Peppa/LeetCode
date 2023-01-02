/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  if (!words.includes(target)) return -1;
  // 0-indexed circular string array words
  let right = 0;
  let findRight = false;
  for (let i = startIndex; i < words.length; i++) {
    if (words[i] === target) {
      findRight = true;
      break;
    }
    right++;
  }
  if (!findRight) {
    for (let i = 0; i < startIndex; i++) {
      if (words[i] === target) break;
      right++;
    }
  }
  let left = 0;
  let findLeft = false;
  for (let i = startIndex; i >= 0; i--) {
    if (words[i] === target) {
      findLeft = true;
      break;
    }
    left++;
  }
  if (!findLeft) {
    for (let i = words.length - 1; i > startIndex; i--) {
      if (words[i] === target) break;
      left++;
    }
  }
  return Math.min(left, right);
};

console.log(
  closetTarget(['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1),
);

console.log(closetTarget(['a', 'b', 'c'], 'c', 0));
