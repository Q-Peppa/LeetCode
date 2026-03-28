/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
const numberOfEmployeesWhoMetTarget = (hours, target) =>
	hours.filter((h) => h >= target).length;
