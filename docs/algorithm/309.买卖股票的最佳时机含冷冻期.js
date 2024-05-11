/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let cash = 0;
  let hold = -prices[0];
  for (let i = 0; i < prices.length; i++) {
    cash = Math.max(hold + prices[i], cash);
    hold = Math.max(hold, cash - prices[i]);
  }
  return cash;
};
// @lc code=end

