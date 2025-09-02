/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
	const myS = s.split("");
	for (let i = 0; i < myS.length; i++) {
		if (myS[i] !== myS[myS.length - 1 - i]) {
			let minChar =
				myS[i] > myS[myS.length - 1 - i] ? myS[myS.length - 1 - i] : myS[i];
			let minIndex = myS[i] > myS[myS.length - 1 - i] ? myS.length - 1 - i : i;
			myS[minIndex] = minChar;
		}
	}
	return myS.join("");
};

console.log(makeSmallestPalindrome("egcfe"));
