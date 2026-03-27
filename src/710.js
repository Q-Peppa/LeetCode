// 710. Random Pick with Blacklist
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
const Solution = function (n, blacklist) {
	this.b2w = new Map();
	const m = blacklist.length;
	this.bound = n - m;
	const block = new Set();
	for (const b of blacklist) {
		if (b >= this.bound) {
			block.add(b);
		}
	}
	let w = this.bound;
	for (const b of blacklist) {
		if (b < this.bound) {
			while (block.has(w)) {
				w++;
			}
			this.b2w.set(b, w);
			w++;
		}
	}
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
	const r = Math.floor(Math.random() * this.bound);
	return this.b2w.has(r) ? this.b2w.get(r) : r;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
