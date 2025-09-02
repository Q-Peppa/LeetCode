var SortedList = function ({ compare = (a, b) => a - b }) {
  this.compare = compare;
  this.list = [];
};
SortedList.prototype.add = function (ele) {
  let l = 0,
    r = this.list.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (this.compare(this.list[mid], ele) <= 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  this.list.splice(l, 0, ele);
};
SortedList.prototype.remove = function (ele) {
  let l = 0,
    r = this.list.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (this.compare(this.list[mid], ele) <= 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  if (this.list[l] === ele) {
    this.list.splice(l, 1);
  }
};
SortedList.prototype.get = function (index) {
  return this.list[index];
};
SortedList.prototype.size = function () {
  return this.list.length;
};
SortedList.prototype.toString = function () {
  return this.list.toString();
};
SortedList.prototype.toArray = function () {
  return this.list;
};
SortedList.prototype.isEmpty = function () {
  return this.list.length === 0;
};
SortedList.prototype.clear = function () {
  this.list = [];
};
SortedList.prototype.bisect = function (ele) {
  // 搜所插入位置, 返回插入位置的索引
  let l = 0,
    r = this.list.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (this.compare(this.list[mid], ele) <= 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
