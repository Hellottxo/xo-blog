(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{352:function(e,_,v){e.exports=v.p+"assets/img/lifecycle.aedb92c3.png"},437:function(e,_,v){"use strict";v.r(_);var t=v(33),a=Object(t.a)({},(function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Vue2 版本：2.6.11\n")])])]),t("h3",{attrs:{id:"_1-初始化阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化阶段"}},[e._v("#")]),e._v(" 1. 初始化阶段")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("new Vue()")]),e._v("时会执行构造函数中的"),t("code",[e._v("this._init()")]),e._v("，初始化生命周期"),t("code",[e._v("initLifecycle")]),e._v("相关参数、事件中心"),t("code",[e._v("initEvents")]),e._v("、渲染相关，然后执行生命周期钩子函数"),t("code",[e._v("beforeCreate")]),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("执行"),t("code",[e._v("initinjections")]),e._v("处理injection，继续执行"),t("code",[e._v("initState")]),e._v("，对"),t("code",[e._v("props、methods、data、computed、watch")]),e._v("进行初始化，再执行"),t("code",[e._v("initProvide")]),e._v("，最后执行生命周期"),t("code",[e._v("created")]),e._v("。在"),t("code",[e._v("created")]),e._v("中，"),t("code",[e._v("new Vue()")]),e._v("时传入的相关数据、方法已经处理完成，可以在此时对数据进行操作。")])]),e._v(" "),t("li",[t("p",[e._v("此时，"),t("code",[e._v("this._init()")]),e._v("进入尾声，判断当前实例是否存在"),t("code",[e._v("el")]),e._v("，存在的话则调用"),t("code",[e._v("vm.$mount()")]),e._v("，进入下一阶段。")])])]),e._v(" "),t("h3",{attrs:{id:"_2-模板编译阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-模板编译阶段"}},[e._v("#")]),e._v(" 2. 模板编译阶段")]),e._v(" "),t("p",[t("strong",[e._v("注意：运行版本中，已经将模板编译成了渲染函数，所以不存在这个阶段。")])]),e._v(" "),t("p",[e._v("首先判断该实例中是否存在渲染函数("),t("code",[e._v("this.$options.render")]),e._v(")，如果不存在则将模板编译为渲染函数。这也是为什么"),t("code",[e._v("template")]),e._v("和"),t("code",[e._v("render")]),e._v("同时存在时，会执行render的原因。")]),e._v(" "),t("p",[e._v("执行生命周期钩子函数"),t("code",[e._v("beforeMount")]),e._v("，此时渲染函数已经生成，接下来进入挂载阶段。")]),e._v(" "),t("h3",{attrs:{id:"_3-挂载阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-挂载阶段"}},[e._v("#")]),e._v(" 3. 挂载阶段")]),e._v(" "),t("p",[e._v("挂载阶段的核心是通过"),t("code",[e._v("new Watcher")]),e._v("，将"),t("code",[e._v("updaeComponent")]),e._v("作为第二个参数传入，通过执行"),t("code",[e._v("updateComponent")]),e._v("对"),t("code",[e._v("render")]),e._v("所用到的参数进行依赖收集。")]),e._v(" "),t("p",[t("code",[e._v("updateComponent")]),e._v("的主要代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vm._update(vm._render(), hydrating)\n")])])]),t("p",[t("code",[e._v("vm._render()")]),e._v("生成最新的Vnode，"),t("code",[e._v("vm._update()")]),e._v("进行"),t("code",[e._v("patch")]),e._v("更新DOM。")]),e._v(" "),t("p",[e._v("执行生命周期钩子函数"),t("code",[e._v("mounted")]),e._v("，进入运行阶段。")]),e._v(" "),t("h3",{attrs:{id:"_4-运行阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-运行阶段"}},[e._v("#")]),e._v(" 4. 运行阶段")]),e._v(" "),t("p",[e._v("在初始化阶段，"),t("code",[e._v("Vue")]),e._v("中定义的"),t("code",[e._v("data")]),e._v("经过"),t("code",[e._v("observe")]),e._v("变成了响应式数据，数据被setter时，就会触发"),t("code",[e._v("dep.notify()")]),e._v("通知到各个"),t("code",[e._v("watcher")]),e._v("，调用各个"),t("code",[e._v("watcher")]),e._v("中的"),t("code",[e._v("update()")]),e._v("进行更新。\n让我们来看看数据更新的流程：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("data -> setter -> dep.notify -> watcher.update -> view\n")])])]),t("p",[e._v("事实上，触发"),t("code",[e._v("update()")]),e._v("后，会将当前"),t("code",[e._v("watcher")]),e._v("push进一个更新队列，再在"),t("code",[e._v("nextTick")]),e._v("中，通过id对更新队列进行优先级排列，然后遍历执行"),t("code",[e._v("watcher.run()")]),e._v("，即最后的更新操作。在执行"),t("code",[e._v("watcher.run()")]),e._v("之前，会调用"),t("code",[e._v("beforeUpdate")]),e._v("生命周期函数，等待更新队列遍历完毕后，再依更新相反顺序执行"),t("code",[e._v("updated")]),e._v("生命周期函数。")]),e._v(" "),t("p",[e._v("话不多说，直接上图：")]),e._v(" "),t("p",[t("img",{attrs:{src:v(352),alt:"lifecylce"}})])])}),[],!1,null,null,null);_.default=a.exports}}]);