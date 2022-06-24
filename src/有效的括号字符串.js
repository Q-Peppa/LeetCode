/**
 * @param {string} s
 * @return {boolean}
 */
const h = function (s) {
  if (s.length === 0) return true;
  const LeftStack = [];
  let tolerance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '*') {
      LeftStack.push(s[i]);
    } else if (LeftStack.length > 0) {
      const val = LeftStack.pop();
      if (val === '*') {
        tolerance++;
      }
    } else {
      return false;
    }
  }
  for (let i = 0; i < LeftStack.length; i++) {
    if (LeftStack[i] === '*') {
      tolerance++;
    }
  }
  return LeftStack.length <= tolerance;
};
const checkValidString = function (s) {
  return h(s) && h(s.split('').reverse().join(''));
};

module.exports = checkValidString;
