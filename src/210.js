var findOrder = function (numCourses, prerequisites) {
	const map = new Array(numCourses).fill(0).map(() => []);
	let inDegree = new Array(numCourses).fill(0);
	for (const [v, w] of prerequisites) {
		map[w].push(v);
		inDegree[v]++;
	}
	// console.log('map', map);
	const q = [];
	for (let i = 0; i < numCourses; i++) {
		if (inDegree[i] === 0) q.push(i);
	}
	let res = [];
	// let index = 0;
	while (q.length) {
		const cur = q.shift();
		res.push(cur);
		for (const v of map[cur]) {
			--inDegree[v];
			if (inDegree[v] === 0) q.push(v);
		}
	}
	console.log(res);
	if (res.length === numCourses) return res;
	return [];
};

console.log(`test 1`, findOrder(2, [[1, 0]]));
console.log(
	`test 2`,
	findOrder(4, [
		[1, 0],
		[2, 0],
		[3, 1],
		[3, 2],
	]),
);
