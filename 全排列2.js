/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = []
  let used = {}
  for (let i =0; i<nums.length ;i++){
    used[i] = 0
  }
  nums.sort()
  dfs = (avaliable = []) => {
    if (avaliable.length === nums.length) {
      res.push(avaliable.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if ( used[i] === 0) {
        if (i > 0 && nums[i] === nums[i - 1] && used[i-1]) {
          continue
        }
        used[i] = 1
        avaliable.push(nums[i])
        dfs(avaliable)
        used[i] = 0
        avaliable.pop()
      }

    }
  }
  dfs([])
  return res
};
