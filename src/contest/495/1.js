/**
 * @param {string} s
 * @return {number}
 */
const firstMatchingIndex = (s) => {
	const n = s.length;

	for (let i = 0; i < n; i++) {
		if (s[i] === s[n - i - 1]) {
			return i;
		}
	}

	return -1;
};

console.log(firstMatchingIndex('xbcdby'), '1', 'ans is 1');
console.log(firstMatchingIndex('abc'), '-1', 'ans is -1');
console.log(firstMatchingIndex('a'), '0', 'ans is 0');

// Time Complexity: O(n)
// Space Complexity: O(1)
