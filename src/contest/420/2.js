/**
 * 100369. 字符至少出现 K 次的子字符串 I
 * 给你一个字符串 s 和一个整数 k，在 s 的所有子字符串中，请你统计并返回 至少有一个 字符 至少出现 k 次的子字符串总数。
 * 子字符串 是字符串中的一个连续、 非空 的字符序列。
 * 1 <= s.length <= 3000
 * 1 <= k <= s.length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function (s, k) {
	let res = 0,
		left = 0;
	let tracker = {};
	for (let i = 0; i < s.length; i++) {
		const cur = s[i];
		tracker[cur] = (tracker[cur] || 0) + 1;
		while (tracker[cur] >= k) {
			tracker[s[left]]--;
			left++;
		}
		res += left;
	}
	return res;
};
