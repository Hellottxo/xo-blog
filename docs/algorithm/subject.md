# 算法题记录

## 1. 洗牌算法

```js
/**
 * @param {array} arr
 * @return {array} arr
 */
function shuffle(arr) {
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        const index = ~~(Math.random() * (len - i)) + i;
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return arr;
}
```

## 2. 有效的括号
>给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。 
有效字符串需满足：  
左括号必须用相同类型的右括号闭合。  
左括号必须以正确的顺序闭合。  
注意空字符串可被认为是有效字符串。

```js
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const len = s.length;
    if (len % 2 > 0) return false;
    const dict = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    };
    const stack = [];
    for(let i = 0; i < len; i++) {
        if (dict[s[i]]) {
            stack.push(s[i]);
        } else {
            if (s[i] === dict[stack.slice(-1)]) {
                stack.pop();
            } else {
                return false
            }
        }
    }
    return stack.length === 0;
};
```
## 3. 斐波那契数列
>写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。
```js
/**
 * @param {number} n
 * @return {number}
 */
function fibonnaci(n) {
    if (n === 0) return 0;
    if (n < 3) return 1;
    return fibonnaci(n - 1) + fibonnaci(n - 2);
}
```
