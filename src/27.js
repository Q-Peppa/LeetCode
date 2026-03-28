/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
	let i = 0;
	for (let count = 0; count < nums.length; count++) {
		if (nums[count] !== val) {
			nums[i] = nums[count];
			i++;
		}
	}
	return i;
};
