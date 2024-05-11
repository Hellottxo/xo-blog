/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const wordLen = words[0].length;
  const allWordLen = words.length * wordLen;
  const wordMap = new Map();
  const res = [];
  for(let word of words) {
    wordMap.set(word, (wordMap.get(word)|| 0) + 1);
  }

  for (let i = 0; i < s.length - allWordLen + 1; i++) {
    let right = i;
    let currentMap = new Map();
    let wordCount = 0;
    while(wordCount < words.length) {
      let word = s.slice(right, right + wordLen);
      currentMap.set(word, (currentMap.get(word) || 0) + 1);
      if (!wordMap.has(word) || currentMap.get(word) > wordMap.get(word)) {
        break;
      }
      wordCount++;
      right += wordLen;
      
    }
    if (wordCount === words.length) res.push(i);
  }
  return res;
};
// @lc code=end

