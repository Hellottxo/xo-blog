/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const n = prices.length;
  if (k > n / 2) {
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
      maxProfit += Math.max(prices[i] - prices[i - 1], 0);
    }
    return maxProfit;
  }
  // i天j次持有或不持有股票的利润
  const hold = Array.from({ length: n }, (_, i) => Array.from({ length: k + 1 }, (_, j) => i === 0 ? -prices[0] : 0));
  const nothold = Array.from({ length: n }, () => new Array(k + 1).fill(0));
  

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      hold[i][j] = Math.max(hold[i - 1][j], nothold[i - 1][j - 1] - prices[i]);
      nothold[i][j] = Math.max(nothold[i - 1][j], hold[i - 1][j] + prices[i]);
    }
  }
  return nothold[n - 1][k];
};
// @lc code=end

