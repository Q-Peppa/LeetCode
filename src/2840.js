/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkStrings = (s1, s2) => {
	if (s1.length !== s2.length) {
		return false;
	}

	/** @type {number[]} */
	const evenCount = Array(26).fill(0);
	/** @type {number[]} */
	const oddCount = Array(26).fill(0);

	for (let i = 0; i < s1.length; i++) {
		const offset1 = s1.charCodeAt(i) - 97;
		const offset2 = s2.charCodeAt(i) - 97;

		if ((i & 1) === 0) {
			evenCount[offset1]++;
			evenCount[offset2]--;
		} else {
			oddCount[offset1]++;
			oddCount[offset2]--;
		}
	}

	for (let i = 0; i < 26; i++) {
		if (evenCount[i] !== 0 || oddCount[i] !== 0) {
			return false;
		}
	}

	return true;
};

console.log(checkStrings('abcdba', 'cabdab'), '1', 'ans is true');
console.log(checkStrings('abe', 'bea'), '2', 'ans is false');

// Time: O(n)
// Space: O(1)
