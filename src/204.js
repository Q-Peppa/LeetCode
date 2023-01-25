/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1);
  const primes = [];
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      primes.push(i);
    }
    for (let j = 0; j < primes.length && i * primes[j] < n; ++j) {
      isPrime[i * primes[j]] = 0;
      if (i % primes[j] === 0) break;
    }
  }
  return primes.length;
};
console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
console.time('countPrimes');
console.log(countPrimes(5 * 10 ** 6));
console.timeEnd('countPrimes');
