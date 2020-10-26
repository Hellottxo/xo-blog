# Vue/React
## 1. React和Vue的区别

<details>
<summary>点击查看答案</summary>

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

</details>

## 2. 为什么要使用Virtual DOM

<details>
<summary>点击查看答案</summary>

通过模拟DOM结构，达到批量更新的效果，减少不必要的DOM操作，节约性能

</details>

