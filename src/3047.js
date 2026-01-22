/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function (bottomLeft, topRight) {
  let maxArea = 0;
  const n = bottomLeft.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [x1_i, y1_i] = bottomLeft[i];
      const [x2_i, y2_i] = topRight[i];
      const [x1_j, y1_j] = bottomLeft[j];
      const [x2_j, y2_j] = topRight[j];

      // Find intersection
      const intersectX1 = Math.max(x1_i, x1_j);
      const intersectY1 = Math.max(y1_i, y1_j);
      const intersectX2 = Math.min(x2_i, x2_j);
      const intersectY2 = Math.min(y2_i, y2_j);

      // Check if intersection exists
      if (intersectX1 >= intersectX2 || intersectY1 >= intersectY2) {
        continue;
      }

      const width = intersectX2 - intersectX1;
      const height = intersectY2 - intersectY1;
      const side = Math.min(width, height);
      maxArea = Math.max(maxArea, side * side);
    }
  }

  return maxArea;
};

/**
 * There exist n rectangles in a 2D plane with edges parallel to the x and y axis. You are given two 2D integer arrays bottomLeft and topRight where bottomLeft[i] = [a_i, b_i] and topRight[i] = [c_i, d_i] represent the bottom-left and top-right coordinates of the ith rectangle, respectively.

 You need to find the maximum area of a square that can fit inside the intersecting region of at least two rectangles. Return 0 if such a square does not exist.
 */
