/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  let total = length * width * height;
  const max = 10 ** 9;
  let isBulky =
    length >= 10 ** 4 || width >= 10 ** 4 || height >= 10 ** 4 || total >= max;
  let isHeavy = mass >= 100;
  if (isBulky && isHeavy) return 'Both';
  if (!isBulky && !isHeavy) return 'Neither';
  return isBulky ? 'Bulky' : 'Heavy';
};
