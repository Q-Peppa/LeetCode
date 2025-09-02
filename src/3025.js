/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
  let total = 0;
  points.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });

  /**
   * @params leftTop { number[] }
   * @params rightBottom { number[] }
   */
  const checkInner = (leftTop, rightBottom) => {
    const isEqual = (a, b) => {
      return a[0] === b[0] && a[1] === b[1];
    };
    return points.every((item) => {
      const NOT = isEqual(item, leftTop) || isEqual(item, rightBottom);
      if (NOT) {
        return true;
      }
      const su =
        item[0] < leftTop[0] ||
        item[1] > leftTop[1] ||
        item[0] > rightBottom[0] ||
        item[1] < rightBottom[1];
      return su;
    });
  };

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    for (let j = i + 1; j < points.length; j++) {
      if (points[j][0] >= point[0] && points[j][1] <= point[1]) {
        if (checkInner(point, points[j])) total++;
      }
    }
  }

  return total;
};
