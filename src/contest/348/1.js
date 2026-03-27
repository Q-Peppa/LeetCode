import _ from 'lodash';

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = (s) => Object.keys(_.countBy(s)).length;

console.log(minimizedStringLength('aaabc'));
console.log(minimizedStringLength('cbbd'));
console.log(minimizedStringLength('dddaaa'));
