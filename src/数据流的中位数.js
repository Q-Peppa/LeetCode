/**
 * initialize your data structure here.
 */
const MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.arr.length === 0) {
    this.arr.push(num);
  } else {
    let l = 0;
    let r = this.arr.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) >> 1);
      if (this.arr[mid] > num) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    this.arr.splice(r + 1, 0, num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  return (
    (this.arr[Math.floor(this.arr.length / 2)]
      + this.arr[Math.floor((this.arr.length - 1) / 2)])
    / 2
  );
};
