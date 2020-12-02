---
title: this的指向
---

除了在函数定义中显式声明的参数之外，函数调用时还会传递两个隐式的参数：arguments和this。**this的指向不仅是由定义函数的方式和位置决定的，同时还严重受到函数调用方式的影响。**
<!-- more -->

函数调用的方式通常分为四种：直接调用；作为方法调用；通过`apply()`/`call()`的方式调用；作为构造函数调用。为了对这四种调用方式有更清晰的认知，我们总是用直接调用的方式来进行对比。
## 1. 直接调用

```js
function setName() {
  this.name = 'Betty';
}
setName();
console.log(window.name); // 'Betty'

function setStrictName() {
  'use strict';
  this.name = 'Betty';
}
setStrictName(); // Uncaught TypeError: Cannot set property 'name' of undefined
```

非严格模式下，`this`的指向绑定到window；严格模式下，`this`的指向undefined。

## 2. 作为方法调用

```js
const obj = {
  name: 'Mary',
  setName: function () {
  	this.name = 'Betty';
	}
};
obj.setName();
console.log(obj.name); // 'Betty'
```

从上述例子可以看到：将`obj`的`setName`属性指向一个匿名函数，并执行`obj.setName()`时，匿名函数中的`this`指向了调用的对象`obj`。

我们稍微改造一下上一个例子：

```js
const obj = {
  name: 'Mary',
  setName: function () {
  	this.name = 'Betty';
	}
};
const { setName } = obj;
setName();
console.log(obj.name); // 'Mary'
```

同样是执行obj对象中的setName方法，为什么在这个例子中，匿名函数中的`this`指向了window？

很显然，在这个例子中，我们使用赋值语句，创建一个`setName`变量，并将`obj.setName`赋值给`setName`，并执行`setName()`。

发现没有，我们执行的只是一个**直接调用**操作，让我们默默复习一遍：

**函数作为函数直接调用时，非严格模式下，this的指向绑定到window；严格模式下，this的指向undefined。**

## 3. 通过`apply()`/`call()`的方式调用

```js
function setName(name) {
  this.name = name;
}
const obj = {
  name: 'Mary'
};
setName.call(obj, 'Betty'); // 使用obj作为setName执行时的this值
console.log(obj.name); // 'Betty'
```

`apply()`/`call()`是Js内置的`Function`对象提供的方法，用于显式的绑定函数调用时的`this`值。

`apply()`使用一个指定的 `this` 值和单独给出的一个参数数组来调用一个函数。

`call()`方法的作用和` apply()` 方法类似，区别就是`call()`方法接受的是**参数列表**，而`apply()`方法接受的是**一个参数数组**。

## 4. 作为构造函数调用

```js
function Person(name) {
  this.name = name;
}

const betty = new Person('Betty');
console.log(betty.name); // 'Betty';
```

什么是构造函数？

使用`new`操作符来调用一个普通函数，就会把这个函数变成构造函数。

这和`this`有什么关系？

还是让我们来看看`new`具体做了些什么吧：

1. 以构造函数为原型创建一个新的对象；
2. 以新对象为执行上下文，执行构造函数；
3. 返回新对象。

**以新对象为执行上下文，执行构造函数。** 这不就是`call()`和`apply()`的工作？用伪代码来写，相当于执行了一个`constructor.call(newObj)`。

显然，**函数作为构造函数调用时，`this`指向实例化的新对象。**

## 箭头函数和bind()

除了上述函数的调用方法外，函数的定义方式同样影响着`this`的指向。

1. **箭头函数**不会创建自己的`this`,它只会从自己的作用域链的上一层继承`this`。 

> ⚠️1. 箭头函数没有prototype；2. 使用`call()`/`apply()`调用时，第一个参数无效。 3. 使用`new`操作符调用，会抛出错误。

```js
function Person() {
  this.name = '';
  const setName1 = () => {
    this.name = 'Apple';
  }
  function setName2() {
    this.name = 'Mary';
  }
  setName1();
  setName2();
}
const betty = new Person();
console.log(betty.name); // 'Apple'
console.log(window.name); // 'Mary'
```

- `setName1()`是箭头函数，`this`继承于作用域链上层，即继承于实例对象`betty`
- `setName2()`是直接调用方式调用的函数，再复习一遍：**函数作为函数直接调用时，非严格模式下，this的指向绑定到window；严格模式下，this的指向undefined。**

2.  `bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。与`apply()`和`call()`不同，`bind()`返回一个原函数的拷贝，并拥有指定的this值和初始参数。

```js
function setName(name) {
  this.name = name;
}
const obj = {
  name: ''
};
const bindSetName = setName.bind(obj);
bindSetName('Mary');
console.log(obj.name); // 'Mary'
```

## this绑定的优先级

那么，这四种调用方式，`this`绑定的优先级是怎样的呢？

**直接调用**，显然不具备可比性，当我们满足直接调用的要求时，必然不满足其他调用的方式。

那么**作为方法调用**，和**使用`apply()`/`call()`调用**，谁的优先级更高呢？

```js
function setName(name) {
  this.name = name;
}
const obj1 = {
  name: 'Mary',
  setName
};
const obj2 = {
  name: 'Apple'
};
obj1.setName.call(obj2, 'Betty'); 
console.log(obj1.name); // 'Mary'
console.log(obj2.name); // 'Betty'
```

`apply()`/`call()`选手获胜！💯

再来看看**作为构造函数调用**和**使用`apply()`/`call()`调用**两者的比较。因为`new`操作符和`call()`/`apply()`无法一起使用，我们使用功能相似的`bind()`来进行比较。

```js
function setName(name) {
  this.name = name;
}
const obj1 = {
  name: 'Mary',
};
const copySetName = setName.bind(obj1);
const apple = new copySetName('Apple');
console.log(obj1.name); // 'Mary'
console.log(apple.name); // 'Apple'
```

看来，即使我们偷偷的将`copySetName`的`this`绑定到`obj1`，`new`操作符依旧坚持工作着。💯

## 总结

1. 函数调用的方式通常分为四种：直接调用；作为方法调用；通过`apply()`/`call()`/`bind()`的方式调用；作为构造函数调用。
2. 函数的调用方式影响了`this`的取值：

- 直接调用：非严格模式下，`this`的指向绑定到window；严格模式下，`this`的指向undefined；
- 作为方法调用：`this`指向调用的对象；
- 通过`apply()`/`call()`/`bind()`的方式调用: `this`指向传入的第一个参数；
- 作为构造函数调用：`this`指向实例对象本身。

3. 函数的定义方式同样影响了`this`的取值：

- 箭头函数不会创建自己的`this`,它只会从自己的作用域链的上一层继承`this`。
- `bind()`返回一个拥有指定的`this`和初始参数的原函数的拷贝。

4. 不同调用方式`this`绑定的优先级：**作为构造函数调用** > **通过`apply()`/`call()`的方式调用** > **作为方法调用**。



