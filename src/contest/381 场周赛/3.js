import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
	let count = {};
	for (let i = 0; i < word.length; i++) {
		count[word[i]] = (count[word[i]] || 0) + 1;
	}
	let q = new MaxPriorityQueue({
		compare: (a, b) => b.priority - a.priority,
	});
	for (let k in count) {
		q.enqueue({
			char: k,
			priority: count[k],
		});
	}
	const l = q.size();
	let ans = 0,
		time = 1;
	for (let i = 0; i < l; i++) {
		if (i !== 0 && i % 8 === 0) time++;
		ans += time * q.dequeue().priority;
	}
	console.log(ans);
	return ans;
};

minimumPushes("abcde");
minimumPushes("xyzxyzxyzxyz");
minimumPushes("aabbccddeeffgghhiiiiii");
