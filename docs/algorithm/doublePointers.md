## 双指针

在 JavaScript 中，双指针技术主要用于数组或字符串操作，特别是当你需要用 O(n)时间复杂度来解决问题时。

下面是几个不同场景下双指针方法的例子：

### 对撞指针

当你需要在一个已排序的数组或字符串中找到一对特定的元素，使其和或者差满足一定条件时，你可以使用对撞指针方法。一般来说，一个指针从起始位置开始，另一个从末尾开始。

例子：找出一个已升序排序的数组中和为特定值的一对数字。

```js
const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left !== right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
    }
    if (sum > target) {
      right--;
    }
  }
  return [-1, -1];
};
```

### 快慢指针

当你需要在链表中找出环或者计算中点时，你可以使用快慢指针方法。慢指针每次移动一个节点，快指针每次移动两个节点。

例子：给你一个链表的头节点 head，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
如果链表中存在环 ，则返回 true 。 否则，返回 false 。

```js
// ListNode类的定义
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};
```

### 滑动窗口

滑动窗口是一种用于数组或字符串的常用算法，特别适合于解决连续数据区间的问题，如：

- 最长/最短子字符串或子数组问题
- 满足特定条件的连续数据区间问题
  滑动窗口算法可以让我们使用 O(N)的时间复杂度解决这些问题，其中 N 是输入数据的长度。滑动窗口的基本思想是维护一个窗口，根据问题的需要，这个窗口可以是固定大小，也可以是可变大小的。

#### 固定大小的窗口

累加和（也常被称作前缀和）是一种常见的算法技术，主要用来处理数组和字符串中的连续子序列或子数组问题：对于数组 nums，前缀和 prefixSum[i] 就是 nums[0] + nums[1] + ... + nums[i]。计算每个 prefixSum[i] 的过程可以在线性时间内完成。

为了方便查找任何子数组 nums[i...j] 的和，我们可以使用一个前缀和数组 prefixSum，其中 prefixSum[0] = 0，prefixSum[i] = prefixSum[i-1] + nums[i-1] 对所有 i > 0。这样，任何子数组的和 sum(i, j)（即 nums[i] 到 nums[j] 的总和）可以通过 prefixSum[j+1] - prefixSum[i] 快速计算，而不需要重复加法运算。

#### 可变大小的滑动窗口

涉及到子字符串问题时，滑动窗口的大小通常是可变的。
当窗口内的数据还不满足条件时，我们扩展（向右移动右边界）窗口。
一旦窗口满足条件，我们尝试收缩（向右移动左边界）窗口直到再次不满足条件，记录所有满足条件时的窗口的大小（或中间状态）以求出最优解。
如果问题涉及到区间的最大最小值、或者特定的字符计数，我们可能需要维护窗口内元素的计数或其他数据结构。

1. 长度最小的子数组
   给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

```js
const minSubArrayLen = (target, nums) => {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while(sum >= target) {
      minLen = math.Min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
```

2. 无重复字符的最长子串
   给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

```js
const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let charMap = new Map();
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    const rightNode = s[right];
    if (charMap.has(rightNode)) {
      left = Math.max(charMap.get(rightNode) + 1, left);
    }
    console.log(left, right);
    maxLen = Math.max(right - left + 1, maxLen);
    charMap.set(rightNode, right);
  }
  return maxLen;
};
```

3. 串联所有单词的子串：滑动窗口 + hash 表
   给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。

```js
const findSubstring = (s, words) => {
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
    while(wordCount < wordMap.size) {
      let word = s.slice(right, right + wordLen);
      currentMap.set(word, (currentMap.get(word) || 0) + 1);
      if (!wordMap.has(word) || currentMap.get(word) > wordMap.get(word)) {
        break;
      }
      wordCount++;
      right = right + wordLen;
    }
    if (wordCount === wordMap.size) res.push(i);
  }
  return res;
};
```

3. 最小覆盖子串

给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
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
      minStr = (minStr === '' || minStr.length > len) ? s.substring(left, right + 1);
      const leftChar = s[left];
      if (charMap.has(c)) {
        charMap.set(c, charMap.get(c) + 1);
        if (charMap.get(c) > 0) count--;
      }
      left++;
    }
    right++;
  }
  return minStr;
};
```
