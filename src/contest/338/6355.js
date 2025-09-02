const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  const n = nums.length;

  let min = -1;
  for (let v of nums) {
    if (v <= min) return false;
    let newMin = v;
    for (let i = 2; v - i > min && i < v; i++) {
      if (isPrime(i)) {
        newMin = v - i;
      }
    }
    min = newMin;
  }
  return true;
};
console.log(
  '--primeSubOperation([4,9,6,10])--',
  primeSubOperation([4, 9, 6, 10]),
);
//[6,8,11,12]
console.log(
  '--primeSubOperation([6,8,11,12])--',
  primeSubOperation([6, 8, 11, 12]),
);

// 5 8 3
console.log('--primeSubOperation([5,8,3])--', primeSubOperation([5, 8, 3]));

console.log(primeSubOperation([998, 2, 3]));
