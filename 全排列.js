/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  dfs = (avaliable=[]) => {
    if (avaliable.length === nums.length) {
      res.push(avaliable.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if(avaliable.indexOf(nums[i]) === -1 ){
        avaliable.push(nums[i])
        dfs(avaliable)
        avaliable.pop()
      }
    }
  }
  dfs([])
  return res
};
var a = [1,2,3]
a.unshift("123")
console.log(a)
