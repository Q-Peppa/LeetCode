/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function (processorTime, tasks) {
  tasks.sort((a, b) => b - a);
  tasks = _.chunk(tasks, 4);
  processorTime.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < processorTime.length; i++) {
    const ele = processorTime[i];
    const ta = tasks[i];
    // console.log(ele, ta)
    if (ele + ta.at(0) > max) max = ele + ta.at(0);
  }
  return max;
};
