const pairwise = (nums) => {
  // like python3 itertools.combinations
  const combinations = (arr, n) => {
    if (n === 1) return arr.map((v) => [v]);
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      const sub = combinations(arr.slice(i + 1), n - 1);
      for (const s of sub) {
        res.push([arr[i], ...s]);
      }
    }
    return res;
  };
  const pairs = combinations(nums, 2);
};
