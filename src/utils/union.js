class Union {
	// find & union
	constructor(length) {
		this.size = length;
		this.parent = new Array(length);
		this.weights = new Array(length);
		for (let i = 0; i < length; i++) {
			this.weights[i] = i;
			this.parent[i] = i;
		}
	}
	find(v) {
		let p = this.parent;
		while (v !== p[v]) {
			p[v] = p[p[v]];
			v = p[v];
		}
		return v;
	}
	union(x, y) {
		let f1 = this.find(x);
		let f2 = this.find(y);
		if (f1 === f2) return;
		this.size--;
		if (this.weights[f1] >= this.weights[f2]) {
			this.parent[f2] = f1;
			this.weights[f1] += this.weights[f2];
		} else {
			this.weights[f1] = f2;
			this.weights[f2] += this.weights[f1];
		}
	}
	query(x) {
		return this.find(x);
	}
	isSame(x, y) {
		return this.find(x) === this.find(y);
	}
}

class DirectedCycle {
	marked = [];
	edgeTo = [];
	cycle = null;
	onStack = [];
	graph = [];
	constructor(G) {
		this.graph = G;
		for (let i = 0; i < G.length; i++) {
			if (!this.marked[i]) this.dfs(G, i);
		}
	}
	dfs(G, v) {
		this.onStack[v] = true;
		this.marked[v] = true;
		for (let w of G[v]) {
			if (this.hasCycle()) return;
			else if (!this.marked[w]) {
				this.edgeTo[w] = v;
				this.dfs(G, w);
			} else if (this.onStack[w]) {
				this.cycle = [];
				for (let x = v; x !== w; x = this.edgeTo[x]) {
					this.cycle.push(x);
				}
				this.cycle.push(w);
				this.cycle.push(v);
			}
		}
		this.onStack[v] = false;
	}
	hasCycle() {
		return this.cycle !== null;
	}
	flody() {
		const graph = this.graph;
		const n = graph.length - 1;
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				for (let k = 0; k < n; k++) {
					this.graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
				}
			}
		}
	}
}
