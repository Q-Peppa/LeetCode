/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount1 = function (nums) {
	let ans = 0;
	const query = (temp) => {
		if (temp.length <= 1) return true;
		let flag = true;
		for (let i = 1; i < temp.length; i++) {
			if (temp[i] <= temp[i - 1]) {
				flag = false;
				break;
			}
		}
		return flag;
	};
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length + 1; j++) {
			// remove nums[i] to nums[j] and query rest
			const temp = nums.slice(0, i).concat(nums.slice(j));

			ans += query(temp) ? 1 : 0;
		}
	}

	return ans;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
	const n = nums.length;
	let l = 0;
	while (l < n - 1 && nums[l] < nums[l + 1]) l++;
	let r = n - 1;
	while (r > 0 && nums[r - 1] < nums[r]) r--;
	let ans = 0;
	if (l === n - 1) return (n * (n + 1)) / 2;
	ans = n - r + 1;
	for (let i = 0; i < l + 1; i++) {
		const target = nums[i];
		let z = r;
		while (z < n && nums[z] <= target) z++;
		ans += n - z + 1;
	}
	return ans;
};
const randomArray = (length) => {
	const arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(Math.floor(Math.random() * 100));
	}
	return arr;
};
const res = randomArray(2000);
console.time("incremovableSubarrayCount1");
console.log(incremovableSubarrayCount1(res));
console.timeEnd("incremovableSubarrayCount1");
// ----
console.time("incremovableSubarrayCount");
console.log(incremovableSubarrayCount(res));
console.timeEnd("incremovableSubarrayCount");
