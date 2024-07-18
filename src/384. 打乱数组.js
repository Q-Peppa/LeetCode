/**
 * @param {number[]} nums
 */
class Solution {
    constructor(nums) {
        this.nums = [...nums];
        this.ans = [...nums];
    }
    /**
     * @return {number[]}
     */
    reset() {
        this.ans = [...this.nums];
        return this.ans;
    }
    /**
     * @return {number[]}
     */
    shuffle() {
        return _.shuffle(this.ans);
    }
}



/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
