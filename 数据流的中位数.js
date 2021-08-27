/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.arr.length === 0) {
    this.arr.push(num)
  } else {
    let l = 0,
      r = this.arr.length - 1
    while (l <= r) {
      let mid = Math.floor(l + r >> 1)
      if (this.arr[mid] > num) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    this.arr.splice(r + 1, 0, num)
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  return (this.arr[Math.floor(this.arr.length / 2)] +
    this.arr[Math.floor((this.arr.length - 1) / 2)]) / 2;

};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var obj = new MedianFinder()
obj.addNum(20)
obj.addNum(30)
var param_2 = obj.findMedian()
obj.addNum(30)
var param_2 = obj.findMedian()
console.log(param_2)
