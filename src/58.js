/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
	s = s.trim();
	s = s.replaceAll(/\s+/g, ' ');
	return s.split(' ').at(-1).length;
};
