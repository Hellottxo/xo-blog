# Eventloop 浏览器事件循环机制

从需求开始。

## 为什么要了解Eventloop

先举个简单的栗子🌰。

```javascript
const validate = () => {
  const timeStamp = Date.now();
  setTimeout(() => console.log(Date.now() - timeStamp), 500);
}
validate();
```

上述的代码的运行结果是什么呢？是`500`吗？

事实上，当我们尝试多次运行validate函数，会发现，`setTimeout`的回调函数打印出来的结果并不是我们想象中的500，甚至不是一个固定的数值。

```
validate(); // 501
validate(); // 503
validate(); // 502
```

为什么定时器不如我们想象中的方式运作呢？

让我们带着疑问，来学习Eventloop吧。

当然，这并不是说我们学习Eventloop只是为了了解为什么定时器的时间不那么准确。

通过学习Eventloop，深入了解Js在浏览器中的运行机制，以方便我们在工作和学习中更加轻松的解决各种问题。

## 什么是Eventloop

首先，让我们明确一件事情：**JS是一门单线程语言**。那么像`setTimeout` `Promise`这样的异步代码究竟是如何运行的呢？

来看一张经典的eventloop运行图。

![eventloop](../assets/eventloop.jpeg)

如图所示，Js代码在浏览器中运行时，会创建一个调用栈（Call Stack），当前执行的函数都会push进调用栈中，执行完毕后，以后进先出的原则从调用栈中移除。调用栈中遇到异步API时，将异步API的回调函数放入事件队列（Event Queue）中， 等待当前调用栈清空后，以先进先出的原则，执行事件队列中的回调函数，如此循环往复，就是**Eventloop**。

到这里，我们回到第一个问题，**为什么setTimeout定时器不如我们想象中准确呢？**

答案已经呼之欲出了：定时器设置的时间过后，`setTimeout`的回调函数放入事件队列后，等待调用栈执行的这段时间，造成了定时器执行的误差。

让我们更加深入一点，借用一下Jake Archibald的例子。

```javascript
console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

上面这段代码的输出结果会是怎样的呢？

```javascript
script start
script end
promise1
promise2
setTimeout
```

咦，和想象中的结果不太一样对不对？

按照前文的描述，我们理想的结果应当是:

```js
script start
script end
setTimeout
promise1
promise2
```

事实上，异步API分为**宏任务（macrotask）**和**微任务（microtask）。**

**常见的浏览器微任务/宏任务**

>**宏任务（macrotask）**：setTimeout、setInterval、I/O、UI 交互事件等。
>
>**微任务（microtask）**：Promise.then、 MutationObserver等。  

基于宏任务和微任务，让我们再完善一下对于**Eventloop**的描述：

1. Js代码在浏览器中运行时，会创建一个调用栈（Call Stack），当前执行的函数都会push进调用栈中，执行完毕后，以后进先出的原则从调用栈中移除；
2. 调用栈中遇到异步API时，满足条件后，微任务及宏任务的回调函数分别进入相应的事件队列；
3. 等待当前调用栈清空后，依次执行微任务事件队列中的回调函数；
4. 当微任务事件队列及当前调用栈清空后，开始执行宏任务事件队列中的回调函数。如此循环往复，就是**Eventloop**。

