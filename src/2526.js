/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
  this.arr = [];
  this.k = k;
  this.value = value;
};

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
  this.arr.push(num);
  if (this.arr.length < this.k) return false;
  for (let i = this.arr.length - this.k; i < this.arr.length; i++) {
    if (this.arr[i] !== this.value) return false;
  }
  return true;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
var dataStream = new DataStream(4, 3); // value = 4, k = 3
dataStream.consec(4); // 数据流中只有 1 个整数，所以返回 False 。
dataStream.consec(4); // 数据流中只有 2 个整数
// 由于 2 小于 k ，返回 False 。
dataStream.consec(4); // 数据流最后 3 个整数都等于 value， 所以返回 True 。
dataStream.consec(3); // 最后 k 个整数分别是 [4,4,3] 。
// 由于 3 不等于 value ，返回 False 。
