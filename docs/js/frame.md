---
title: Vue/React
---

##  React和Vue的区别
### 相似之处
1. 都使用Virtual DOM
2. 都提供了响应式和组件化的视图组件
3. 都将注意力集中保持在核心库，而其他功能如路由和全局状态管理交给相关的库

### 区别
1. React使用JSX渲染组件，Vue则主要使用template模版，Vue的模版中的修饰符，如`v-on`，在JSX中实现，需要更多的代码
2. Vue的单文件组件形式，支持在同一个文件里控制css
3. Vue官方提供了状态管理解决方案Vuex，而React的状态管理模式依托于社区维护
4. Vue的更新粒度是组件级的，而React中某个组件状态发生变化时，会以该组件为根，重新渲染整个组件子树。
5. Vue的响应式

## 为什么要使用Virtual DOM

1. 通过模拟DOM结构，达到批量更新的效果，减少不必要的DOM操作，节约性能
2. 支持跨平台开发

## 自检清单

### Vue

1. 什么是MVVM？

<details>
<summary>点击查看答案</summary>

MVVM是model-view-viewmodel的缩写，是前端的一种架构模式。view层和model层通过viewmodel层进行通信。
在view层中进行dom操作导致数据发生变化时，viewmodel响应操作并将数据同步到model层；model层数据发生变化时，view层的数据也会发生相应的变化。

</details>

2. Vue框架的优点是什么？

<details>
<summary>点击查看答案</summary>

1. 响应式
2. 易于上手
3. 单文件组件
4. 支持跨平台
...

</details>

3. 讲述一下Vue的生命周期
4. Vue组件之间是怎么传值的

<details>
<summary>点击查看答案</summary>

    父子组件：
    1. 通过props传值
    2. $emit/$on
    3. 通过`provide/inject`依赖注入
    
    兄弟组件：
    1. eventbus
    2. vuex

</details>

5. 为什么Vue中的data必须是一个函数

<details>
<summary>点击查看答案</summary>

并不是必须的，根组件的中的data就为对象。
只有当组件是可复用的 Vue 实例时，data必须为函数。
组件为可复用的Vuew实例时，data如果为对象，组件内对data内数据的改动会相互影响。

</details>

6. v-if和v-show的区别

<details>
<summary>点击查看答案</summary>

`v-if`根据条件决定是否渲染
`v-show`则是根据条件切换`display: none`

`v-if`有更高的切换开销，而`v-show`有更高的初始渲染开销。
因此，内容频繁切换的情况使用`v-show`，条件改变较少时使用`v-if`。

</details>

7. computed和watch的区别
<details>
<summary>点击查看答案</summary>

1. 使用场景上：`computed`是计算属性，适用于有多个依赖的情况；而`watch`则是侦听属性，负责响应某项数据的变动。
2. 使用方式上：`computed`和`watch`都可以在Vue实例中作为属性使用，除此之外，`watch`还支持命令式调用`vm.$watch`。
3. 源码上：`computed`本质上是有`watcher`，也就是`watch`的底层实现而实现的。

`vm.$watch(expOfFn, cb, option)`支持传入三个参数，最后一个参数中有两个属性：imddiate、deep。其中immediate表示将以当前expOfFn值执行一次回调函数，deep表示监听对象内部属性的变动。
`vm.$watch` return一个取消观察的函数，可以通过执行这个函数，停止触发回调。

</details>

8. Vue.nextTick的作用

<details>
<summary>点击查看答案</summary>

为了避免不必要的计算和渲染，Vue的数据是异步更新的，`Vue.nextTick`支持在DOM更新后立即获取到更新后的DOM。比如在created中，对DOM的操作需要放入`Vue.nextTick`中，没有提供callback时，`Vue.nextTick`返回一个promise对象。

原理，从事件循环的角度讲。

</details>

9. v-for中key的作用

<details>
<summary>点击查看答案</summary>

Vue组件的node diff，会通过key及其他参数来对比是否同一个节点，当新旧节点为同一个节点时，会复用旧节点以此节约性能。

</details>

10. Vue中双向绑定的原理
11. 如何动态更新对象或数组的值

<details>
<summary>点击查看答案</summary>

对象：1. 通过扩展运算符修改对象值、Object.assign 2. Vue.set
数组：1. splice、push、unshift

</details>

12. 说说常用的事件修饰符

<details>
<summary>点击查看答案</summary>
- .stop
- .prevent
- .capture
- .self
- .once
- .passive

</details>

13. Vue 如何获取 DOM 元素

<summary>点击查看答案</summary>
vm.$el
</details>

14. v-on 如何绑定多个事件

<details>
<summary>点击查看答案</summary>
逗号分割
</details>

15. Vue 初始化页面闪动问题如何解决

<details>
<summary>点击查看答案</summary>

v-cloak

</details>

16. Vue-router 路由有哪些模式

<details>
<summary>点击查看答案</summary>

1. hash模式: window.location.hash
2. history模式: history.pushState

</details>

### Vuex
1. Vuex 是什么？有哪几种属性？什么时候使用？

<details>
<summary>点击查看答案</summary>

`Vuex`的官网上将它描述为一种 **状态管理模式** 。它采用集中式存储管理应用的所有组件的状态。

其核心属性有：`state`、`getter`、`mutation`、`action`、`module`。

使用场景：
多个组件需要依赖或修改同一个状态时

</details>