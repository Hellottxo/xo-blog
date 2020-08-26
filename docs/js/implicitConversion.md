# 隐式转换

## 1. (+)操作符

```js
1 + ''
1 + '1'
[] + 1
{} + 1
1 + {}
1 + true
1 + false
1 + null
1 + undefined
1 + NaN
'1' + NaN
```

<details>
<summary>点击查看答案</summary>

```js
1 + '' // '1'
1 + '1' // '11'
[] + 1 // '1'
{} + 1 // 1
1 + {} // '1[object Object]'
1 + true // 2
1 + false // 1
1 + null // 1
1 + undefined // NaN
```
</details>

1. Number + String 会将Number转换为String相加
2. Array + String 会执行Object.prototype.toString.call(Array)

## 2. (-)操作符
```js
1 - '1'
- '1'
'222' - '111'
1 - []
[] - 1
[] - '1'
{} - 1
1 - {}
1 - true
false - 1
1 - null
1 - undefined
```

<details>
<summary>点击查看答案</summary>

```js
1 - '1'
- '1'
'222' - '111'
1 - []
[] - 1
[] - '1'
{} - 1
1 - {}
1 - true
false - 1
1 - null
1 - undefined
```
</details>