/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let steps = 0,
    str = s.split('');
  while (str.join('') !== '1') {
    steps++;
    if (str[str.length - 1] === '0') {
      str.pop();
    } else {
      for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '1') {
          str[i] = '0';
          if (i === 0) {
            str.unshift('1');
            break;
          }
        } else {
          str[i] = '1';
          break;
        }
      }
    }
  }
  return steps;
};
