(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{441:function(_,t,v){"use strict";v.r(t);var e=v(33),a=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-js数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-js数据类型"}},[_._v("#")]),_._v(" 1.  Js数据类型")]),_._v(" "),v("details",[v("summary",[_._v("点击查看答案")]),_._v(" "),v("p",[_._v("Js变量包含"),v("strong",[_._v("基本类型")]),_._v("和"),v("strong",[_._v("引用类型")]),_._v("。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("基本类型")]),_._v(" "),v("th",[_._v("引用类型")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("Undefined")]),_._v(" "),v("td",[_._v("Object")])]),_._v(" "),v("tr",[v("td",[_._v("Null")]),_._v(" "),v("td",[_._v("Function")])]),_._v(" "),v("tr",[v("td",[_._v("Boolean")]),_._v(" "),v("td",[_._v("Date")])]),_._v(" "),v("tr",[v("td",[_._v("String")]),_._v(" "),v("td",[_._v("RegExp")])]),_._v(" "),v("tr",[v("td",[_._v("Number")]),_._v(" "),v("td",[_._v("Math（单体内置类型）")])]),_._v(" "),v("tr",[v("td",[_._v("Symbol")]),_._v(" "),v("td",[_._v("Global（单体内置类型）")])]),_._v(" "),v("tr",[v("td",[_._v("BigInt")]),_._v(" "),v("td",[_._v("Boolean（基本包装类型）")])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("Number（基本包装类型）")])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("String（基本包装类型）")])])])])]),_._v(" "),v("h2",{attrs:{id:"_2-基本类型和数据类型在内存中的具体储存形式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本类型和数据类型在内存中的具体储存形式"}},[_._v("#")]),_._v(" 2. 基本类型和数据类型在内存中的具体储存形式")]),_._v(" "),v("details",[v("summary",[_._v("点击查看答案")]),_._v(" "),v("p",[_._v("基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中。")]),_._v(" "),v("p",[_._v("引用类型的值是对象，保存在堆内存中。")])]),_._v(" "),v("h2",{attrs:{id:"_3-js对象的底层数据结构是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-js对象的底层数据结构是什么？"}},[_._v("#")]),_._v(" 3.  Js对象的底层数据结构是什么？")]),_._v(" "),v("details",[v("summary",[_._v("点击查看答案")]),_._v(" "),v("p",[_._v("散列表（哈希表）")])]),_._v(" "),v("h2",{attrs:{id:"_4-js判断数据类型方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-js判断数据类型方法"}},[_._v("#")]),_._v(" 4.  Js判断数据类型方法")]),_._v(" "),v("details",[v("summary",[_._v("点击查看答案")]),_._v(" "),v("ol",[v("li",[v("p",[v("code",[_._v("typeof")]),_._v(":")]),_._v(" "),v("ul",[v("li",[_._v("基本类型除null以外均可以准确判断")]),_._v(" "),v("li",[v("code",[_._v("typeof null === 'object'")])]),_._v(" "),v("li",[_._v("引用类型除function以外均判断为"),v("code",[_._v("object")])]),_._v(" "),v("li",[v("code",[_._v("typeof func === 'function'")])])])]),_._v(" "),v("li",[v("p",[v("code",[_._v("instanceof")]),_._v(": 判断实例对象上的原型链上是否能找到构造函数的原型属性，即判断某个对象是否是另一对象的实例。缺点：只能判断引用类型。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("Object.prototype.toString.call()")]),_._v(": 最准确")])])])]),_._v(" "),v("h2",{attrs:{id:"_5-为什么typeof-null-object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-为什么typeof-null-object"}},[_._v("#")]),_._v(" 5.  为什么"),v("code",[_._v("typeof null === 'object'")])]),_._v(" "),v("details",[v("summary",[_._v("点击查看答案")]),_._v("\n`不同的变量在底层都表示为二进制，`typeof`会将二进制的前三位为0判断为`object`，而null用二进制表示全为0，因此将`null`错误的判断为`object`。\n"),v("p",[_._v("手动实现deepClone: "),v("a",{attrs:{href:"./handleWrite"}},[_._v("手写系列")])])]),_._v(" "),v("h2",{attrs:{id:"_6-nul和undefined的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-nul和undefined的区别"}},[_._v("#")]),_._v(" 6. "),v("code",[_._v("nul")]),_._v("和"),v("code",[_._v("undefined")]),_._v("的区别")]),_._v(" "),v("details",[v("summary",[_._v("点击查看答案")]),_._v(" "),v("p",[v("code",[_._v("undefined")]),_._v("表示变量已声明，但并未初始化。"),v("code",[_._v("typeof undefined === 'undefined'")])]),_._v(" "),v("p",[v("code",[_._v("null")]),_._v("通常用于已在保存对象的变量，但还没有真正的保存对象。"),v("code",[_._v("typeof null === 'object'")])])]),_._v(" "),v("h2",{attrs:{id:"_7-出现小数精度丢失的原因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-出现小数精度丢失的原因"}},[_._v("#")]),_._v(" 7. 出现小数精度丢失的原因")]),_._v(" "),v("details",[v("summary",[_._v("点击查看答案")]),_._v(" "),v("ol",[v("li",[_._v("小精度丢失原因："),v("code",[_._v("Js")]),_._v("遵守JEEE 754规范，使用双精度存储，占用64bit。其中1bit表正负，52bit表示尾数，11bit表示指数。")]),_._v(" "),v("li",[v("code",[_._v("JavaScript")]),_._v("最大数字: "),v("code",[_._v("Number.MAX_VALUE")])]),_._v(" "),v("li",[v("code",[_._v("JavaScript")]),_._v("最大安全数字: "),v("code",[_._v("Number.MAX_SAFE_INTEGER")])]),_._v(" "),v("li",[_._v("避免精度丢失的方法: 使用字符串传值")])]),_._v(" "),v("p",[v("a",{attrs:{href:"./numInJs"}},[_._v("点击查看详解")])])]),_._v(" "),v("h2",{attrs:{id:"_8-可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用"}},[_._v("#")]),_._v(" 8. 可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用")]),_._v(" "),v("p",[v("a",{attrs:{href:"./implicitConversion"}},[_._v("点击查看答案")])]),_._v(" "),v("h2",{attrs:{id:"_9-symbol类型在实际开发中的应用，手动实现一个简单的symbol"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-symbol类型在实际开发中的应用，手动实现一个简单的symbol"}},[_._v("#")]),_._v(" 9. "),v("code",[_._v("Symbol")]),_._v("类型在实际开发中的应用，手动实现一个简单的"),v("code",[_._v("Symbol")])]),_._v(" "),v("details",[v("summary",[_._v("点击查看答案")]),_._v(" "),v("p",[_._v("应用:")]),_._v(" "),v("ol",[v("li",[_._v("用于对象中的唯一key，防止对象中的某个key不小心被改写或覆盖。")]),_._v(" "),v("li",[_._v("对象中以"),v("code",[_._v("Symbol")]),_._v("为key时，"),v("code",[_._v("for in")]),_._v("、"),v("code",[_._v("Json.stringify")]),_._v("等会跳过该属性，可以用于模拟私有属性。想要读取所有属性时，可以使用Reflect.ownKeys(obj)。")]),_._v(" "),v("li",[_._v("消除魔法值。")])]),_._v(" "),v("p",[_._v("手动实现: "),v("a",{attrs:{href:"./handleWrite"}},[_._v("手写系列")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);