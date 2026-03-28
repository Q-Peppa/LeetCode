/**
 * @param {number[][]} lcp
 * @return {string}
 */
const findTheString = (lcp) => {
	const n = lcp.length;

	for (let i = 0; i < n; i++) {
		if (lcp[i][i] !== n - i) return '';
		for (let j = i + 1; j < n; j++) {
			if (lcp[i][j] !== lcp[j][i]) return '';
			if (lcp[i][j] < 0 || lcp[i][j] > Math.min(n - i, n - j)) return '';
		}
	}

	const res = Array(n).fill('');
	let c = 97;
	for (let i = 0; i < n; i++) {
		if (res[i] !== '') continue;
		if (c > 122) return '';
		const ch = String.fromCharCode(c);
		for (let j = i; j < n; j++) {
			if (lcp[i][j] > 0) {
				if (res[j] !== '' && res[j] !== ch) return '';
				res[j] = ch;
			}
		}
		c++;
	}

	const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
	for (let i = n - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			if (res[i] === res[j]) {
				dp[i][j] = dp[i + 1][j + 1] + 1;
			}
			if (dp[i][j] !== lcp[i][j]) return '';
		}
	}

	return res.join('');
};

console.log(
	findTheString([
		[4, 0, 2, 0],
		[0, 3, 0, 1],
		[2, 0, 2, 0],
		[0, 1, 0, 1],
	]),
	'abab',
);

console.log(
	findTheString([
		[4, 1, 1, 1],
		[1, 3, 1, 1],
		[1, 1, 2, 1],
		[1, 1, 1, 1],
	]),
	'',
);

// O(n^2) time, O(n^2) space
