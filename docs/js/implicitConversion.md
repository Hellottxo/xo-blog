# 隐式转换

## 常见的发生隐式转换的场景
1. 使用运算符时，如(+)/(==)运算符等等
2. if(...) / while(...)条件语句中

## 常见的转换规则
### 1. (+) 运算符

**(+) 运算符基本转换规则如下**：
1. Number + String -> Number.toString() + String
2. Object/Array/Boolean + String -> (Object/Array/Boolean).toString() + String
3. Number + Object/Array -> Number + Number((Object/Array).toString())
4. \+ any -> + Number(any.toString())
5. {} + any -> + any

```js
+ '1'
[] + 1
{} + 1
1 + {}
{} + {}
{} + ({})
1 + null
```

<details>
<summary>点击查看答案</summary>

```js
+ '1' // 1
[] + 1 // 1
{} + 1 // 1
1 + {} // '1[object Object]'
{} + {} // '[object Object][object Object]'
{} + ({}) // NaN
1 + null // 1
```
</details>

### 2. (-) (/) (*) 运算符、(>) (<) (>=) (<=)比较符

**(-) 运算符基本转换规则如下**：
  1. Number - Object/Array/Boolean -> Number - Number((Object/Array/Boolean.toString()))
  2. Number - String -> Number - Number(String)
  3. \- any -> - Number(any.toString())
  4. {} - any -> - any

```js
- '1'
'222' - '111'
1 - []
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
- '1' // -1
'222' - '111' // 111
1 - [] // 1
{} - 1 // -1
1 - {} // NaN
1 - true // 0
false - 1 // -1
1 - null // 1
1 - undefined // NaN
```
</details>

通常情况下，/、* 、> 、< 、>= 、<= 保持与(-)规律一致，但/、* 、> 、< 、>= 、<= 的使用需要满足两边同时有参数，否则就会报错：
```js
{} * 1 
// Uncaught SyntaxError: Unexpected token '*'
{} > 1
// Uncaught SyntaxError: Unexpected token '>'
```
### 3. (==) 运算符
**(==) 运算符基本转换规则如下**：
1. Number == otherType -> Number == Number(otherType)
2. otherType == Boolean -> otherType == Number(Boolean)

```js
[] == false
[] == []
[] == ![]
[] == ''
'0' == 0
'0' == false
null == false
undefined == false
null == undefined
```
<details>
<summary>点击查看答案</summary>

```js
[] == false // true
[] == [] // false
[] == '' // true
'0' == 0 // true
'0' == false // true
null == false // false
undefined == false // false
null == undefined // true
```
</details>

那么`[] == ![]`是`true`还是`false`呢？
<details>
<summary>点击查看答案</summary>

```js
[] == ![] // true
// ！运算符优先级高于 ==，所以 [] == ![] -> [] == false
```

</details>

### 5. (||) (&&)逻辑运算符
**逻辑运算符基本转换规则如下**：
1. baseType &&/|| baseType -> Boolean(baseType) &&/|| Boolean(baseType)
2. referenceType &&/|| referenceType -> Boolean(referenceType.toString())
 &&/|| Boolean(referenceType.toString())

需要注意的是：逻辑运算符虽然在比较过程中将参数转换为了`boolean`，但返回的结果仍是原参数。
```js
0 || 2 // 2
'11' || 0 // '11'
0 && 2 // 0
'11' && 0 // '11'
```

### 4. if(...) / while(...)条件语句
**if(...) / while(...)条件语句中基本转换规则如下**：
1. baseType -> Boolean(baseType)
2. referenceType -> Boolean(referenceType.toString()) 

## 如何避免或巧妙利用

### 避免：
1. 使用相等运算符时，尽量使用严格相等(===)
2. 使用类型检查

### 巧妙利用：
```js
(1).toString(); -> 1 + '' = '1';

if (arr.length > 0) -> if (arr.length)

const res = obj.name ? obj.name : 'test' -> obj.name || 'test'

const map = null;
let a;
if (map) {
  a = map.name;
}
->
const a = map && map.name;
```
