---
title: css基础
---
总结一些常见css问题。
<!-- more -->
## CSS盒模型
盒模型分为：标准盒模型`box-sizing: content-box;`和怪异盒模型(IE)`box-sizing: border-box`。
区别：
- 标准盒模型的宽高 = 内容宽高
- 怪异盒模型的宽高 = 内容宽高 + padding + border

## offsetHeight/offsetWidth、clientHeight/clientWidth
- offsetHeight、offsetWidth包含了border、padding、content
- clientHeight、clientWidth包含了padding、content

## BFC 块级格式上下文
块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，**是一个独立的渲染区域**。这个区域内部元素不受外部影响，反之亦然。

创建BFC的方式有： 
- `display: flow-root`。 使用[flow-root](https://drafts.csswg.org/css-display/#valdef-display-flow-root)总是为其内容创建一个新的块级格式上下文。相较其他方式，无副作用，兼容较差。
![flow-root兼容性](../assets/flow-root.png)
- 其他方式，有副作用：
  - 根元素`<html>`
  - `float: 不为none`
  - `display: inline-block/table-cell/table-caption/table/table-row/table-row-group/table-header-group/table-footer-group/inline-table/flex/inline-flex/grid/inline-grid`
  - `overflow: 不为visible`
  - `contain: layout/content/paint`
  - `column-span: all`
  - `column-count: 不为auto`或`column-width: 不为auto`

BFC的特性：
- 同一个BFC下子元素的margin会发生重叠
- BFC不会与浮动元素重叠
- 计算BFC高度时，包含浮动元素的高度

应用：
- 自适应两栏布局
- 清除浮动

## 伪类和伪元素