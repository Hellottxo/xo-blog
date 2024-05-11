/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let charMap = new Map();
  for (let char of t) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let count = 0;
  let minStr = '';
  while (right < s.length) {
    let c = s[right];
    if (charMap.has(c)) {
      charMap.set(c, charMap.get(c) - 1);
      if (charMap.get(c) === 0) count++;
    }
    while(count === charMap.size) {
      const len = right - left + 1;
      minStr = (minStr === '' || minStr.length > len) ? s.substring(left, right + 1) : minStr;
      const leftChar = s[left];
      if (charMap.has(leftChar)) {
        charMap.set(leftChar, charMap.get(leftChar) + 1);
        if (charMap.get(leftChar) > 0) count--;
      }
      left++;
    }
    right++;
  }
  return minStr;
};
// @lc code=end

