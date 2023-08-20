import _ from "lodash-es";

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {
  let res = Array.from({ length: n }, (_, i) => i + 1);
  // console.log(res);
  // if (_.sum(res) < k) return _.sum(res);
  // let temp = 0;
  for (let i = 0; i < n; i++) {
    if (res[i] === k) continue;
    for (let j = i + 1; j < n; j++) {
      if (res[i] + res[j] === k) {
        let index = j
        while (index < n) {
          if(res[index] < res[index+1]-1){
            res[index]+=1
            break
          }
          res[index++]+=1
        }
        i = -1
      }
    }
  }
  console.log(res);
  return res.reduce((pre, cur) => pre + cur, 0);
};
console.log(minimumSum(5, 4)); // 18
// 2,3
console.log(minimumSum(2, 6)); // 3

console.log(minimumSum(3, 5))  // 8
// 4,5
console.log(minimumSum(4, 5))  // 14
