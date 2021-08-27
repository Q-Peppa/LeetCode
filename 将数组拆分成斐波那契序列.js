/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function (num) {

  let res = []

  function dfs(cur, temp) {
    let l = temp.length
    if (l >= 3 && temp[l - 3] + temp[l - 2] !== temp[l - 1]) return false
    if (cur === num.length && l >= 3) {
      return true
    }
    let currLong = 0
    for (let i = cur; i < num.length; i++) {
      if (num[cur] === '0' && i > cur) break
      currLong = currLong * 10 + (num[i] - 0)
      if (currLong > Math.pow(2, 31) - 1) {
        break
      }
      temp.push(currLong)
      if (dfs(i + 1, temp)) {
        return true
      }
      temp.pop()


    }
  }

  dfs(0, res)
  console.log(res)
  return res
};

splitIntoFibonacci("0123")

