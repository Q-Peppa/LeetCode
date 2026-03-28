const maximumXorProduct = (a, b, n) => {
	const m = 1000000007;
	a = BigInt(a);
	b = BigInt(b);
	let best = a * b;
	for (let i = n - 1; i >= 0; i--) {
		const u = BigInt(2 ** i);
		const now = (a ^ u) * (b ^ u);
		if (now > best) {
			a ^= u;
			b ^= u;
			best = now;
		}
	}
	return Number(best % BigInt(m));
};

console.log(maximumXorProduct(53449611838892, 712958946092406, 6));
