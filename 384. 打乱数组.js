
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = [...nums]
  this.ans = [...nums]
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () { 
  this.ans = [...this.nums]
  return this.ans
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
   return  _.shuffle(this.ans)
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
