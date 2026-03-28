/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
	const arr = _.uniq(nums);
	for (let i = 0; i < arr.length; i++) {
		nums[i] = arr[i];
	}
	return arr.length;
};
