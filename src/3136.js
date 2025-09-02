/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  return (
    word &&
    word.length > 2 &&
    !word.match(/[^0-9a-zA-Z]/) &&
    word.match(/a|e|i|o|u/i) !== null &&
    word.match(/[bcdfghjklmnpqrstvwxyz]/gi) !== null
  );
};
