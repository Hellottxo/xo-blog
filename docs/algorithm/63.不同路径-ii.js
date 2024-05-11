/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const robot = Array.from({ length: m }, () => new Array(n).fill(0));

  
  let vertical = false;
  for(let i = 0; i < m; i++) {
    let horizontal = false;
    for(let j = 0; j < n; j++) {
      if ([i, j].includes(0)) {
        robot[i][j] = obstacleGrid[i][j] || horizontal || vertical ? 0 : 1;
        i === 0 && obstacleGrid[i][j] === 1 && (horizontal = true);
        j === 0 && obstacleGrid[i][j] === 1 && (vertical = true);
      } else {
        robot[i][j] = obstacleGrid[i][j] ? 0 : (robot[i - 1][j] + robot[i][j - 1]);
      }
    }
  }
  return robot[m - 1][n - 1];
};
// @lc code=end

