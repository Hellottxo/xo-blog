(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{363:function(t,s,a){t.exports=a.p+"assets/img/numInJs.289f2b6a.jpg"},364:function(t,s,a){t.exports=a.p+"assets/img/numInJsfunc.0afbaa15.png"},423:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("计算机由晶体管组成，所以内部数据的存储和运算都采用二进制，而我们在实际生活工作中，使用的是十进制。因此，对于计算机在运算时产生的精度问题，本质上是使用二进制模拟十进制进行运算产生的精度问题。"),n("br")]),t._v(" "),n("h2",{attrs:{id:"js中的数字储存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js中的数字储存"}},[t._v("#")]),t._v(" Js中的数字储存")]),t._v(" "),n("blockquote",[n("p",[t._v("根据 ECMAScript 标准，JavaScript 中只有一种数字类型：基于 IEEE 754 标准的双精度 64 位二进制格式的值。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(363),alt:"numInJs"}}),t._v("\n如图所示，64位可分为三部分：")]),t._v(" "),n("ol",[n("li",[t._v("符号为S：0代表正数，1代表负数")]),t._v(" "),n("li",[t._v("阶码位E：在机器中表示一个浮点数时需要给出指数，这个指数用整数形式表示，这个整数叫做阶码，阶码指明了小数点在数据中的位置。")]),t._v(" "),n("li",[t._v("小数位M：**超出部分自动0舍1 **")])]),t._v(" "),n("p",[t._v("IEEE 754 标准规定的二进制表现为：\n"),n("img",{attrs:{src:a(364),alt:"numInJs"}})]),t._v(" "),n("p",[t._v("为什么"),n("code",[t._v("E-1023")]),t._v("，"),n("code",[t._v("M+1")]),t._v("呢？")]),t._v(" "),n("p",[t._v("计算机中实际储存数字时，遵循科学计数法（如上图所示），且整数位为1。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("E-1023")]),n("br"),t._v("\n科学计数法中的指数位是允许为负的，计算机底层只可以进行加法运算，因此引入偏移量表示负数，约定阶码减去1023，[0,1022]表示为负，[1024,2047]表示为正。")]),t._v(" "),n("li",[n("code",[t._v("M+1")]),n("br"),t._v("\n整数位固定为1，所以储存时舍去。M的固定长度加上被省略的整数位为53，因此有"),n("code",[t._v("Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1")]),t._v(",而非"),n("code",[t._v("Number.MAX_SAFE_INTEGER === Math.pow(2, 52) - 1")]),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"_0-1-0-2-0-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-0-2-0-3"}},[t._v("#")]),t._v(" 0.1 + 0.2 !== 0.3")]),t._v(" "),n("p",[t._v("小数位超出52时会自动0舍1入，加上隐含的整数位，Js中小数位的长度为：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16")]),t._v("\n")])])]),n("p",[t._v("0.1转换为二进制为："),n("code",[t._v("0.00011...0011")]),t._v("，0.2转换为二进制为"),n("code",[t._v("0.0011...0011")]),t._v("，0.1 + 0.2为"),n("code",[t._v("0.010011...0011")]),t._v("，使用整数为1，科学计数法的形式(不考虑偏移量表现形式)表示为"),n("code",[t._v("1.00110011...0011x2^-2")]),t._v("，此时"),n("code",[t._v("00110011...0011")]),t._v("第53位为"),n("code",[t._v("1")]),t._v("，0舍1入，小数部位的值位"),n("code",[t._v("00110011...0011010")]),t._v("，转换为十进制后为"),n("code",[t._v("0.30000000000000004")]),t._v("，所以："),n("code",[t._v("0.1 + 0.2 !== 0.3")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"number-prototype-tofixed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-prototype-tofixed"}},[t._v("#")]),t._v(" Number.prototype.toFixed()")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),n("OutboundLink")],1),t._v("中对"),n("code",[t._v("toFixed()")]),t._v("的描述：")]),t._v(" "),n("blockquote",[n("p",[t._v("一个数值的字符串表现形式，不使用指数记数法，而是在小数点后有 digits（注：digits具体值取决于传入参数）位数字。该数值在必要时进行四舍五入，另外在必要时会用 0 来填充小数部分，以便小数部分有指定的位数。 如果数值大于 1e+21，该方法会简单调用 Number.prototype.toString()并返回一个指数记数法格式的字符串。"),n("br"),t._v("\n描述中提到：\n该数值在必要时进行四舍五入"),n("br"),t._v("\n我们来测试一下：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.245")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '1.2'")]),t._v("\nnum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '1.25'")]),t._v("\n")])])]),n("p",[n("strong",[t._v("为什么"),n("code",[t._v("num.toFixed(2)")]),t._v("的值为"),n("code",[t._v("1.2")]),t._v("，而不是"),n("code",[t._v("1.3")]),t._v("呢？")]),t._v("\n我们来看一下"),n("a",{attrs:{href:"https://github.com/v8/v8/blob/4b9b23521e6fd42373ebbcb20ebe03bf445494f9/src/fixed-dtoa.cc#L242",target:"_blank",rel:"noopener noreferrer"}},[t._v("v8源码"),n("OutboundLink")],1),t._v("中对小数位操作的一段：")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The given fractionals number represents a fixed-point number with binary")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// point at bit (-exponent).")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Preconditions:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   -128 <= exponent <= 0.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   0 <= fractionals * 2^exponent < 1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   The buffer holds the result.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The function will round its result. During the rounding-process digits not")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// generated by this function might be updated, and the decimal-point variable")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// might be updated. If this function generates the digits 99 and the buffer")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// already contained "199" (thus yielding a buffer of "19999") then a')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// rounding-up will change the contents of the buffer to "20000".')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FillFractionals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint64_t")]),t._v(" fractionals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" exponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fractional_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Vector"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" decimal_point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DCHECK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" exponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" exponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'fractionals' is a fixed-point number, with binary point at bit")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (-exponent). Inside the function the non-converted remainder of fractionals")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// is a fixed-point number, with binary point at bit 'point'.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("exponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// One 64 bit number is sufficient.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DCHECK_EQ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fractionals "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" point "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("exponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将前[fractional]位小数转成字符串")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" fractional_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fractionals "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instead of multiplying by 10 we multiply by 5 and adjust the point")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// location. This way the fractionals variable will not overflow.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invariant at the beginning of the loop: fractionals < 2^point.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initially we have: point <= 64 and fractionals < 2^56")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// After each iteration the point is decremented by one.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note that 5^3 = 125 < 128 = 2^7.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Therefore three iterations of this loop will not overflow fractionals")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (even without the subtraction at the end of the loop body). At this")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// time point will satisfy point <= 61 and therefore fractionals < 2^point")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and any further multiplication of fractionals by 5 will not overflow.")]),t._v("\n      fractionals "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      point"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" digit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static_cast")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fractionals "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" digit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      fractionals "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static_cast")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint64_t")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [fractionals + 1]位0舍1入")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the first bit after the point is set we have to round up.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fractionals "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DtoaRoundUp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decimal_point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We need 128 bits.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DCHECK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("exponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("exponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    UInt128 fractionals128 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UInt128")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fractionals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fractionals128"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Shift")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("exponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" point "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" fractional_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fractionals128"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// As before: instead of multiplying by 10 we multiply by 5 and adjust the")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// point location.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This multiplication will not overflow for the same reasons as before.")]),t._v("\n      fractionals128"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Multiply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      point"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" digit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fractionals128"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DivModPowerOf2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" digit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fractionals128"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BitAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DtoaRoundUp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decimal_point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("实际上，"),n("code",[t._v("toFixed(n)")]),t._v("会先计算出相应的二进制保留位数f，将前f位二进制小数转换成字符串，再查看f+1位数值，进1取0。\n因此才会有："),n("code",[t._v("toFixed(n)")]),t._v("的结果在"),n("strong",[t._v("必要时")]),t._v("才会进行四舍五入。")])])}),[],!1,null,null,null);s.default=e.exports}}]);