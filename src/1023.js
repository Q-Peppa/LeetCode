var camelMatch = function (queries, pattern) {
  return queries.map((query) => {
    let i = 0;
    for (let j = 0; j < query.length; j++) {
      if (i < pattern.length && query[j] === pattern[i]) {
        i++;
      } else if (query[j] < 'a') {
        return false;
      }
    }
    return i === pattern.length;
  });
};
