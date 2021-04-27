---
title: 从源码看computed和watch
---
    Vue2 版本：2.6.11

了解`computed`和`watch`之前，让我们先了解一下Vue的响应式。

话不多说，先上图：
![computed](../assets/reactive.png)

整个响应式的实现大致如下：

1. `observe`将`data`包裹为响应式数据，并通过`dep`存放依赖
2. `render`时会`new`一个`watcher`来订阅数据的改变
3. `wacher`的构造函数会对被观测的数据执行`getter`，将`watcher`收集到`dep`中
4. 数据发生改变时，通过`setter`中的`dep.notify()`通知到各个`watcher`
5. `watcher`执行`update`，将变化更新到页面

### observer

### dep

### watcher

Vue中提供了侦听属性`watch`，用于侦听某个属性的变化并执行相应的回调函数，而`watcher`就是`watch`的底层实现。

