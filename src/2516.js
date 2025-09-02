/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
	if (k === 0) return 0;
	if (s.length < k * 3) return -1;
	let [aTimes, bTimes, cTimes] = [0, 0, 0];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "a") aTimes++;
		else if (s[i] === "b") bTimes++;
		else cTimes++;
	}
	if (aTimes < k || bTimes < k || cTimes < k) return -1;
	let [aIndex, bIndex, cIndex] = [[], [], []];
	for (let i = 0; i < s.length; i++) {
		if (i > s.length / 2) {
			if (s[i] === "a") aIndex.push(s.length - i - 1);
			else if (s[i] === "b") bIndex.push(s.length - i - 1);
			else cIndex.push(s.length - i - 1);
		} else {
			if (s[i] === "a") aIndex.push(i);
			else if (s[i] === "b") bIndex.push(i);
			else cIndex.push(i);
		}
	}
	aIndex.sort((a, b) => a - b);
	bIndex.sort((a, b) => a - b);
	cIndex.sort((a, b) => a - b);
	console.log(aIndex, bIndex, cIndex);
};
console.log(takeCharacters("aabaaaacaabc", 2));
/**
 * a 0 1
 * b 2 1
 * c 0 4
 */

console.log(takeCharacters("a", 1));
