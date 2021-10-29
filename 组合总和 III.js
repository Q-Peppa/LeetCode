const combinationSum3 = function (k, n) {
  let temp = []
  const ans = []
  const check = (mask, k, n) => {
    temp = []
    for (let i = 0; i < 9; ++i) {
      if ((1 << i) & mask) {
        temp.push(i + 1)
      }
    }
    return temp.length === k && temp.reduce((previous, value) => previous + value, 0) === n
  }

  for (let mask = 0; mask < (1 << 9); ++mask) {
    if (check(mask, k, n)) {
      ans.push(temp)
    }
  }
  return ans
}

console.time()
for (let i = 0; i < 10000; i++) {
  (combinationSum3(3, 9));
  (combinationSum3(3, 7));
  (combinationSum3(9, 45))
}

console.timeEnd()
