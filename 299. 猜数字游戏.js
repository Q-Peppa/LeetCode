/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let countA = 0
  let countB = 0
  const nums = new Array(10).fill(0)
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      countA++
    } else {
      if (nums[guess[i] - '0']-- > 0) countB++
      if (nums[secret[i] - '0']++ < 0) countB++
    }
  }
  return countA + 'A' + countB + 'B'
}
console.log(getHint('1807', '7810') === '1A3B')
console.log(getHint('1123', '0111') === '1A1B')
console.log(getHint('1', '0') === '0A0B')
console.log(getHint('1', '1') === '1A0B')
