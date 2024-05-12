function countAndSay(n) {
  let res = '1';
  let fast = 0;
  let temp = '';
  while (--n) {
    for (let i = 0; i < res.length; ++i) {
      while (res[i] === res[fast]) {
        ++fast;
      }
      temp += fast - i;
      temp += res[i];
      i = fast - 1;
    }
    res = temp;
    temp = '';
    fast = 0;
  }

  return res;
}
