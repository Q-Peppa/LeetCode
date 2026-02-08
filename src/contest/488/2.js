var mergeAdjacent = function (nums) {
  const stack = [];
  for (const num of nums) {
    if (stack.length > 0 && stack[stack.length - 1] === num) {
      stack.pop();
      stack.push(num * 2);
      while (
        stack.length >= 2 &&
        stack[stack.length - 1] === stack[stack.length - 2]
      ) {
        const val = stack.pop();
        stack.pop();
        stack.push(val * 2);
      }
    } else {
      stack.push(num);
    }
  }
  return stack;
};
