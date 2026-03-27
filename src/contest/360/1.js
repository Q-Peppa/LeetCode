/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = (moves) => {
	let cn, ans;
	cn = ans = 0;
	for (const c of moves) {
		if (c === 'L') ans++;
		else if (c === 'R') ans--;
		else cn++;
	}
	return Math.abs(ans) + cn;
};
