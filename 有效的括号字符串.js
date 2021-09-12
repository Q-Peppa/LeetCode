/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  if (s.length === 0) return true
  let LeftStack = []
  let starStack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      LeftStack.push(i)
    } else if (s[i] === '*') {
      starStack.push(i)
    } else {
      if (LeftStack.length > 0) {
        LeftStack.pop()
      } else if (starStack.length > 0) {
        starStack.pop()
      } else {
        return false
      }
    }
  }
  if(starStack.length < LeftStack.length ){
    return false
  }
  while (LeftStack.length > 0 && starStack.length > 0) {
    if (starStack.pop() < LeftStack.pop()) {
      return false
    }
  }
  return !LeftStack.length
};


module.exports = checkValidString
