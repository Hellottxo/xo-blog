---
title: 手写系列
---
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
  if (typeof this !== 'function') throw Error('');
  context = Object(context) || window;
  const self = this;
  const fn = function(...args) {
    return self.apply(this instanceof fn ? this : context, [...defaultArgs, ...args]);
  }
  // bind后返回的函数不存在prototype
  return Object.create(fn);
}
```
## 4. 手写new
`new`操作符实际上会经历以下三个步骤：
1. 以构造函数的prototype属性为原型创建新的对象
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
function debounce(func, wait, immediate) {
  let timer = null;
  return function(...args) {
    const context = this;
    if (immediate) {
      const callNow = !timer;
      if (timer) clearTimeout(timer);
      setTimeout(() => {
        func.call(context, ...args);
      }, wait)
      if (callNow) func.call(context, ...args);
    }else {
      if (timer) clearTimeout(timer);
      setTimeout(() => {
        func.call(context, ...args);
      })
    }
  }
}
```
## 7. 手写节流函数
节流：连续的触发事件，但在指定时间内只触发一次。
```js
function throttle(func, wait) {
  let timer = null;
  return funtion(...args) {
    const context = this;
    if (timer) return;
    timer = setTimeout(() => {
      func.call(context, ...arg);
      clearTimeout(timer);
    }, wait);
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
## 9. 模拟Symbol
```js
(function() {
    const root = this;

    const generateUniqueKey = (function() {
        let postfix = 0;
        return (descString) => {
            postfix++;
            return `@@${descString}${postfix}`;
        }
    })();

    const SymbolPolyfill = function(des) {
        // If NewTarget is not undefined, throw a TypeError exception.
        if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');
        
        // If description is undefined, let descString be undefined.
        // Else, let descString be ToString(description).
        const descString = des === undefined ? undefined : String(des);

        // Return a new unique Symbol value whose [[Description]] value is descString.
        const symbol = Object.create({
            toString: () => this.__name__,
            valueOf: () => this
        });
        Object.defineProperties(symbol, {
            '__Description__': {
                value: des,
                writable: false,
                enumerable: false,
                configurable: false
            },
            '__name__': {
                value: generateUniqueKey(des),
                writable: false,
                enumerable: false,
                configurable: false
            }
        });
        return symbol;
    }

    // 用于实现`Symbol.for()`、`Symbol.keyFor()`
    const forMap = {};

    Object.defineProperties(SymbolPolyfill, {
        for: {
            value: (des) => {
            const descString = des === undefined ? undefined : String(des);
                return forMap[descString] ? forMap[descString] : forMap[descString] = SymbolPolyfill(descString);
            },
            writable: true,
            enumerable: false,
            configurable: true
        },
        keyFor: {
            value: (symbol) => {
                for(let key in forMap) {
                    if (forMap[key] === symbol) return key;
                }
            }
        }
    })

    root.SymbolPolyfill = SymbolPolyfill;
})()
```
## 10. 模拟for...of
ES6 规定，默认的 `Iterator` 接口部署在数据结构的 `Symbol.iterator` 属性。
即，一个数据结构只要具有 `Symbol.iterator` 属性，就可以认为是“可遍历的”（iterable）。
当使用 `for...of` 循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。
```js
const forOf = (obj, callback) => {
    const iterator = obj[Symbol.iterator];
    if(!iterator) throw new Error(`${obj} is not iterable`);
    let next = iterator.next();
    while (!next.done) {
        callback(next.value);
        next.next();
    }
}

```
## 11. 模拟Set
```js
const isDef = (v) => v !== undefined && v !== null;

const isIterator = (v) => v[Symbol.iterator];

const getType = (v) => Object.prototype.toString.call(v).slice(8, -1);

const assert = (condition, msg) => {
    if (!condition) throw new Error(msg);
};

class mySet {
    constructor(data) {
        this.value = [];
        if (isDef(data)) {
            assert(isIterotar(data), `Uncaught TypeError: ${getType(data)} is not iterable (cannot read property Symbol(Symbol.iterator))`);
            for (let item of data) {
                this.add(item);
            };
        }
    }

    get size = () => this.value.length;

    add = (v) => {
        const index = this.value.indexOf(v);
        if (index < 0) this.value.push(v);
        return this;
    }

    clear = (v) => {
        this.value = [];
    }

    has = (v) => {
        return this.value.indexOf(v) > -1;
    }

    delete = (v) => {
        const index = this.value.indexOf(v);
        if (index > -1) this.value.splice(index, 1);
        return index > -1;
    }

    forEach = (callbackFn, thisArg) => {
        thisArg = thisArg || this;
        this.value.forEach(callbackFn, thisArg);
    }
}
```

## 12. deepClone

```js
function deepClone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const res = Array.isArray(target) ? [] : {};
    const item = map.get(target);
    if (item) return item;
    map.set(target, res);
    for (let key in target) {
      res[key] = deepClone(target[key], map);
    }
  }
}
```

