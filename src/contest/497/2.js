/**
 * @param {number[]} sides
 * @return {number[]}
 */
const internalAngles = (sides) => {
	if (!sides || sides.length !== 3) {
		return [];
	}

	const [a, b, c] = sides;

	if (a <= 0 || b <= 0 || c <= 0) {
		return [];
	}

	if (a + b <= c || a + c <= b || b + c <= a) {
		return [];
	}

	const clamp = (value) => Math.min(1, Math.max(-1, value));
	const angleA =
		Math.acos(clamp((b * b + c * c - a * a) / (2 * b * c))) * (180 / Math.PI);
	const angleB =
		Math.acos(clamp((a * a + c * c - b * b) / (2 * a * c))) * (180 / Math.PI);
	const angleC =
		Math.acos(clamp((a * a + b * b - c * c) / (2 * a * b))) * (180 / Math.PI);

	return [angleA, angleB, angleC].sort((x, y) => x - y);
};
