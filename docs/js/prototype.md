# 原型和原型链
## 原型
**JavaScript中，我们创建的每个新函数（或者类）都存在一个prototype（原型）属性，这个属性指向函数的原型对象。原型对象可以让所有对象实例共享它所包含的属性和方法。**
```js
function foo() { }
// 在foo的prototype上添加一个sayHi方法
foo.prototype.sayHi = function() {
  console.log('hi');
}
// 使用`new`操作符实例化foo
const instance = new foo();
// 实例化对象可以访问foo.prototype上的方法
instance.sayHi(); // hi
```
## 原型链
当调用构造函数创建一个新实例后，该实例内部将包含一个[[Prototype]]指针，指向构造函数的原型对象。在脚本中没有标准的方式访问[[Prototype]]，Firefox、Safari和Chrome在每个对象上都支持一个`__proto__`。  
**当我们访问某个对象上的属性时，如果当前对象不包含该属性，会继续访问[[Prototype]]指向的原型对象，直到找到该属性或到达`Object.prototype.__proto__`，如此层层递进，形成了一条原型链。**
执行`instance.sayHi()`的查找过程：
1. instance本身不包含sayHi方法，因此通过[[Prototype]]指针访问instance的原型foo；
2. foo的原型属性上存在sayHi方法，执行该方法。
```js
instance.__proto__ === foo.prototype; // true
foo.prototype.__proto__ === Object.prototype; // true
// 当查找的属性或方法在foo的原型属性中也找不到时，会访问Js内置的Object对象继续查找，直到到达Object.prototype.__proto__
Object.prototype.__proto__ === null; // true
```
ES6提供了更为标准的方法`Object.getPrototypeOf()`用于返回指定对象的原型。
```js
Object.getPrototypeOf(instance) === instance.__proto__; // true
```
## Object Function
```js
Object.getPrototypeOf(Object) === Function.prototype;
Object.getPrototypeOf(Function) === Function.prototype;
```