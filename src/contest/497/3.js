/**
 * @param {string} s
 * @return {number}
 */
const longestBalanced = (s) => {
	if (!s || s.length === 0) {
		return 0;
	}

	const n = s.length;
	let totalOnes = 0;
	for (const ch of s) {
		if (ch === '1') {
			totalOnes += 1;
		}
	}
	const totalZeros = n - totalOnes;
	const capZeros = 2 * totalZeros;
	const capOnes = 2 * totalOnes;

	const occurrences = new Map();
	occurrences.set(0, [0]);

	let prefix = 0;
	let maxLen = 0;

	const getEarliestIndexAtOrAfter = (arr, bound) => {
		let left = 0;
		let right = arr.length - 1;
		let result = -1;
		while (left <= right) {
			const mid = (left + right) >> 1;
			if (arr[mid] >= bound) {
				result = arr[mid];
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
		return result;
	};

	for (let i = 0; i < n; i += 1) {
		prefix += s[i] === '1' ? 1 : -1;
		const pos = i + 1;

		const sameList = occurrences.get(prefix);
		if (sameList && sameList.length > 0) {
			maxLen = Math.max(maxLen, pos - sameList[0]);
		}

		if (totalZeros > 0) {
			const base = prefix - 2;
			const baseList = occurrences.get(base);
			if (baseList && baseList.length > 0) {
				const bound = pos - capZeros;
				const start = getEarliestIndexAtOrAfter(baseList, bound);
				if (start !== -1) {
					maxLen = Math.max(maxLen, pos - start);
				}
			}
		}

		if (totalOnes > 0) {
			const base = prefix + 2;
			const baseList = occurrences.get(base);
			if (baseList && baseList.length > 0) {
				const bound = pos - capOnes;
				const start = getEarliestIndexAtOrAfter(baseList, bound);
				if (start !== -1) {
					maxLen = Math.max(maxLen, pos - start);
				}
			}
		}

		if (!occurrences.has(prefix)) {
			occurrences.set(prefix, []);
		}
		occurrences.get(prefix).push(pos);
	}

	return maxLen;
};

console.log(longestBalanced('0101'), 'expect 4');
console.log(longestBalanced('1100'), 'expect 4');
console.log(longestBalanced('1110'), 'expect 2');
console.log(longestBalanced('1111'), 'expect 0');
