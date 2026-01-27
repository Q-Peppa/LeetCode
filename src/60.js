/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  const factorial = new Array(n + 1);
  factorial[0] = 1;
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  k--;
  let result = '';

  for (let i = n; i > 0; i--) {
    const index = Math.floor(k / factorial[i - 1]);
    result += numbers[index];
    numbers.splice(index, 1);
    k %= factorial[i - 1];
  }

  return result;
};

console.log(getPermutation(3, 3), '1', "ans is '213'");
console.log(getPermutation(4, 9), '2', "ans is '2314'");
console.log(getPermutation(3, 1), '3', "ans is '123'");
