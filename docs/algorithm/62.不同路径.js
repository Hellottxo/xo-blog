/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let path = Array.from({ length: m }, (_, i) => {
    if (i === 0) return new Array(n).fill(1);
    return Array.from({ length: n }, (_, ci) => ci === 0 ? 1: 0);
  });
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      path[i][j] = path[i - 1][j] + path[i][j - 1];
    }
  }
  return path[m - 1][n - 1];
};
// @lc code=end

