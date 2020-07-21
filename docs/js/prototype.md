#  原型和原型链
## 原型和原型链

**JavaScript中，我们创建的每个新函数（或者类）都存在一个prototype（原型）属性，这个属性指向函数的原型对象。原型对象可以让所有对象实例共享它所包含的属性和方法。**

当调用构造函数创建一个新实例后，该实例内部将包含一个[[Prototype]]指针，指向构造函数的原型对象。在脚本中没有标准的方式访问[[Prototype]]，Firefox、Safari和Chrome在每个对象上都支持一个`__proto__`。  
**当我们访问某个对象上的属性时，如果当前对象不包含该属性，会继续访问[[Prototype]]指向的原型对象，直到找到该属性或到达`Object.prototype.__proto__`，如此层层递进，形成了一条原型链。**
```js
Object.prototype.__proto__ === null; // true
```

## 实现继承的几种方式及它们的优缺点
### 1. 原型链
>利用原型链让一个引用类型继承另一个引用类型的属性和方法。
```js
function person1() {
  this.name = 'Lisa';
}
person1.prototype.getName = function() {
  return this.name;
}
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
instance.__proto__ === person2.prototype; // true
person2.prototype.__proto__ === person1.prototype; // true
person1.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; //true
```
问题：
1. 原型中包含引用类型的值时，在实例化对象中修改，同样会影响到原型。
```js
function person1() {
  this.habbit = ['read', 'tennis'];
}
person1.prototype.getHabbit = function() {
  return this.habbit;
}
function person2() {
  this.age = 5;
}
person2.prototype = new person1();
const instance = new person2();
instance.habbit.shift();
const anotherInstance = new person2();
anotherInstance.getHabbit(); // ['tennis']
```
2. 无法在影响其他实例对象的同时，向超类型函数传参。  
```js
function person1(name) {
  this.name = name;
}
person1.prototype.getName = function() {
  return this.name;
}
function person2() {
  this.age = 6;
}
person2.prototype = new person1('Alice');
const instance = new person2();
instance.getName(); // 'Alice'
const anotherInstance = new person2();
anotherInstance.getName(); // 'Alice'
```
### 2. 借用构造函数
> 在子类型构造函数内部调用超类型构造函数。
```js
function person1() {
  this.name = 'Lisa';
}
function person2() {
  person1.call(this);
}
const instance = new person2();
instance.name; // 'Lisa'
```
问题：
1. 方法都在构造函数中定义，无法进行函数复用。超类型中定义的方法，子类型不可见。 

### 3. 组合继承
>是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。

```js
function person1(name) {
  this.name = name;
  this.habbit = ['tennis', 'read'];
}
person1.prototype.getName = function() {
  return this.name;
}
function person2(name, age) {
  person1.call(this, name);
  this.age = age;
}
person2.prototype = new person1();
person2.prototype.constructor = person1;
const instance = new person2('Lisa', 5);
person2.prototype.getInfo = function() {
  return `hello, I am ${this.name}`;
}

const anoterInstance = new person2('Eli', 6);
anoterInstance.getInfo(); // 'hello, I am Eli'
instance.getInfo(); // 'hello, I am Lisa'

instance.habbit.shift();
anoterInstance.habbit; // ['tennis', 'read']
instance.habbit; // ['read']
```
组合继承利用了原项链和借用构造函数的优点，同时规避了二者的缺点。
### 4. 原型式继承
>执行对给定对象的浅复制，复制得到的副本还可以得到进一步改造。

5. 寄生式继承：基于某个对象或某些信息创建一个对象，然后增强对象，最后返回对象。缺点：无法函数复用，效率低
6. 寄生组合式继承：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法，是实现基于类型继承的最有效方式。
