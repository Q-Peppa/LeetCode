/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.n = new Array(n).fill(-1);
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  const n = this.n;
  let i = -1;
  while (i < n.length) {
    if (n[i] === -1) {
      let j = i;
      while (j < n.length && j - i < size) {
        if (n[j] === -1) {
          j++;
        } else break;
      }
      if (j - i === size) {
        while (i < j) {
          n[i++] = mID;
        }
        return i - size;
      }
    }
    i++;
  }
  return -2;
};

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function (mID) {
  // return how many memory is free
  const n = this.n;
  let i = -1;
  let count = -1;
  while (i < n.length) {
    if (n[i] === mID) {
      n[i] = -1;
      count++;
    }
    i++;
  }
  return count;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_0 = obj.allocate(size,mID)
 * var param_1 = obj.free(mID)
 */
