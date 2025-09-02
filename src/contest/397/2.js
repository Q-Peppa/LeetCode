/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
	// 每k个跳跃一次, 求数组的最大和
	let n = energy.length;
	let dp = new Array(n).fill(-1e9);
	dp[0] = energy[0];
	for (let i = 1; i < n; i++) {
		dp[i] = Math.max(energy[i], (dp[i - k] ?? 0) + energy[i]);
	}

	dp = dp.slice(-k);
	return Math.max(...dp);
};

let energy = [5, 2, -10, -5, 1],
	k = 3;
console.log(maximumEnergy(energy, k));
