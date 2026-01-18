/**
 * @param {number[]} costs
 * @param {number[]} capacity
 * @param {number} budget
 * @return {number}
 */
var maxCapacity = function (costs, capacity, budget) {
  let maxCap = 0;
  const n = costs.length;

  // Single machine
  for (let i = 0; i < n; i++) {
    if (costs[i] < budget) {
      maxCap = Math.max(maxCap, capacity[i]);
    }
  }

  if (n < 2) return maxCap;

  // Sort by cost with index tracking
  const items = Array.from({ length: n }, (_, i) => ({
    cost: costs[i],
    cap: capacity[i],
    idx: i,
  }));
  items.sort((a, b) => a.cost - b.cost);

  // Prefix best and second best capacities with indices
  const bestCap = new Array(n);
  const bestIdx = new Array(n);
  const secondCap = new Array(n).fill(0);

  bestCap[0] = items[0].cap;
  bestIdx[0] = 0;
  for (let i = 1; i < n; i++) {
    const cap = items[i].cap;
    if (cap > bestCap[i - 1]) {
      bestCap[i] = cap;
      bestIdx[i] = i;
      secondCap[i] = bestCap[i - 1];
    } else {
      bestCap[i] = bestCap[i - 1];
      bestIdx[i] = bestIdx[i - 1];
      secondCap[i] = Math.max(secondCap[i - 1], cap);
    }
  }

  const upperBound = (target) => {
    let l = 0;
    let r = n;
    while (l < r) {
      const m = (l + r) >> 1;
      if (items[m].cost < target) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return l - 1;
  };

  for (let i = 0; i < n; i++) {
    const remaining = budget - items[i].cost;
    if (remaining <= 0) break;

    const r = upperBound(remaining);
    if (r <= 0) continue;

    let best = bestCap[r];
    if (bestIdx[r] === i) {
      best = secondCap[r];
    }

    if (best > 0) {
      maxCap = Math.max(maxCap, items[i].cap + best);
    }
  }

  return maxCap;
};
// Input: costs = [4,8,5,3], capacity = [1,5,2,7], budget = 8

// Output: 8
console.log(maxCapacity([4, 8, 5, 3], [1, 5, 2, 7], 8));
// Input: costs = [3,5,7,4], capacity = [2,4,3,6], budget = 7

// Output: 6

console.log(maxCapacity([3, 5, 7, 4], [2, 4, 3, 6], 7));

// Input: costs = [2,2,2], capacity = [3,5,4], budget = 5

// Output: 9

console.log(maxCapacity([2, 2, 2], [3, 5, 4], 5));
// [1,7,3]
// capacity =
// [7,3,5]
// budget =
// 13
console.log(maxCapacity([1, 7, 3], [7, 3, 5], 13));
