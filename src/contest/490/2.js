/**
 * @param {number} n
 * @return {boolean}
 */
var isDigitorialPermutation = function (n) {
  // 1. 预计算 0-9 的阶乘
  const FACT = new Int32Array(10);
  FACT[0] = 1;
  for (let i = 1; i <= 9; i++) FACT[i] = FACT[i - 1] * i;

  // 2. 统计 n 中每个数字出现的频率
  const targetFreq = new Int32Array(10);
  let tempN = n;
  let digitCount = 0;
  while (tempN > 0) {
    targetFreq[tempN % 10]++;
    tempN = Math.floor(tempN / 10);
    digitCount++;
  }
  // 特殊处理 n 为 0 的情况
  if (n === 0) {
    targetFreq[0] = 1;
    digitCount = 1;
  }

  // 3. 计算所有位阶乘的总和 S
  let S = 0;
  for (let i = 0; i < 10; i++) {
    S += FACT[i] * targetFreq[i];
  }

  // 4. 检查 S 的每一位数字频率是否与 targetFreq 一致
  const sFreq = new Int32Array(10);
  let tempS = S;
  let sDigitCount = 0;

  if (S === 0) {
    sFreq[0] = 1;
    sDigitCount = 1;
  } else {
    while (tempS > 0) {
      sFreq[tempS % 10]++;
      tempS = Math.floor(tempS / 10);
      sDigitCount++;
    }
  }
  if (sDigitCount !== digitCount) return false;

  for (let i = 0; i < 10; i++) {
    if (sFreq[i] !== targetFreq[i]) return false;
  }

  return true;
};
