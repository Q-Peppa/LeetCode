/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
const max = (a, b) => {
  return a > b ? a : b;
};
/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function (num, change) {
  //
  let ans = num;

  const t = _.memoize(() => num.split(''));

  let arr = t();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      // i-j
      for (let k = i; k < j; k++) {
        arr[k] = change[arr[k]];
      }
      ans = max(ans, arr.join(''));
      arr = t();
    }
  }
  return ans;
};
console.log(maximumNumber('132', [9, 8, 5, 0, 3, 6, 4, 2, 6, 8])); // 832
console.log(maximumNumber('021', [9, 4, 3, 5, 7, 2, 1, 9, 0, 6])); // 934
console.log(maximumNumber('5', [1, 4, 7, 5, 3, 2, 5, 6, 9, 4])); // 5
