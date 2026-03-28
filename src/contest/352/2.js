/**
 * @param {number} n
 * @return {number[][]}
 */
const findPrimePairs = (n) => {
	const prime = new Array(n).fill(1);
	prime[0] = 0;
	prime[1] = 0;
	for (let i = 2; i * i <= n; i++) {
		if (prime[i]) {
			for (let j = i * i; j <= n; j += i) {
				prime[j] = 0;
			}
		}
	}
	const res = [];
	for (let i = 0; i <= n >> 1; i++) {
		const anthor = n - i;
		if (prime[i] && prime[anthor]) res.push([i, anthor]);
	}
	return res;
};

// 10
console.log(findPrimePairs(10));
// 2
console.log(findPrimePairs(2));

// 10**6
console.log(findPrimePairs(100000));
