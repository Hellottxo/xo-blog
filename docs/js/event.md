# 事件委托

事件委托，利用事件冒泡的特性，通过指定一个事件处理程序，管理某一类型的所有事件。

> 事件冒泡，即事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。

普通事件处理程序:

```js
<ul>
  <li id="one">one</li>
  <li id="two">two</li>
  <li id="three">three</li>
</ul>

<script>
const addHandle = (item, type, func) => {
  item.addEventListener(type, func)
}

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

const onClick = (e) => {
  console.log(e.target.id);
}

addHandle(one, 'click', onClick);
addHandle(two, 'click', onClick);
addHandle(three, 'click', onClick);

</script>
```
事件委托处理程序: 

```js
<ul>
  <li id="one">one</li>
  <li id="two">two</li>
  <li id="three">three</li>
</ul>

<script>

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
  console.log(e.target.id);
})

</script>
```

## 事件委托的优点
1. 减少DOM引用，减少内存占用，提升页面性能。
2. 代码更简洁可复用，如上例情况，新增一个节点时，无需再手动添加一个事件响应函数。

