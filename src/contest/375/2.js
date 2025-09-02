function pow(a, b, n) {
	//quick a ^ b then mod n , a maybe is double , and b maybe is negitive
	let res = 1,
		con = a;
	while (b > 0) {
		if (b & 1) res = (res * con) % n;
		con = (con * con) % n;
		b >>= 1;
	}
	return res;
}
/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function (variables, target) {
	const res = [];
	let i = 0;
	for (const ele of variables) {
		const [a, b, c, m] = ele;
		// ((a ^ b % 10)^c ) % m == target
		if (pow(pow(a, b, 10), c, m) === target) res.push(i);
		i++;
	}
	return res;
};
