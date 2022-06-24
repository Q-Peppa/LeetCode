/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  while (tx && ty && tx != sx && ty != sy) {
    if (tx > ty) tx %= ty
    else ty %= tx
  }
  if (tx == sx && ty == sy) return true
  if (tx == sx && ty > sy && (ty - sy) % sx == 0) return true
  if (ty == sy && tx > sx && (tx - sx) % sy == 0) return true
  return false
}
