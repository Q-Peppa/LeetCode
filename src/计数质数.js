/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
	const arr = new Array(n).fill(1);
	let ans = 0;
	for (let i = 2; i < n; i++) {
		if (arr[i]) {
			ans += 1;
			for (let j = i * i; j < n; j += i) {
				arr[j] = 0;
			}
		}
	}
	return ans;
};
console.log("countPrimes(10)", countPrimes(10));
console.log("countPrimes(0)", countPrimes(0));
console.log("countPrimes(1)", countPrimes(1));
console.log("countPrimes(100)", countPrimes(100));
