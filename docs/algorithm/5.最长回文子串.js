/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(false));
  let str = '';
  for(let i = n - 1; i >= 0; i--) {
    for(let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        if (!str.length || ((j - i + 1) > str.length)) {
          str = s.slice(i, j + 1);
        }
      }
    }
  }
  return str;
};
// @lc code=end

