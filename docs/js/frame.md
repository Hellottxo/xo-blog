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

通过模拟DOM结构，达到批量更新的效果，减少不必要的DOM操作，节约性能

## 自检清单

### Vue

1. 什么是MVVM？
2. Vue框架的优点是什么？
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
6. v-if和v-show的区别
7. computed和watch的区别
8. $nextTick的作用
9. v-for中key的作用
10. Vue中双向绑定的原理
11. 如何动态更新对象或数组的值
12. 说说常用的事件修饰符
13. Vue 如何获取 DOM 元素
14. v-on 如何绑定多个事件
15. Vue 初始化页面闪动问题如何解决
16. Vue 如何清除浏览器缓存
17. Vue-router 路由有哪些模式

### Vuex
1. Vuex 是什么？有哪几种属性？什么时候使用？
<details>
<summary>点击查看答案</summary>

`Vuex`的官网上将它描述为一种 **状态管理模式** 。它采用集中式存储管理应用的所有组件的状态。

其核心属性有：`state`、`getter`、`mutation`、`action`、`module`。

使用场景：
多个组件需要依赖或修改同一个状态时

</details>