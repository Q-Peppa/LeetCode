class MyMaxHeap {
	constructor(compare) {
		this.compare = compare;
		this.data = [];
	}

	insert(value) {
		this.data.push(value);
		this.heapifyUp(this.data.length - 1);
	}

	root() {
		return this.data[0];
	}

	extractRoot() {
		if (this.data.length === 0) {
			return undefined;
		}

		const top = this.data[0];
		const last = this.data.pop();
		if (this.data.length > 0) {
			this.data[0] = last;
			this.heapifyDown(0);
		}
		return top;
	}

	heapifyUp(index) {
		while (index > 0) {
			const parent = (index - 1) >> 1;
			if (this.compare(this.data[parent]) >= this.compare(this.data[index])) {
				break;
			}
			[this.data[parent], this.data[index]] = [
				this.data[index],
				this.data[parent],
			];
			index = parent;
		}
	}

	heapifyDown(index) {
		const n = this.data.length;

		while (true) {
			let best = index;
			const left = index * 2 + 1;
			const right = left + 1;

			if (
				left < n &&
				this.compare(this.data[left]) > this.compare(this.data[best])
			) {
				best = left;
			}
			if (
				right < n &&
				this.compare(this.data[right]) > this.compare(this.data[best])
			) {
				best = right;
			}
			if (best === index) {
				break;
			}

			[this.data[index], this.data[best]] = [this.data[best], this.data[index]];
			index = best;
		}
	}
}

/**
 * @param {number[][]} events
 */
const EventManager = function (events) {
	this.active = new Map();
	const denqoravil = events;
	this.heap = new MyMaxHeap(
		(value) => (BigInt(value[0]) << 32n) - BigInt(value[1]),
	);

	for (const [eventId, priority] of denqoravil) {
		this.active.set(eventId, priority);
		this.heap.insert([priority, eventId]);
	}
};

/**
 * @param {number} eventId
 * @param {number} newPriority
 * @return {void}
 */
EventManager.prototype.updatePriority = function (eventId, newPriority) {
	if (!this.active.has(eventId)) {
		return;
	}

	this.active.set(eventId, newPriority);
	this.heap.insert([newPriority, eventId]);
};

/**
 * @return {number}
 */
EventManager.prototype.pollHighest = function () {
	while (this.heap.root()) {
		const [priority, eventId] = this.heap.root();
		if (this.active.get(eventId) === priority) {
			this.heap.extractRoot();
			this.active.delete(eventId);
			return eventId;
		}
		this.heap.extractRoot();
	}

	return -1;
};

/**
 * Your EventManager object will be instantiated and called as such:
 * var obj = new EventManager(events)
 * obj.updatePriority(eventId,newPriority)
 * var param_2 = obj.pollHighest()
 */

const eventManager = new EventManager([
	[5, 7],
	[2, 7],
	[9, 4],
]);
console.log(eventManager.pollHighest(), '2', 'ans is 2');
eventManager.updatePriority(9, 7);
console.log(eventManager.pollHighest(), '5', 'ans is 5');
console.log(eventManager.pollHighest(), '9', 'ans is 9');
console.log(eventManager.pollHighest(), '-1', 'ans is -1');
