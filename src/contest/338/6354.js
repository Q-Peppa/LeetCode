/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
	if (k <= numOnes) return k;
	if (k <= numOnes + numZeros) return numOnes;
	if (k <= numOnes + numZeros + numNegOnes)
		return numOnes - (k - numOnes - numZeros);
	return undefined;
};
