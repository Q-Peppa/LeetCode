/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
	let ans = 0;
	while (mainTank >= 5) {
		mainTank -= 5;
		ans += 5;
		if (additionalTank > 0) {
			additionalTank--;
			mainTank++;
		}
	}
	if (mainTank > 0) {
		ans += mainTank;
	}
	return ans * 10;
};

console.log(distanceTraveled(5, 10));
console.log(distanceTraveled(1, 2));
