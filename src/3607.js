/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
const processQueries = (c, connections, queries) => {
	const uf = new UnionFind(c + 1);
	const heap = {}; // root -> PriorityQueue
	const online = Array(c + 1).fill(true);
	for (let i = 1; i <= c; i++) {
		heap[i] = new PriorityQueue((a, b) => a - b);
		heap[i].push(i);
	}

	function mergeHeap(rootA, rootB) {
		// 将 B 的堆全部倒进 A
		while (!heap[rootB].isEmpty()) {
			heap[rootA].push(heap[rootB].pop());
		}
		delete heap[rootB];
	}

	for (const [x, y] of connections) {
		const rx = uf.find(x);
		const ry = uf.find(y);
		if (rx !== ry) {
			const newRoot = uf.union(rx, ry);
			const oldRoot = newRoot === rx ? ry : rx;
			mergeHeap(newRoot, oldRoot);
		}
	}

	const res = [];
	for (const [query, nodeId] of queries) {
		if (query === 1) {
			if (online[nodeId]) {
				res.push(nodeId);
			} else {
				const r = uf.find(nodeId);
				while (!heap[r].isEmpty() && !online[heap[r].front()]) {
					heap[r].pop();
				}
				if (heap[r].isEmpty()) {
					res.push(-1);
				} else {
					res.push(heap[r].front());
				}
			}
		} else {
			online[nodeId] = false;
		}
	}

	return res;
};

class UnionFind {
	constructor(n) {
		this.parent = new Array(n);
		this.rank = new Array(n).fill(0);
		for (let i = 0; i < n; i++) {
			this.parent[i] = i;
		}
	}
	find(x) {
		if (this.parent[x] !== x) {
			this.parent[x] = this.find(this.parent[x]);
		}
		return this.parent[x];
	}
	union(x, y) {
		const rx = this.find(x);
		const ry = this.find(y);
		if (rx === ry) return rx;
		if (this.rank[rx] < this.rank[ry]) {
			this.parent[rx] = ry;
			return ry;
		} else if (this.rank[rx] > this.rank[ry]) {
			this.parent[ry] = rx;
			return rx;
		} else {
			this.parent[ry] = rx;
			this.rank[rx]++;
			return rx;
		}
	}
	connected(x, y) {
		return this.find(x) === this.find(y);
	}
}
