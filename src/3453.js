/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {
  let totalArea = 0;
  let minY = Infinity;
  let maxY = -Infinity;
  // Calculate total area and the range of y-coordinates
  for (const s of squares) {
    const y = s[1];
    const l = s[2];
    totalArea += l * l;
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y + l);
  }
  // If total area is 0, any line works, return minY (or 0)
  if (totalArea === 0) return 0;
  const targetArea = totalArea / 2;
  let low = minY;
  let high = maxY;
  // Binary search for the minimum y-coordinate
  // 100 iterations ensures precision far better than 1e-5
  for (let i = 0; i < 100; i++) {
    const mid = low + (high - low) / 2;
    let areaBelow = 0;
    for (const s of squares) {
      const y = s[1];
      const l = s[2];
      // Calculate the height of the square that lies below the line y = mid
      // If mid is below the bottom (y), height is 0
      // If mid is above the top (y + l), height is l
      // Otherwise height is mid - y
      const height = Math.min(l, Math.max(0, mid - y));
      areaBelow += height * l;
    }
    if (areaBelow < targetArea) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return low;
};
