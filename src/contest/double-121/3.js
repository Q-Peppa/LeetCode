import _ from "lodash";
var minimumOperationsToMakeEqual = function (x, y) {
	if (x <= y) return y - x;

	const query = (a) => {
		if (a <= y) return y - a;
		let ans = a - y;
		ans = Math.min(
			ans,
			query(Math.floor(a / 5) + 1 + (a % 5)),
			query(Math.floor(a / 5) + 1 + 5 - (a % 5)),
		);
		ans = Math.min(
			ans,
			query(Math.floor(a / 11) + 1 + (a % 11)),
			query(Math.floor(a / 11) + 1 + 11 - (a % 11)),
		);
		return ans;
	};
	return _.memoize(query)(x);
};

console.log(minimumOperationsToMakeEqual(26, 1));
console.log(minimumOperationsToMakeEqual(54, 2));
console.log(minimumOperationsToMakeEqual(1, 1));
console.log(minimumOperationsToMakeEqual(25, 30));
console.log(minimumOperationsToMakeEqual(120, 11)); // 2
console.log(minimumOperationsToMakeEqual(17, 8)); // 2
console.log(minimumOperationsToMakeEqual(18, 6)); // 2
console.log(minimumOperationsToMakeEqual(89, 57)); // 2;
