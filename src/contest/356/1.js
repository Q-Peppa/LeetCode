/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = (hours, target) =>
	hours.filter((h) => h >= target).length;
