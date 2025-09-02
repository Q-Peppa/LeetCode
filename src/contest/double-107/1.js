/**
 *
 * @param a {string}
 * @param b {string}
 * @returns {boolean}
 */
const eqRe = (a, b) => {
  return a === b.split('').reverse().join('');
};
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (eqRe(words[i], words[j])) ans++;
    }
  }
  return ans;
};

//["cd","ac","dc","ca","zz"]
console.log(maximumNumberOfStringPairs(['cd', 'ac', 'dc', 'ca', 'zz'])); // 1
//["ab","ba","cc"]
console.log(maximumNumberOfStringPairs(['ab', 'ba', 'cc'])); // 2
// ["aa","ab"]
console.log(maximumNumberOfStringPairs(['aa', 'ab'])); // 0
