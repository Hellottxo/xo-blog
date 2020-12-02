(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{349:function(a,t,e){a.exports=e.p+"assets/img/cache.2ba115e6.jpg"},413:function(a,t,e){"use strict";e.r(t);var s=e(33),i=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("浏览器缓存可以"),s("strong",[a._v("有效减少网络开销，减轻服务器压力，加快页面响应速度")]),a._v("，是提升性能的一种有效方式。\n")]),a._v(" "),s("h1",{attrs:{id:"浏览器缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存策略"}},[a._v("#")]),a._v(" 浏览器缓存策略")]),a._v(" "),s("p",[a._v("浏览器缓存的主要流程:\n"),s("img",{attrs:{src:e(349),alt:"cache"}}),a._v("\n浏览器根据http首部字段对http响应报文进行缓存，根据使用的http首部字段不同可以分为"),s("strong",[a._v("强缓存")]),a._v("和"),s("strong",[a._v("协商缓存")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),s("p",[a._v("命中强缓存后，浏览器将直接读取本地缓存，不会发送请求。")]),a._v(" "),s("h3",{attrs:{id:"expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[a._v("#")]),a._v(" Expires")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Expires: Tue, 28 Jul 2020 14:31:37 GMT\n")])])]),s("p",[a._v("Expires字段会将资源过期的时间告知客户端。在Expires字段值指定的时间之前，响应的副本会一直被保存，在此之前发起相同请求，会命中强缓存。")]),a._v(" "),s("h3",{attrs:{id:"cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" Cache-Control")]),a._v(" "),s("p",[a._v("常用值:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("public")]),a._v(": 可以被任何对象缓存")]),a._v(" "),s("li",[s("code",[a._v("private")]),a._v(": 只有浏览器可以缓存")]),a._v(" "),s("li",[s("code",[a._v("no-cache")]),a._v(": 在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证(协商缓存验证)")]),a._v(" "),s("li",[s("code",[a._v("no-store")]),a._v(": 不使用任何缓存")]),a._v(" "),s("li",[s("code",[a._v("max-age=<seconds>")]),a._v(": 设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。")])]),a._v(" "),s("p",[a._v("浏览器第一次发送请求后，响应请求头中Cache-Control的值为：max-age=600，则600ms内再次发起相同请求，命中强缓存。")]),a._v(" "),s("h3",{attrs:{id:"对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[a._v("#")]),a._v(" 对比")]),a._v(" "),s("p",[a._v("Expires返回的是指定的时间，当客户端时间和服务端时间存在误差时，会导致强缓存失效。现代浏览器默认使用的是HTTP/1.1，而HTTP/1.1中，Expires已经被Cache-Control取代。")]),a._v(" "),s("h2",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),s("p",[a._v("未命中强缓存时，浏览器会发送请求，服务端通过对比http请求首部字段来判断是否命中协商缓存。命中后，浏览器将直接读取本地缓存。未命中协商缓存时，将从服务端加载资源。")]),a._v(" "),s("h3",{attrs:{id:"last-modified-和-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-if-modified-since"}},[a._v("#")]),a._v(" Last-Modified 和 If-Modified-Since")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Last-Modified: Tue, 28 Jul 2020 14:31:37 GMT\nIf-Modified-Since: Tue, 28 Jul 2020 14:31:37 GMT\n")])])]),s("p",[a._v("Last-Modified指明资源最终修改的时间。\n当浏览器再次发送相同请求，未命中强缓存时，请求首部字段带上If-Modified-Since（值为上次请求响应的Last-Modified），服务端根据资源更新时间与If-Modified-Since进行对比，判断资源是否发生改变，进行响应。")]),a._v(" "),s("h3",{attrs:{id:"etag-和-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-if-none-match"}},[a._v("#")]),a._v(" ETag 和 If-None-Match")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('ETag: "123ewr3245253523"\nIf-None-Match: "123ewr3245253523"\n')])])]),s("p",[a._v("响应首部字段ETag是资源的唯一标识。"),s("br"),a._v("\n当资源更新时，ETag值也需要更新。生成ETag值时，并没有统一的算法规则，而仅仅是由服务器来分配。"),s("br"),a._v("\nETag可分为强ETag和弱ETag:")]),a._v(" "),s("ul",[s("li",[a._v('强ETag: 资源发生任何改变，ETag都会改变。\nETag: "user-123"')]),a._v(" "),s("li",[a._v('弱ETag: 仅用于提示资源是否相同，只有资源发生根本变化时，ETag值才会发生改变，改变时，会在字段开始处附加 W/。\nETag: W/"user-123"')])]),a._v(" "),s("p",[a._v("当浏览器再次发送相同请求，未命中强缓存时，请求首部字段带上If-None-Match（值为上次请求响应的ETag），服务端根据资源当前唯一标识与If-None-Match进行对比，判断资源是否发生改变，进行响应。")]),a._v(" "),s("h3",{attrs:{id:"对比-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比-2"}},[a._v("#")]),a._v(" 对比")]),a._v(" "),s("ul",[s("li",[a._v("ETag 和 If-None-Match的优先级高于Last-Modified 和 If-Modified-Since。")]),a._v(" "),s("li",[a._v("Etag是服务器返回的资源统一标识，解决了使用Last-Modified的几个难题：\n"),s("ol",[s("li",[a._v("部分资源存在周期性的修改，但这个改动仅仅修改了时间，服务端并不希望客户端识别这次修改。")]),a._v(" "),s("li",[a._v("If-Modified-Since的响应粒度是s级，当资源在s内频繁改动时，If-Modified-Since无法响应。")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);