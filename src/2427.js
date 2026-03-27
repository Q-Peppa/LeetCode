/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = (a, b) => {
	let res = 0;
	const min = Math.min(a, b);
	const th = Math.floor(Math.sqrt(min));
	for (let i = 0; i < th + 1; i++) {
		if (a % i === 0 && b % i === 0) {
			res++;
		}
	}
	return res;
};
