/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
	if (money < children) return -1;
	if (money < 8) return 0;
	let rest = money - children;
	if (rest >= 7) {
		let res = 0;
		let p = children;
		while (rest >= 7 && p--) {
			res++;
			rest -= 7;
		}
		if (
			(rest === 3 && children - res === 1) ||
			(rest > 0 && children - res === 0)
		) {
			return res - 1;
		}
		return res;
	} else {
		return 0;
	}
};

console.log(distMoney(13, 3));
console.log(distMoney(17, 2));
console.log(distMoney(23, 2));
