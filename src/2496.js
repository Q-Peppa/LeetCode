const isOnlyNumber = (str) => {
	return !isNaN(str);
};
/**
 *
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
	let max = 0;
	for (let i = 0; i < strs.length; i++) {
		let str = strs[i];
		if (isOnlyNumber(str)) {
			max = Math.max(max, Number(str));
		} else {
			max = Math.max(max, str.length);
		}
	}
	return max;
};

console.log(
	maximumValue(["alic3", "bob", "3", "4", "00000"]), // 5
	maximumValue(["1", "01", "001", "0001"]),
);
