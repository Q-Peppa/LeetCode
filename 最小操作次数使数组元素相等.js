/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {

  let min = Math.min(...nums)
  let ans = 0
  for(let i of nums){
    ans+=i-min
  }
  return ans
}
