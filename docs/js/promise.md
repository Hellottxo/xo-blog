---
title: 手写Promise
---
Promise是异步编程的一种解决方案。 ES6将其纳入规范，提供了内置的Promise对象。Promise对象是异步操作的最终结果的占位符。它表示了一个暂未获得，但在未来即将获得的结果值。
<!-- more -->  
## Promise状态
Promise对象接受一个带有`resolve`和`reject`参数的函数，函数内部操作执行完毕后会调用`resolve`或`reject`函数将状态由pending转变为fulfilled或rejected。
一个Promise对象一定处于以下三种状态之一：
1. pending: 未完成状态，此时异步操作正在执行，即将过渡到完成状态。
2. fulfilled: 完成状态，操作成功，一定有一个结果值，状态不可再变化。
3. rejected: 完成状态，操作失败，一定有一个原型，状态不可再变化。
![promiseStatus](../assets/promise.png)
```js
class Promise {
    constructor(executor) {
        this.state = 'pending';
        this.value = null;
        this.reason = null;
        const resolve = function(value) {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
            }
        };
        const reject = function(reason) {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
            }
        };
        try {
            executor(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }
}
```
## then()
一个Promise对象提供`then`方法来访问其现在或最终的结果(或失败的原因)。 
```js
promise.then(onFulfilled, onRejected);
```
### `then`方法接受两个函数作为参数，这两个参数是操作成功/失败时的回调函数。   
- `onFulfilled`函数在promise状态变为fulfilled时调用，`onFulfilled`接受promise的最终结果作为参数。如果`onFulfilled`不是函数，会被包装为`(x) => x`。

- `onRejected`函数在promise状态变为rejected时调用，`onRejected`接受promise的拒绝原因作为参数。如果`onRejected`不是函数，则会被替换为`Thrower`函数。
```js
class Promise {
    constructor(executor) {
        ...
        this.resolveCallBacks = [];
        this.rejectCallBacks = [];
        const resolve = function(value) {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.resolveCallBacks.forEach((fn) => fn());
            }
        };
        const reject = function(reason) {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.rejectCallBacks.forEach((fn) => fn());
            }
        };
    }
    function then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        }
        if (this.state === 'rejected') {
            onRejected(this.reason);
        }
        if (this.state === 'pending') {
            this.resolveCallBacks.push(() => {
                onFulfilled(this.value);
            });
            this.rejectCallBacks.push(() => {
                onRejected(this.reason);
            });
        }
    }
}
```
### `then`方法返回一个新的promise对象。
```js
promise2 = promise1.then(onFulfilled, onRejected);
```
- `onFulfilled`返回一个结果值`x`/undefined，新的promise对象状态将会变成fulfilled，并且将该结果值作为新的promise对象`onFulfilled`的参数。
- `onFulfilled`或`onRejected`抛出一个错误，新的promise对象状态将会变成rejected，并且将抛出的错误作为新的promise对象`onRejected`的参数。
- 返回一个fulfilled状态的promise，`promise2`也是fulfilled状态，并接受`promise1`的`onFulfilled`回调函数参数值作为`onFulfilled`回调函数的参数。
- 返回一个rejected状态的promise，`promise2`也是rejected状态，并接受`promise1`的`onRejected`回调函数参数值作为`onRejected`回调函数的参数。  
[Promise / A+](https://promisesaplus.com/)规范中提供了Promise相互嵌套的操作的过程，依照规范，继续完善我们的promise。
```js
class Promise {
    constructor(executor) {
        ...
    }
    function resolvePromise (promise, x, resolve, reject) {
        // 如果promise和x是同一个对象，则发生了循环调用，调用reject函数，并抛出一个TypeError
        if (promise === x) {
            return reject(new TypeError('Chaining cycle detected for promise'));
        }
        // 确保多次调用时，只有第一次生效
        let called;
        if (['object', 'function'].includes(typeof x) && x !== null) {
            try {
                let then = x.then;
                // 如果then为function，则以x为context执行then
                if (typeof then === 'function') {
                    then.call(x, (y) => {
                        if (called) return;
                        called = true;
                        // 继续解析
                        this.resolvePromise(promise, x, resolve, reject);
                    }, (r) => {
                        if (called) return;
                        called = true;
                        reject(r);
                    })
                } else {
                    // 如果then不为function，执行resolve()
                    resolve(x);
                }
            } catch(e) {
                if (called) return;
                called = true;
                reject(e);
            }
        }else {
            // x 既不是object，也不是fucntion时，执行resolve()
            resolve(x);
        }
    }
    function then(onFulfilled, onRejected) {
        const promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                const x = onFulfilled(this.value);
                this.resolvePromise(promise2, x, resolve, reject);
            }
            if (this.state === 'rejected') {
                const x = onRejected(this.reason);
                this.resolvePromise(promise2, x, resolve, reject);
            }
            if (this.state === 'pending') {
                this.resolveCallBacks.push(() => {
                    const x = onFulfilled(this.value);
                    this.resolvePromise(promise2, x, resolve, reject);
                });
                this.rejectCallBacks.push(() => {
                    const x = onRejected(this.reason);
                    this.resolvePromise(promise2, x, resolve, reject);
                });
            }
        });
        return promise2;
    }
}
```
## catch()
>`catch()`方法返回一个Promise，并且处理拒绝的情况。  
```js
class Promise {
    ...
    catch = (onRejected) => this.then(undefined, onRejected);
}
```
## Promise.all()
>`Promise.all(iterable)`方法返回一个promise实例，`iterable`内所有的promise都resolve，或不包含promise对象时，该promise实例resolve，以`iterable`内所有返回值为数组作为value；任一个promise reject时，该实例reject，以第一个失败的promise reason作为reson。
```js
class Promise {
    static all = (list) => {
        return Promise((resolve, reject) => {
            const values = [];
            values.forEach((item, i) => {
                if (item && typeof item.then === 'function') {
                    item.then((res) => {
                        values[i] = res;
                        if (i === list.length) {
                            resolve(values);
                        }
                    }, reject)
                } else {
                    values[i] = item;
                }
            })
        })
    }
}
```
## 总结
Promise就像一个装着程序的箱子，我们不需要关注程序在箱子内运行的过程，程序完成或失败后总会自动打开告知我们执行的结果。同时，为了方便内部程序井然有序的运行，Promise定义了三种箱子的状态：初始、完成、失败。`then`方法的链式调用，就像大箱子套小箱子。而通过这三种状态，完成箱子内部逻辑的自洽，满足箱子之间的相互嵌套。  

完整的promise实现代码如下：
```js
class Promise {
    constructor(executor) {
        this.resolveCallBacks = [];
        this.rejectCallBacks = [];
        const resolve = function(value) {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.resolveCallBacks.forEach((fn) => fn());
            }
        };
        const reject = function(reason) {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.rejectCallBacks.forEach((fn) => fn());
            }
        };
    }

    static all = function (list) {
        return Promise((resolve, reject) => {
            const values = [];
            list.forEach((item, i) => {
                if (item && typeof item.then === 'function') {
                    item().then((res) => {
                        values[i] = res;
                        if (i === list.length) {
                            resolve(values);
                        }
                    }, reject)
                } else {
                    values[i] = item;
                }
            })
        })
    }

    function resolvePromise (promise, x, resolve, reject) {
        if (promise === x) {
            return reject(new TypeError('Chaining cycle detected for promise'));
        }
        let called;
        if (['object', 'function'].includes(typeof x) && x !== null) {
            try {
                let then = x.then;
                if (typeof then === 'function') {
                    then.call(x, (y) => {
                        if (called) return;
                        called = true;
                        this.resolvePromise(promise, x, resolve, reject);
                    }, (r) => {
                        if (called) return;
                        called = true;
                        reject(r);
                    })
                } else {
                    resolve(x);
                }
            } catch(e) {
                if (called) return;
                called = true;
                reject(e);
            }
        }else {
            resolve(x);
        }
    }
    function then = (onFulfilled, onRejected) {
        const promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                const x = onFulfilled(this.value);
                this.resolvePromise(promise2, x, resolve, reject);
            }
            if (this.state === 'rejected') {
                const x = onRejected(this.reason);
                this.resolvePromise(promise2, x, resolve, reject);
            }
            if (this.state === 'pending') {
                this.resolveCallBacks.push(() => {
                    const x = onFulfilled(this.value);
                    this.resolvePromise(promise2, x, resolve, reject);
                });
                this.rejectCallBacks.push(() => {
                    const x = onRejected(this.reason);
                    this.resolvePromise(promise2, x, resolve, reject);
                });
            }
        });
        return promise2;
    }
}
```