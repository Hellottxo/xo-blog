# 手写Promise
Promise是异步编程的一种解决方案。 ES6将其纳入规范，提供了内置的Promise对象。  
Promise对象是异步操作的最终结果的占位符。它表示了一个暂未获得，但在未来即将获得的结果值。  
## Promise States
Promise对象接受一个带有`resolve`和`reject`参数的函数，函数内部操作执行完毕后会调用`resolve`或`reject`函数将状态由pending转变为fulfilled或rejected。
一个Promise对象一定处于以下三种状态之一：
1. pending: 未完成状态，此时异步操作正在执行，即将过渡到完成状态。
2. fulfilled: 完成状态，操作成功，一定有一个结果值，状态不可再变化。
3. rejected: 完成状态，操作失败，一定有一个原型，状态不可再变化。
![promiseStatus](../assets/promise.png)
```js
class myPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = null;
        this.reason = null;
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
            }
        };
        const reject = (reason) => {
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
## The `then` Method  
一个Promise对象提供`then`方法来访问其现在或最终的结果(或失败的原因)。 
```js
promise.then(onFulfilled, onRejected);
```
### `then`方法接受两个函数作为参数，这两个参数是操作成功/失败时的回调函数。   
- `onFulfilled`函数在promise状态变为fulfilled时调用，`onFulfilled`接受promise的最终结果作为参数。如果`onFulfilled`不是函数，会被包装为`(x) => x`。

- `onRejected`函数在promise状态变为rejected时调用，`onRejected`接受promise的拒绝原因作为参数。如果`onRejected`不是函数，则会被替换为`Thrower`函数。
### `then`方法返回一个新的promise对象。
```js
promise2 = promise1.then(onFulfilled, onRejected);
```
- `onFulfilled`返回一个结果值`x`/undefined，新的promise对象状态将会变成fulfilled，并且将该结果值作为新的promise对象`onFulfilled`的参数。
- `onFulfilled`或`onRejected`抛出一个错误，新的promise对象状态将会变成rejected，并且将抛出的错误作为新的promise对象`onRejected`的参数。
- 返回一个fulfilled状态的promise，`promise2`也是fulfilled状态，并接受`promise1`的`onFulfilled`回调函数参数值作为`onFulfilled`回调函数的参数。
- 返回一个rejected状态的promise，`promise2`也是rejected状态，并接受`promise1`的`onRejected`回调函数参数值作为`onRejected`回调函数的参数。
```js
class myPromise {
    constructor(executor) {
        ...
        this.resolveCallBacks = [];
        this.rejectCallBacks = [];
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.resolveCallBacks.forEach((fn) => fn());
            }
        };
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.rejectCallBacks.forEach((fn) => fn());
            }
        };
    }
    then = (onFulfilled, onRejected) => {
        const promise2 = new myPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                ...
            }
            if (this.state === 'rejected') {
                ...
            }
            if (this.state === 'pending') {
                this.resolveCallBacks.push(...);
                this.rejectCallBacks.push(...);
            }
        });
    }
}
```

```js
class myPromise {
    constructor(executor) {
        ...
        this.resolveCallBacks = [];
        this.rejectCallBacks = [];
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.resolveCallBacks.forEach((fn) => fn());
            }
        };
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.rejectCallBacks.forEach((fn) => fn());
            }
        };
    }
    resolvePromise = (promise, x, resolve, reject) => {
        if (promise === x) {
            return reject(new TypeError('Chaining cycle detected for promise'));
        }
        let called;
        if (['object', 'function'].includes(typeof value) && value !== null) {
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
            resolve
        }
    }
    then = (onFulfilled, onRejected) => {
        const promise2 = new myPromise((resolve, reject) => {
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

