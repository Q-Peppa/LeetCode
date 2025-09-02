var maximumXorProduct = function (a, b, n) {
	let m = 1000000007;
	a = BigInt(a);
	b = BigInt(b);
	let best = a * b;
	for (let i = n - 1; i >= 0; i--) {
		let u = BigInt(2 ** i);
		let now = (a ^ u) * (b ^ u);
		if (now > best) {
			a ^= u;
			b ^= u;
			best = now;
		}
	}
	return Number(best % BigInt(m));
};

console.log(maximumXorProduct(53449611838892, 712958946092406, 6));
