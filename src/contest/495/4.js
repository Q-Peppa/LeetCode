/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const numberOfEdgesAdded = (n, edges) => {
	const parent = Array.from({ length: n }, (_, index) => index);
	const size = Array(n).fill(1);
	const xorToParent = Array(n).fill(0);
	let added = 0;

	/**
	 * @param {number} x
	 * @return {number[]}
	 */
	const find = (x) => {
		if (parent[x] === x) {
			return [x, 0];
		}

		const [root, xorToRoot] = find(parent[x]);
		xorToParent[x] ^= xorToRoot;
		parent[x] = root;
		return [parent[x], xorToParent[x]];
	};

	for (let i = 0; i < edges.length; i++) {
		const [u, v, w] = edges[i];
		let [rootU, xorU] = find(u);
		let [rootV, xorV] = find(v);

		if (rootU === rootV) {
			if ((xorU ^ xorV) === w) {
				added++;
			}
			continue;
		}

		if (size[rootU] < size[rootV]) {
			[rootU, rootV] = [rootV, rootU];
			[xorU, xorV] = [xorV, xorU];
		}

		parent[rootV] = rootU;
		xorToParent[rootV] = xorU ^ xorV ^ w;
		size[rootU] += size[rootV];
		added++;
	}

	return added;
};

// Time: O((n + m) * alpha(n)), where m = edges.length.
// Space: O(n).

console.log(
	numberOfEdgesAdded(3, [
		[0, 1, 1],
		[1, 2, 1],
		[0, 2, 1],
	]),
	'1',
	'ans is 2',
);
