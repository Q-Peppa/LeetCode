/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
  if (s.length <= 2) {
    switch (s) {
      case '00':
      case '11':
        return 0;
    }
    return 1;
  }
  let res = 0;
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) res++;
  }
  return res;
};
