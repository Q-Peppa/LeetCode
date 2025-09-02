/**
 * @param {string} text
 * @return {number}
 */
let longestDecomposition = function (text) {
	let res = 0;
	const h = (start, end, nowS) => {
		if (start > end) {
			// res++;
			return;
		}
		for (let i = 0; i < nowS.length; i++) {
			let left = nowS.slice(0, i + 1);
			let right = nowS.slice(nowS.length - i - 1);
			if (left === right) {
				res += left === nowS ? 1 : 2;
				return h(
					start + i + 1,
					end - i - 1,
					nowS.slice(i + 1, nowS.length - i - 1),
				);
				// return;
			}
		}
	};
	h(0, text.length - 1, text);
	return res;
};
