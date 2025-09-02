/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
	const res = [];
	const path = [];
	candidates.sort();
	const used = {};
	for (let i = 0; i < candidates.length; i++) {
		used[i] = 0;
	}

	function dfs(deepth, currentSum) {
		if (currentSum === target) {
			res.push(path.slice());
			return;
		}
		for (let i = deepth; i < candidates.length; i++) {
			if (!used[i]) {
				if (i > 0 && !used[i - 1] && candidates[i] === candidates[i - 1]) {
					continue;
				}
				const n = candidates[i];
				if (target < n + currentSum) continue;
				path.push(n);
				currentSum += n;
				used[i] = 1;
				dfs(i, currentSum);
				path.pop();
				used[i] = 0;
				currentSum -= n;
			}
		}
	}

	dfs(0, 0);
	return res;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
