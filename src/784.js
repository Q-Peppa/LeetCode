/**
 * 784. 字母大小写全排列
  给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。
  返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
 */
/**
 * 输入：s = "a1b2"
 * 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	// 判断字符 A = 65
	const ok = (c) => {
		return c.charCodeAt() >= 65;
	};
	// 大变小, 小变大
	const trans = (c) => {
		return String.fromCharCode(c.charCodeAt() ^ (1 << 5));
	};
	// 事先统计需要变化的位置
	const letter = [];
	for (let i = 0; i < s.length; i++) {
		if (ok(s[i])) letter.push(i);
	}
	const res = [];
	const dfs = (path, pos) => {
		// 此处要收集path 的 切片, 或者深拷贝, 要不然随着递归, path的指向会不挺变化 , 这样res只能收集到最后一次的数据了.
		res.push(path.slice());
		for (let i = pos; i < letter.length; i++) {
			const j = letter[i];
			// 此处的 j 就是需要变化的位置了, j位置上一定是字符, 不是数字
			path[j] = trans(path[j]);
			dfs(path, i + 1);
			path[j] = trans(path[j]);
		}
	};
	dfs([...s], 0);
	// 由于收集的是数组, 需要 map 成 String
	return res.map((e) => e.join(``));
};

console.log(letterCasePermutation("a1B2"));
console.log(letterCasePermutation("3z4"));
console.log(letterCasePermutation("12345"));
console.log(letterCasePermutation("a1b2c3d4e5f6"));
