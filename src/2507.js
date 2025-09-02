const isPrime = (n) => {
	if (n < 2) return false;
	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) return false;
	}
	return true;
};
/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
	if (isPrime(n)) return n;
	// Continuously replace n with the sum of its prime factors.
	let copy = n;
	while (true) {
		let result = [];
		for (let i = 2; i <= n; i++) {
			if (n % i === 0) {
				result.push(i);
				n /= i;
				i = 1;
			}
		}
		let sum = result.reduce((a, b) => a + b, 0);
		if (isPrime(sum) || sum === copy) return sum;
		else n = sum;
	}
};
// console.log(smallestValue(15));
// console.log(smallestValue(3));
console.log(smallestValue(4));
