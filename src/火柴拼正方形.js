/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = function (matchsticks) {
  const len = matchsticks.length

  if (len < 4) return false
  let sum = 0
  for (const i of matchsticks) {
    sum += i
  }
  if (sum % 4 !== 0) return false
  const avg = sum / 4 // 最后结果的边长
  matchsticks.sort()
  if (matchsticks[len - 1] > avg) return false

  function dfs (deepth, sums) {
    if (deepth === -1) {
      return sums[0] === avg && sums[1] === avg && sums[2] === avg
    }
    for (let i = 0; i < 4; i++) {
      if (sums[i] + matchsticks[deepth] > avg) continue
      sums[i] += matchsticks[deepth]
      if (dfs(deepth - 1, sums)) {
        return true
      }
      sums[i] -= matchsticks[deepth]
    }
    return false
  }

  return dfs(len - 1, new Array(4).fill(0))
}
console.log(makesquare([1, 1, 2, 2, 2]))
console.log(makesquare([3, 3, 3, 3, 4]))
console.log(makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]))
