---
title: 变量和类型
---

## 1.  Js数据类型

<details>
<summary>点击查看答案</summary>

Js变量包含**基本类型**和**引用类型**。

| 基本类型  | 引用类型                |
| --------- | ----------------------- |
| Undefined | Object                  |
| Null      | Function                |
| Boolean   | Date                    |
| String    | RegExp                  |
| Number    | Math（单体内置类型）    |
| Symbol    | Global（单体内置类型）  |
| BigInt    | Boolean（基本包装类型） |
|           | Number（基本包装类型）  |
|           | String（基本包装类型）  |

</details>

## 2. 基本类型和数据类型在内存中的具体储存形式

<details>
<summary>点击查看答案</summary>

基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中。

引用类型的值是对象，保存在堆内存中。

</details>

## 3.  Js对象的底层数据结构是什么？

<details>
<summary>点击查看答案</summary>

散列表（哈希表）

</details>

## 4.  Js判断数据类型方法

<details>
<summary>点击查看答案</summary>

1. `typeof`:
   - 基本类型除null以外均可以准确判断
   - `typeof null === 'object'`
   - 引用类型除function以外均判断为`object`
   - `typeof func === 'function'`

2. `instanceof`: 判断实例对象上的原型链上是否能找到构造函数的原型属性，即判断某个对象是否是另一对象的实例。缺点：只能判断引用类型。
3. `Object.prototype.toString.call()`: 最准确

</details>

## 5.  为什么`typeof null === 'object'`

<details>
<summary>点击查看答案</summary>

`不同的对象在底层都表示为二进制，`typeof`会将二进制的前三位为0判断为`object`，而null用二进制表示全为0，因此将`null`错误的判断为`object`。

</details>

## 6. `nul`和`undefined`的区别

<details>
<summary>点击查看答案</summary>

`undefined`表示变量已声明，但并未初始化。`typeof undefined === 'undefined'`

`null`通常用于已在保存对象的变量，但还没有真正的保存对象。`typeof null === 'object'`

</details>

## 7. 出现小数精度丢失的原因

<details>
<summary>点击查看答案</summary>

1. 小精度丢失原因：`Js`遵守JEEE 754规范，使用双精度存储，占用64bit。其中1bit表正负，52bit表示尾数，11bit表示指数。
2. `JavaScript`最大数字: `Number.MAX_VALUE`
3. `JavaScript`最大安全数字: `Number.MAX_SAFE_INTEGER`
4. 避免精度丢失的方法: 使用字符串传值

[点击查看详解](./numInJs)

</details>

## 8. 可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

[点击查看答案](./implicitConversion)

## 9. `Symbol`类型在实际开发中的应用，手动实现一个简单的`Symbol`
<details>
<summary>点击查看答案</summary>

应用:
  1. 用于对象中的唯一key，防止对象中的某个key不小心被改写或覆盖。
  2. 对象中以`Symbol`为key时，`for in`、`Json.stringify`等会跳过该属性，可以用于模拟私有属性。想要读取所有属性时，可以使用Reflect.ownKeys(obj)。
  3. 消除魔法值。

手动实现: [手写系列](./handleWrite)

</details>