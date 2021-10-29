/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function (s) {
  let queue = [s]
  const ans = new Set()
  const vis = new Set()

  while (queue.length) {
    const tmp = []
    for (const s of queue) {
      if (check(s)) {
        ans.add(s)
      } else {
        for (let i = s.length - 1; i >= 0; i--) {
          if (s[i] !== '(' && s[i] !== ')') {
            continue
          }
          const sub = s.substring(0, i) + s.substring(i + 1)
          if (vis.has(sub)) continue
          vis.add(sub)
          tmp.push(sub)
        }
      }
    }

    if (ans.size) return [...ans]
    queue = tmp
  }
  return []
}
var check = function (s) {
  let cnt = 0
  for (const c of s) {
    if (c === '(') {
      cnt++
    } else if (c === ')') {
      cnt--
    }
    if (cnt < 0) return false
  }
  return cnt === 0
}
console.log(removeInvalidParentheses(')('))
// console.log(removeInvalidParentheses("(a)())()"))
console.log(removeInvalidParentheses('())))))))))'))

// (a)())()
