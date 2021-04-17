---
title: proxy
---
`Proxy`用于修改某些默认操作，如拦截`get()`、`set()`、`defineProperty()`、`getPropertyOf()`等方法，按原结果类型返回一个结果，属于一种"元编程"。

`Proxy`可以传入两个参数：`target`、`handler`，`target`是被拦截对象，只要是引用类型数据都可以，`handler`对象中则定义的是各种拦截行为，等同于重写target的某些原型方法。

`Vue3`中采用`Proxy`代替`Object.defineProperty()`实现数据绑定。

与`Object.defineProperty()`不同，`Proxy`直接拦截的是对象本身，因此对象内部属性的变动都可以通过`get(`

`)`、`set()`监听到，而`Object.defineProperty`监听的是对象的某个属性。

因此在`Vue2`中修改`data`中的定义的对象时，需要通过`vm.$set()`来手动触发`setter`。

