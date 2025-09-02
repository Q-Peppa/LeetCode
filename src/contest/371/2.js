/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function (access_times) {
	const map = {};
	const diffMinuets = (a, b) => {
		// a 0532 b 0621
		const a_h = a.slice(0, 2);
		const a_m = a.slice(2);
		const b_h = b.slice(0, 2);
		const b_m = b.slice(2);
		const a_min = a_h * 60 + a_m * 1;
		const b_min = b_h * 60 + b_m * 1;
		return b_min - a_min;
	};
	const g = () => {
		for (const [name, time] of access_times) {
			if (!map[name]) map[name] = [];
			map[name].push(time);
		}
	};
	g(access_times);
	const res = [];
	for (let name in map) {
		if (map[name].length < 3) continue;
		map[name].sort((a, b) => diffMinuets(a, b));
		for (let i = 2; i < map[name].length; i++) {
			if (diffMinuets(map[name][i], map[name][i - 2]) < 60) {
				res.push(name);
				break;
			}
		}
	}
	return res;
};
console.log(
	findHighAccessEmployees([
		["a", "0549"],
		["b", "0457"],
		["a", "0532"],
		["a", "0621"],
		["b", "0540"],
	]),
);
