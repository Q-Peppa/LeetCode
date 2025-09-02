class MaxPriorityQueue {
	constructor() {
		this._heap = [];
	}
	enqueue(value) {
		this._heap.push(value);
		this._heapifyUp();
	}
	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		const value = this._heap[0];
		const last = this._heap.pop();
		if (this._heap.length > 0) {
			this._heap[0] = last;
			this._heapifyDown();
		}
		return value;
	}
	_heapifyUp() {
		let index = this._heap.length - 1;
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this._heap[parentIndex] >= this._heap[index]) {
				break;
			}
			this._swap(parentIndex, index);
			index = parentIndex;
		}
	}
	_heapifyDown() {
		let index = 0;
		const lastIndex = this._heap.length - 1;
		while (index < lastIndex) {
			const leftChildIndex = index * 2 + 1;
			const rightChildIndex = index * 2 + 2;
			let largerChildIndex = leftChildIndex;
			if (
				rightChildIndex <= lastIndex &&
				this._heap[rightChildIndex] > this._heap[leftChildIndex]
			) {
				largerChildIndex = rightChildIndex;
			}
			if (
				largerChildIndex > lastIndex ||
				this._heap[largerChildIndex] <= this._heap[index]
			) {
				break;
			}
			this._swap(index, largerChildIndex);
			index = largerChildIndex;
		}
	}
	_swap(i, j) {
		const temp = this._heap[i];
		this._heap[i] = this._heap[j];
		this._heap[j] = temp;
	}

	isEmpty() {
		return this._heap.length === 0;
	}
	size() {
		return this._heap.length;
	}
}

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxKelements = function (nums, k) {
	const pq = new MaxPriorityQueue();
	nums.forEach((num) => {
		pq.enqueue(num);
	});
	let s = 0;
	while (k > 0) {
		let temp = pq.dequeue();
		// console.log(temp);
		s += temp;
		pq.enqueue(Math.ceil(temp / 3));
		k--;
	}

	console.log(pq);
	return s;
};
console.log(maxKelements([10, 10, 10, 10, 10], 5));
