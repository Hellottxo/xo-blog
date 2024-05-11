/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentCount = nums[0];
  let globalCount = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentCount = Math.max(currentCount + nums[i], nums[i]);
    globalCount = Math.max(globalCount, currentCount);
  }
  return globalCount;
};
// @lc code=end

