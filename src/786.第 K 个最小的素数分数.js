"use strict";

var kthSmallestPrimeFraction = function(a, k) {
  const n = a.length
  let b = []
  for (let i = 0; i < n - 1; ++i)
    for (let j = n - 1; j > i; --j)
      b.push([a[i], a[j]])
  b.sort(([x0, x1], [y0, y1]) => {
    return x0 * y1 - x1 * y0
  })
  return b[k - 1]
};



kthSmallestPrimeFraction([1, 2, 3, 5], 3)