Array.prototype.binarySearchLeft = function (target) {
  let s = 0,
    end = this.length - 1;
  while (s < end) {
    let mid = Math.floor((s + end) / 2);
    if (this[mid] >= target) {
      end = mid;
    } else {
      s++;
    }
  }
  return this.length - s;
};
Array.prototype.binarySearchRight = function (target) {
  let s = 0,
    end = this.length - 1;
  while (s < end) {
    let mid = Math.floor((s + end) / 2);
    if (this[mid] > target) {
      end = mid;
    } else {
      s++;
    }
  }
  return this.length - s;
};
/**
 * @param {string} str
 * @return {number}
 */
const s = (str) => {
  let count = new Array(26).fill(0);
  for (let i of str) {
    count[i.charCodeAt(0) - 96]++;
  }

  for (let i = 0; i <= 26; i++) {
    if (count[i] !== 0) {
      return count[i];
    }
  }
  return 0;
};
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  const nums = words.map((w) => s(w));
  nums.sort((a, b) => a - b);
  return queries.map((e) => {
    const count = s(e);
    return words.length - nums.binarySearchRight(count);
  });
};
