/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const prefix = {};
  const ans = [];
  for (let i = 0; i < names.length; i++) {
    let temp = names[i];
    if (prefix[temp]) {
      let now = temp + '(' + prefix[temp] + ')';
      while (prefix[now]) {
        prefix[temp]++;
        now = temp + '(' + prefix[temp] + ')';
      }
      prefix[now] = 1;
      ans.push(now);
    } else {
      prefix[temp] = 1;
      ans.push(temp);
    }
  }
  return ans;
};

console.log(getFolderNames(['pes', 'fifa', 'gta', 'pes(2019)']));
console.log(getFolderNames(['gta', 'gta(1)', 'gta', 'avalon']));
console.log(
  getFolderNames([
    'onepiece',
    'onepiece(1)',
    'onepiece(2)',
    'onepiece(3)',
    'onepiece',
  ]),
);
console.log(getFolderNames(['wano', 'wano', 'wano', 'wano']));
console.log(getFolderNames(['kaido', 'kaido(1)', 'kaido', 'kaido(1)']));
