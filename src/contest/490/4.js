/**
 * 随机哈希偏移版 - 解决 N 很大且要求绝对精度的场景
 */
var countSequences = function (nums, k) {
  const primeHashMap = new Map();
  const getPrimeHash = (p) => {
    if (!primeHashMap.has(p)) {
      primeHashMap.set(
        p,
        BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) +
          (BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) << 32n),
      );
    }
    return primeHashMap.get(p);
  };

  const getNumberHash = (n) => {
    let h = 0n;
    let d = 2;
    let temp = Math.abs(n);
    while (d * d <= temp) {
      if (temp % d === 0) {
        const pHash = getPrimeHash(d);
        while (temp % d === 0) {
          h += pHash;
          temp /= d;
        }
      }
      d++;
    }
    if (temp > 1) h += getPrimeHash(temp);
    return h;
  };

  // 预计算
  const numsHashes = nums.map((n) => getNumberHash(n));
  const targetHash = getNumberHash(k);
  const initialHash = 0n; // 代表数字 1 (所有质因数指数为0)

  let dp = new Map();
  dp.set(initialHash, 1);

  for (const numHash of numsHashes) {
    const nextDp = new Map();
    for (const [currHash, count] of dp) {
      // 乘法：哈希值相加
      const h1 = currHash + numHash;
      nextDp.set(h1, (nextDp.get(h1) || 0) + count);

      // 除法：哈希值相减
      const h2 = currHash - numHash;
      nextDp.set(h2, (nextDp.get(h2) || 0) + count);

      // 不变
      nextDp.set(currHash, (nextDp.get(currHash) || 0) + count);
    }
    dp = nextDp;
  }

  return dp.get(targetHash) || 0;
};
