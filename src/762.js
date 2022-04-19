var countPrimeSetBits = function (left, right) {
  let ans = 0;
  for (let x = left; x <= right; ++x) {
    if (((1 << bitCount(x)) & 665772) != 0) {
      ++ans;
    }
  }
  return ans;
};

const bitCount = (x) => {
  return x.toString(2).split('0').join('').length;
};
