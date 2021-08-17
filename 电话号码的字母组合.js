/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = []
  const MAP_NUM = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  if (digits === "") {
    return res
  }
  function dfs(temp, deepth) {
    if (temp.length === digits.length) {
      res.push(temp.slice())
      return
    }
    let te = MAP_NUM[digits[deepth]]
    for (let i = 0; i < te.length; i++) {
      temp += te[i]
      dfs(temp, deepth + 1)
      temp = temp.slice(0, temp.length - 1)
    }
  }
  dfs("" , 0)
  return res
};
console.log(letterCombinations("23"));
