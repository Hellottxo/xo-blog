# 手写系列
## 1. 手写call
`call()`用于指定this和一个或多个参数来调用函数。
```js
Function.prototype.myCall = function(context, ...args) {
    // 1. 检测是否传入了thisArgs,没有则默认使用window
    // 2. 使用Object()方法初始化基础类型值为对象
    context = Object(context) || window;
    // 3. 给当前对象设置一个fn属性，值为调用的方法
    context.fn = this;
    // 4. 将传入的参数作为入参，执行fn，并将函数返回值作为默认的返回值
    const result = context.fn(...args);
    // 5. 删除fn属性，消除影响
    delete context.fn;
    // 6. 返回默认值
    return result;
}
```

## 2. 手写apply
`call()`和`applly()`的区别在于，`call()`接受一个参数列表，`apply()`接受一个参数数组。
```js
Function.prototype.myApply = function(context, args) {
    context = Object(context) || window;
    context.fn = this;
    const result = !args ? context.fn() : context.fn(...args);
    delte context.fn;
    return result;
}
```
## 3. 手写bind
`bind()`返回一个拷贝的原函数，该函数指定了this及默认初始参数。
```js
Function.prototype.myBind = function(context, ...defaultArgs) {
    context = Object(context) || window;
    const self = this;
    function fn(...args) {
        // 传入的thisArgs使用了new操作符时，this指向其实例
        return self.call(this instanceof fn ? this : context, ...defaultArgs, ...args);
    }
    fn.prototype = Object.create(self);
    return fn;
}
```
## 4. 手写new
`new`操作符实际上会经历以下四个步骤：
1. 以构造函数为原型创建新的对象
2. 以obj为context，执行构造函数（因此this指向新对象）
3. 执行构造函数的返回值如果是引用类型，则返回该结果，如果不是或没有返回值则返回新对象

```js
function myNew(func, ...args) {
    // 1. 以func.prototype为原型创建一个新的对象obj
    const obj = Object.create(func.prototype);
    // 2. 以obj为context，执行func
    const res = func.call(obj, ...args);
    // 3. res是否是引用类型，不是则返回新建对象obj
    return res instanceof Object ? res : obj;
}
```
## 5. 手写instanceof
`instanceof`用于确定原型和实例之间的关系。
```js
function myinstanceof(target, origin) {
    // 1. 基础数据类型直接返回false
    if (typeof target !== 'object' || target === null) return false;
    // 2. 获取target的[[prototype]]
    let proto = Object.getPrototypeOf(target);
    while(true) {
        if (proto === null) return false;
        if (proto === origin.prototype) return true;
        // 3. 在target的[[prototype]]链上继续寻找target
        proto = Object.getPrototypeOf(proto);
    }
}
```
## 6. 手写防抖函数
防抖：触发事件指定时间后才执行函数，如果在指定时间内再次触发，则重新函数执行的时间。
```js
function debounce(func, wait) {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        const callNow = timer;
        timer = setTimeout(() => {
            timer = null;
        });
        if (!callNow) func.apply(this, args);
    }
}
```
## 7. 手写节流函数
节流：连续的触发事件，但在指定时间内只触发一次。
```js
function throttle(func, wait) {
    let previous = 0;
    return (...args) => {
        const now = Date.now();
        if (now - previous > wait) {
            func.apply(this, args);
            previous = now;
        }
    }
}
```
## 8. 利用reduce实现map/filter
```js
Array.prototype.myMap = function(func, thisArg) {
    const context = thisArg || null;
    this.reduce((prev, cur， index, array) => {
        prev.push(func.call(context, cur, index, array));
        return prev;
    },[])
}

Array.prototype.myFilter = function(func, thisArg) {
    const context = thisArg || null;
    this.reduce((prev, cur, index, array) => {
        if(func.call(context, cur, index, array)) prev.push(cur);
        return prev;
    }, [])
}
```
