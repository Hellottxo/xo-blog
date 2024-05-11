## vue3 为什么要使用proxy重写

Object.defineProperty和Proxy提供了两种不同方式来拦截对象操作。虽然两者都可以实现属性的拦截和自定义行为，但Proxy在某些方面有显著的优势。

### 动态拦截

Object.defineProperty只能作用于对象的单个属性，需要显式地为每一个属性定义。
Proxy可以在单个拦截器中处理所有的属性，而且不需要事先知道对象的结构。
拦截的操作种类
Object.defineProperty仅能拦截对属性的基本操作，比如读取、写入。
Proxy能够拦截更多种类的操作，包括属性读取、赋值、属性存在检查(in操作符)、枚举(for...in、Object.keys等)，函数调用、对象原型的查找、属性的删除等。

### 对新属性的拦截

使用Object.defineProperty的对象，新添加的属性不会自动享受相同的拦截特性，除非再次手动对新属性使用Object.defineProperty。
Proxy将自动拦截对象上所有属性的操作，包括在代理创建之后新添加的属性。
其他语言结构的拦截
Proxy还可以拦截其他语言级的操作，例如apply（函数调用）、construct（使用new操作符时）等，而Object.defineProperty做不到这一点。

### 性能

对于要求更改拦截的面更广的情况，使用Object.defineProperty可能需要遍历对象上的每个属性，这在对象属性很多时会带来性能开销。
Proxy可以一开始就定义拦截的行为，无论对象有多少属性，性能影响都是一致的。

## 易用性和可读性
Proxy的语法更直观、灵活。一旦设置代理，代码对对象的所有后续操作都会自动走代理逻辑，这让处理复杂行为变得更简单。
Object.defineProperty则需要为每个属性编写更多的定制代码，代码量较大，可读性和易用性相对较低。
虽然Proxy有许多优势，但它也有自己的缺点。比如，由于Proxy对象对拦截的操作是透明的，所以不能直接判断一个对象是不是Proxy。同时，Proxy是ES6的特性，在不支持ES6的环境下不能使用，而Object.defineProperty可以在ES5环境中使用。另外，Proxy可能会有一些性能开销，特别是在对性能要求非常高的场景下需要注意。