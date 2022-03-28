/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const left = '([{'
  const ans = []
  for (const c of s) {
    if (left.includes(c)) {
      ans.push(c)
    } else {
      if (c === ')') {
        if (ans.length === 0 || ans.pop() !== '(') return false
      } else if (c === ']') {
        if (ans.length === 0 || ans.pop() !== '[') return false
      } else {
        if (ans.length === 0 || ans.pop() !== '{') return false
      }
    }
  }
  console.log(123)

  return ans.length === 1
}
isValid('[')
