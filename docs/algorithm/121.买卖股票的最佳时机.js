/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrices = prices[0];
  for(let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(prices[i] - minPrices, maxProfit);
    minPrices = Math.min(prices[i], minPrices);
  }
  return maxProfit;
};
// @lc code=end

