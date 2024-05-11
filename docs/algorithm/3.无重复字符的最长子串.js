/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let maxLen = 0;
  let charMap = new Map();
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (charMap.has(char)) {
      left = Math.max(left, charMap.get(char) + 1);
    }
    maxLen = Math.max(maxLen, right - left + 1);
    charMap.set(char, right);
  }
  return maxLen;
};
// @lc code=end

