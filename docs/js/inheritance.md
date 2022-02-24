# 继承

继承（Inheritance）是一种在新对象上复用现有对象的属性的形式。让我们详细了解一下各种继承的方式。

<!-- more -->

## 1. 原型链

> 利用原型链让一个引用类型继承另一个引用类型的属性和方法。

```js
function person1() {
  this.name = "Lisa";
}
person1.prototype.getName = function () {
  return this.name;
};
function person2() {
  this.age = 5;
}
person2.prototype = new person1();
const instance = new person2();
instance.getName(); // 'Lisa'
```

所有的引用类型都默认继承了`Object`,而这个继承就是通过原型链实现的。  
所有函数的默认原型都是`Object`的实例，因此所有函数的默认原型都存在一个[[Prototype]]指针，指向`Object.prototype`。  
因此，上述例子的原型链：`instance -> person2.prototype -> person1.prototype -> Object.prototype -> null`。

```js
Object.getPrototypeOf(instance) === person2.prototype; // true
Object.getPrototypeOf(person2.prototype) === person1.prototype; // true
Object.getPrototypeOf(person1.prototype) === Object.prototype; // true
Object.getPrototypeOf(Object.prototype) === null; //true
```

问题：

1. 原型中包含引用类型的值时，在实例化对象中修改，同样会影响到原型。

```js
function person1() {
  this.habbit = ["read", "tennis"];
}
person1.prototype.getHabbit = function () {
  return this.habbit;
};
function person2() {
  this.age = 5;
}
person2.prototype = new person1();
const instance = new person2();
instance.habbit.shift();
const anotherInstance = new person2();
anotherInstance.getHabbit(); // ['tennis']
```

2. 无法在不影响其他实例对象的同时，向超类型函数传参。

```js
function person1(name) {
  this.name = name;
}
person1.prototype.getName = function () {
  return this.name;
};
function person2() {
  this.age = 6;
}
person2.prototype = new person1("Alice");
const instance = new person2();
instance.getName(); // 'Alice'
const anotherInstance = new person2();
anotherInstance.getName(); // 'Alice'
```

## 2. 借用构造函数

> 在子类型构造函数内部调用超类型构造函数。

```js
function person1() {
  this.name = "Lisa";
}
function person2() {
  person1.call(this);
}
const instance = new person2();
instance.name; // 'Lisa'
```

问题：

1. 方法都在构造函数中定义，无法进行函数复用。
2. 超类型中定义的方法，子类型不可见。

## 3. 组合继承

> 是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。

```js
function person1(name) {
  this.name = name;
  this.habbit = ["tennis", "read"];
}
person1.prototype.getName = function () {
  return this.name;
};
function person2(name, age) {
  person1.call(this, name);
  this.age = age;
}
person2.prototype = new person1();
person2.prototype.constructor = person1;
const instance = new person2("Lisa", 5);
person2.prototype.getInfo = function () {
  return `hello, I am ${this.name}`;
};

const anoterInstance = new person2("Eli", 6);
anoterInstance.getInfo(); // 'hello, I am Eli'
instance.getInfo(); // 'hello, I am Lisa'

instance.habbit.shift();
anoterInstance.habbit; // ['tennis', 'read']
instance.habbit; // ['read']
```

组合继承利用了原型链和借用构造函数的优点，同时规避了二者的缺点。

## 4. 原型式继承

> 以给定对象为原型，创建一个新对象。
> ES5 中的`Object.create()`规范化了原型式继承。
> 这个方法接收两个参数:一 个用作新对象原型的对象和(可选的)一个为新对象定义额外属性的对象。

```js
const obj = {
  name: "Lisa",
};
const inheritObj = Object.create(obj);
inheritObj.name; // Lisa
inheritObj.name = "Eli";
inheritObj.name; // 'Eli'
obj.name; // 'Lisa'
```

让我们手写一个原型式继承：

```js
function myInheritance(obj) {
  function fn() {}
  fn.prototype = obj;
  return new fn();
}

const obj = {
  name: "Lisa",
};
inheritObj.name = "Eli";
inheritObj.name; // 'Eli'
obj.name; // 'Lisa'
```

问题：与原型链继承一样，原型中包含引用类型的值时，在实例化对象中修改，同样会影响到原型。

## 5. 寄生式继承

> 基于某个对象，或某些信息创建一个对象，然后增强对象，最后返回对象。

```js
function getObject(obj) {
  return Object.create(obj);
}

// 寄生式继承
function parasiticInheritance(obj) {
  // 基于某个对象，或某些信息创建一个对象，getObject代指返回一个新对象的函数
  const clone = getObject(obj);
  // 通过设置对象的属性，增强对象
  clone.sayHi = function () {
    console.log("hi");
  };
  return clone;
}

const person = {
  name: "xo",
};
const anotherPerson = parasiticInheritance(person);
anotherPerson.sayHi(); // hi
```

问题：因为在函数内部增强对象，所以函数无法复用。

## 6. 寄生组合式继承

> 通过借用构造函数来继承属性，通过原型链的混合形式来继承方法。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。

```js
function person1(name) {
  this.name = name;
  this.habbit = ["tennis", "read"];
}
person1.prototype.getName = function () {
  return this.name;
};
function person2(name, age) {
  person1.call(this, name); // 调用一次
  this.age = age;
}
// 寄生式继承
function parasiticInheritance(child, parent) {
  const proto = Object(child.prototype);
  proto.constructor = child;
  parent.prototype = proto;
}
parasiticInheritance(person1, person2);
const instance = new person2("Lisa", 5);
person2.prototype.getInfo = function () {
  return `hello, I am ${this.name}`;
};

const anoterInstance = new person2("Eli", 6);
anoterInstance.getInfo(); // 'hello, I am Eli'
instance.getInfo(); // 'hello, I am Lisa'

instance.habbit.shift();
anoterInstance.habbit; // ['tennis', 'read']
instance.habbit; // ['read']
```

很显然，相较于组合式继承，寄生组合式只调用了一次`person1`函数，更为有效。
