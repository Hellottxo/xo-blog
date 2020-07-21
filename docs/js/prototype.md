# 原型和原型链
**JavaScript中，我们创建的每个新函数（或者类）都存在一个prototype（原型）属性，这个属性指向函数的原型对象。原型对象可以让所有对象实例共享它所包含的属性和方法。**

当调用构造函数创建一个新实例后，该实例内部将包含一个[[Prototype]]指针，指向构造函数的原型对象。在脚本中没有标准的方式访问[[Prototype]]，Firefox、Safari和Chrome在每个对象上都支持一个`__proto__`。  
**当我们访问某个对象上的属性时，如果当前对象不包含该属性，会继续访问[[Prototype]]指向的原型对象，直到找到该属性或到达`Object.prototype.__proto__`，如此层层递进，形成了一条原型链。**
```js
Object.prototype.__proto__ === null; // true
```
