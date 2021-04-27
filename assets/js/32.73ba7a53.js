(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{352:function(e,v,t){e.exports=t.p+"assets/img/reactive.17499dd6.png"},432:function(e,v,t){"use strict";t.r(v);var _=t(33),a=Object(_.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("Vue2 版本：2.6.11\n")])])]),_("p",[e._v("了解"),_("code",[e._v("computed")]),e._v("和"),_("code",[e._v("watch")]),e._v("之前，让我们先了解一下Vue的响应式。")]),e._v(" "),_("p",[e._v("话不多说，先上图：\n"),_("img",{attrs:{src:t(352),alt:"computed"}})]),e._v(" "),_("p",[e._v("整个响应式的实现大致如下：")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("observe")]),e._v("将"),_("code",[e._v("data")]),e._v("包裹为响应式数据，并通过"),_("code",[e._v("dep")]),e._v("存放依赖")]),e._v(" "),_("li",[_("code",[e._v("render")]),e._v("时会"),_("code",[e._v("new")]),e._v("一个"),_("code",[e._v("watcher")]),e._v("来订阅数据的改变")]),e._v(" "),_("li",[_("code",[e._v("wacher")]),e._v("的构造函数会对被观测的数据执行"),_("code",[e._v("getter")]),e._v("，将"),_("code",[e._v("watcher")]),e._v("收集到"),_("code",[e._v("dep")]),e._v("中")]),e._v(" "),_("li",[e._v("数据发生改变时，通过"),_("code",[e._v("setter")]),e._v("中的"),_("code",[e._v("dep.notify()")]),e._v("通知到各个"),_("code",[e._v("watcher")])]),e._v(" "),_("li",[_("code",[e._v("watcher")]),e._v("执行"),_("code",[e._v("update")]),e._v("，将变化更新到页面")])]),e._v(" "),_("h3",{attrs:{id:"observer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#observer"}},[e._v("#")]),e._v(" observer")]),e._v(" "),_("h3",{attrs:{id:"dep"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dep"}},[e._v("#")]),e._v(" dep")]),e._v(" "),_("h3",{attrs:{id:"watcher"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#watcher"}},[e._v("#")]),e._v(" watcher")]),e._v(" "),_("p",[e._v("Vue中提供了侦听属性"),_("code",[e._v("watch")]),e._v("，用于侦听某个属性的变化并执行相应的回调函数，而"),_("code",[e._v("watcher")]),e._v("就是"),_("code",[e._v("watch")]),e._v("的底层实现。")])])}),[],!1,null,null,null);v.default=a.exports}}]);