const path = require('node:path');
/**
 * @param {string} p
 * @return {string}
 */
var simplifyPath = function (p) {
  return path.resolve(p);
};
