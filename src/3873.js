/**
 * @param {number} n
 */
class DisjointSet {
	parent = new Int32Array(0);
	size = new Int32Array(0);

	/**
	 * @param {number} n
	 */
	constructor(n) {
		this.parent = new Int32Array(n);
		this.size = new Int32Array(n);

		for (let i = 0; i < n; i++) {
			this.parent[i] = i;
			this.size[i] = 1;
		}
	}

	/**
	 * @param {number} x
	 * @return {number}
	 */
	find(x) {
		while (this.parent[x] !== x) {
			this.parent[x] = this.parent[this.parent[x]];
			x = this.parent[x];
		}

		return x;
	}

	/**
	 * @param {number} a
	 * @param {number} b
	 * @return {void}
	 */
	union(a, b) {
		let rootA = this.find(a);
		let rootB = this.find(b);

		if (rootA === rootB) {
			return;
		}

		if (this.size[rootA] < this.size[rootB]) {
			[rootA, rootB] = [rootB, rootA];
		}

		this.parent[rootB] = rootA;
		this.size[rootA] += this.size[rootB];
	}
}

/**
 * @param {Map<number, number>} map
 * @param {number} value
 * @param {{ value: number }} nextId
 * @return {number}
 */
function getNodeId(map, value, nextId) {
	if (!map.has(value)) {
		map.set(value, nextId.value);
		nextId.value++;
	}

	return map.get(value);
}

/**
 * @param {number[][]} points
 * @return {number}
 */
const maxActivated = (points) => {
	const n = points.length;
	if (n === 0) {
		return 1;
	}

	const xId = new Map();
	const yId = new Map();
	const nextId = { value: 0 };

	for (const [x, y] of points) {
		getNodeId(xId, x, nextId);
		getNodeId(yId, y, nextId);
	}

	const dsu = new DisjointSet(nextId.value);

	for (const [x, y] of points) {
		dsu.union(xId.get(x), yId.get(y));
	}

	const componentSize = new Map();
	for (const [x] of points) {
		const root = dsu.find(xId.get(x));
		componentSize.set(root, (componentSize.get(root) ?? 0) + 1);
	}

	let largest = 0;
	let secondLargest = 0;
	for (const size of componentSize.values()) {
		if (size > largest) {
			secondLargest = largest;
			largest = size;
		} else if (size > secondLargest) {
			secondLargest = size;
		}
	}

	return largest + secondLargest + 1;
};

console.log(maxActivated([]), 'case 1', 'ans is 1');
console.log(maxActivated([[1, 1]]), 'case 2', 'ans is 2');
console.log(
	maxActivated([
		[1, 1],
		[1, 2],
		[3, 4],
	]),
	'case 3',
	'ans is 4',
);
console.log(
	maxActivated([
		[1, 1],
		[2, 2],
		[3, 3],
	]),
	'case 4',
	'ans is 3',
);
console.log(
	maxActivated([
		[1, 1],
		[1, 2],
		[2, 1],
		[2, 2],
	]),
	'case 5',
	'ans is 5',
);

// Time Complexity: O(n * alpha(n))
// Space Complexity: O(n)
