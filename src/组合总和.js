/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
	const res = [];
	const path = [];
	candidates.sort();

	function dfs(deepth, currentSum) {
		if (currentSum === target) {
			res.push(path.slice());
			return;
		}
		for (let i = deepth; i < candidates.length; i++) {
			const n = candidates[i];
			if (target < n + currentSum) continue;
			path.push(n);
			currentSum += n;
			dfs(i, currentSum);
			path.pop();
			currentSum -= n;
		}
	}

	dfs(0, 0);
	return res;
};
console.log(combinationSum([2, 3, 6, 7], 7));
