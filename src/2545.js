// 2545. 根据第 K 场考试的分数排序 - 力扣（LeetCode）
// 班里有 m 位学生，共计划组织 n 场考试。给你一个下标从 0 开始、大小为 m x n 的整数矩阵 score ，
// 其中每一行对应一位学生，而 score[i][j] 表示第 i 位学生在第 j 场考试取得的分数。
// 矩阵 score 包含的整数互不相同。  另给你一个整数 k 。
// 请你按第 k 场考试分数从高到低完成对这些学生（矩阵中的行）的排序。  返回排序后的矩阵。
// https://leetcode.cn/problems/sort-the-students-by-their-kth-score/description/#:~:text=%E7%8F%AD%E9%87%8C%E6%9C%89,%E5%90%8E%E7%9A%84%E7%9F%A9%E9%98%B5%E3%80%82
//
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  return _.orderBy(score, [k], 'desc');
};
