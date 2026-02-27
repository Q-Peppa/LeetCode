/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let steps = 0;
  let carry = 0;
  for (let i = s.length - 1; i > 0; i--) {
    const bit = s[i] === '1' ? 1 : 0;
    if (bit + carry === 1) {
      steps += 2;
      carry = 1;
    } else {
      steps += 1;
    }
  }
  return steps + carry;
};

console.log(numSteps('1'), '1', 'ans is 0');
console.log(numSteps('10'), '2', 'ans is 1');
console.log(numSteps('1101'), '3', 'ans is 6');
console.log(numSteps('111'), '4', 'ans is 4');
console.log(numSteps('101'), '5', 'ans is 5');
