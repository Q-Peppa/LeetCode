/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {
  // Collect all x coordinates for compression
  const xSet = new Set();
  const events = [];

  for (const [x, y, l] of squares) {
    const x1 = x;
    const x2 = x + l;
    xSet.add(x1);
    xSet.add(x2);
    events.push([y, 1, x1, x2]); // add
    events.push([y + l, -1, x1, x2]); // remove
  }

  // Coordinate compression
  const xs = Array.from(xSet).sort((a, b) => a - b);
  const xIndex = new Map();
  for (let i = 0; i < xs.length; i++) {
    xIndex.set(xs[i], i);
  }

  // Events sorted by y
  events.sort((a, b) => a[0] - b[0]);

  // Segment tree for interval union length
  class SegTree {
    constructor(coords) {
      this.n = coords.length - 1;
      this.coords = coords;
      this.count = new Array(4 * this.n).fill(0);
      this.length = new Array(4 * this.n).fill(0);
    }

    update(node, l, r, ql, qr, val) {
      if (ql >= r || qr <= l) return;
      if (ql <= l && r <= qr) {
        this.count[node] += val;
      } else {
        const mid = (l + r) >> 1;
        this.update(node * 2 + 1, l, mid, ql, qr, val);
        this.update(node * 2 + 2, mid, r, ql, qr, val);
      }

      if (this.count[node] > 0) {
        this.length[node] = this.coords[r] - this.coords[l];
      } else {
        if (l + 1 === r) {
          this.length[node] = 0;
        } else {
          this.length[node] =
            this.length[node * 2 + 1] + this.length[node * 2 + 2];
        }
      }
    }

    query() {
      return this.length[0];
    }
  }

  const segTree = new SegTree(xs);

  // Sweep line: compute prefix areas, x-union lengths, and y-intervals
  const yCoords = [];
  const prefixAreas = [];
  const xUnionLengths = [];
  let prevY = events[0][0];
  let area = 0;

  let i = 0;
  while (i < events.length) {
    const y = events[i][0];
    if (y > prevY) {
      const xLen = segTree.query();
      area += xLen * (y - prevY);
      prevY = y;
    }

    // Process all events at this y
    while (i < events.length && events[i][0] === y) {
      const [, type, x1, x2] = events[i];
      const l = xIndex.get(x1);
      const r = xIndex.get(x2);
      segTree.update(0, 0, xs.length - 1, l, r, type);
      i++;
    }

    yCoords.push(y);
    prefixAreas.push(area);
    xUnionLengths.push(segTree.query());
  }

  const totalArea = area;
  const half = totalArea / 2;

  // Find the y-coordinate where area reaches half
  // Iterate through y-intervals
  let currY = 0;
  let currArea = 0;

  for (let j = 0; j < yCoords.length - 1; j++) {
    const yStart = yCoords[j];
    const yEnd = yCoords[j + 1];
    const xLen = xUnionLengths[j];
    const intervalArea = xLen * (yEnd - yStart);

    if (currArea + intervalArea >= half) {
      // The line is in this interval
      if (xLen === 0) {
        currArea += intervalArea;
        currY = yEnd;
        continue;
      }
      const needed = half - currArea;
      const yLine = yStart + needed / xLen;
      return yLine;
    }

    currArea += intervalArea;
    currY = yEnd;
  }

  // Shouldn't reach here, but return the last y-coordinate
  return yCoords[yCoords.length - 1];
};

console.log(
  separateSquares([
    [0, 0, 1],
    [2, 2, 1],
  ]),
  'expected: ~1.0',
);
console.log(
  separateSquares([
    [3, 16, 5],
    [21, 26, 3],
    [21, 24, 3],
    [0, 1, 4],
  ]),
  'expected: ~18.4',
);

console.log(
  separateSquares([
    [0, 0, 9999999],
    [10000000, 0, 9999999],
    [0, 9999999, 1],
    [0, 10000000, 9999999],
    [10000000, 10000000, 9999999],
  ]),
  'expected: ~9999999.5',
);
