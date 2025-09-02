/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
	let cn, ans;
	cn = ans = 0;
	for (let c of moves) {
		if (c === "L") ans++;
		else if (c === "R") ans--;
		else cn++;
	}
	return Math.abs(ans) + cn;
};
