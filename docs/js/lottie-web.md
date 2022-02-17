# lottie-web 实践与分析

[toc]

lottie是一个适用于web、ios等多端的动画类库，支持解析设计师在设计好动画效果后，通过解析bodymovin插件导出的`json`文件，将其渲染呈现在页面上。

目前，lottie已经支持了绝大多数的AE[特性](http://airbnb.io/lottie/#/supported-features)，是复杂动画开发的主流方案。

## 使用方式

lottie提供了web版本，安装依赖后直接在文件中写入即可：

```vue
<template>
  <div ref="lottie_animate" style="height: 100%; width: 100%"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import lottie from "lottie-web";
import animationData from "../assets/data.json";
export default {
  name: "lottie-demo",
  setup() {
    const lottie_animate = ref(null)
    onMounted(() => {
      lottie.loadAnimation({
        container: lottie_animate.value, // 父级容器dom节点
        renderer: "svg", // 渲染形式，目前支持svg、canvas、html
        loop: false, // 是否循环播放
        autoplay: true, //是否自动播放
        animationData: animationData, // 动画数据
      });
    });
    return {
      lottie_animate
    }
  },
};
</script>
```

详细的使用文档、相关配置、API可以访问：[lottie-web](http://airbnb.io/lottie/#/web)

相关素材库可以访问：[lottiefiles](https://lottiefiles.com/)

预览lottie效果可以使用vscode插件：LottieFiles for VSCode。

## 原理分析

`lottie`的本质是通过解析设计师导出`json`文件中的动效信息，通过js控制渲染，达到动画呈现的目的。

### 初始化过程

lottie 的初始化过程：注册动画实例 > 初始化基础参数  > 初始化元素

`lottie.loadAnimation()`执行时，会执行三个操作：

```js
function loadAnimation(params) {
  var animItem = new AnimationItem(); // 1. 初始化动画实例
  setupAnimation(animItem, null); // 2. 注册动画，为动画实例添加监听事件，通过触发事件，触发更新
  // 3. 解析配置，初始化
  animItem.setParams(params); 
  return animItem;
}

AnimationItem.prototype.setParams = function (params) {
  ...
  // 虽然官网中文档对renderer字段是required，但从代码可以看出，renderer默认为svg
  var animType = 'svg';
  if (params.animType) {
    animType = params.animType;
  } else if (params.renderer) {
    animType = params.renderer;
  }
  switch (animType) {
    case 'canvas':
      this.renderer = new CanvasRenderer(this, params.rendererSettings);
      break;
    case 'svg':
      this.renderer = new SVGRenderer(this, params.rendererSettings);
      break;
    default: // html，混合形式
      this.renderer = new HybridRenderer(this, params.rendererSettings);
      break;
  }
 	...
  if (params.animationData) {
    // 解析animationData
    this.configAnimation(params.animationData);
  } else if (params.path) {
    // 读取json文件后解析animationData
    ...
  }
};

```

### 解析过程

lottie提供了三种渲染形式：svg、canvas、html，每种形式有自己的渲染函数。

事实上在html形式的渲染器中，也使用了svg进行渲染，在[HybridRenderer](https://github.com/airbnb/lottie-web/blob/master/player/js/renderers/HybridRenderer.js#L293)中，有这样一行代码：

```js
// 渲染帧
HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame;
```

继续来看解析过程：

```js
AnimationItem.prototype.configAnimation = function (animData) {
    // 总帧数
    this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
    // 第一帧
    this.firstFrame = Math.round(this.animationData.ip);
    
    // 执行相应的configAnimation，内部渲染成DOM节点或canvas画布
    this.renderer.configAnimation(animData);
    if (!animData.assets) {
      animData.assets = [];
    }
		
    // 初始化配置
  	...
    // 轮询检查字体资源加载是否完毕，完毕则执行this.checkLoaded
    this.waitForFontsLoaded();
    if (this.isPaused) {
      this.audioController.pause();
    }
};
  
AnimationItem.prototype.checkLoaded = function () {
  if (...) { // 静态资源加载完毕
    this.isLoaded = true;
    dataManager.completeData(this.animationData, this.renderer.globalData.fontManager);
    if (expressionsPlugin) {
      expressionsPlugin.initExpressions(this);
    }
  	// 使用渲染器初始化图层元素
  	// initItems --> buildAllItems --> renderer指定的buildItem
    this.renderer.initItems();
  	// 
    setTimeout(function () {
      this.trigger('DOMLoaded');
    }.bind(this), 0);
  	// 渲染第一帧
    this.gotoFrame();
  	// 自动播放
    if (this.autoplay) {
      // 触发动画实例上的'_acitve'事件， 执行响应函数addPlayingCount() --> activate()
      this.play();
    }
  }
};
```

### 动画过程

不管用什么渲染器，lottie的本质都是在`requestAnimationFrame`中计算下一帧，通过js控制动画的每一帧变化，将其不断展示到屏幕上。

```js
... // activate() --> first() --> resume()
function resume(nowTime) {
  var elapsedTime = nowTime - initTime;
  var i;
  for (i = 0; i < len; i += 1) {
    // 
    registeredAnimations[i].animation.advanceTime(elapsedTime);
  }
  initTime = nowTime;
  if (playingAnimationsNum && !_isFrozen) {
    // 通过在requestAnimationFrame中不断调用resume，来触发下一帧的计算
    window.requestAnimationFrame(resume);
  } else {
    _stopped = true;
  }
}

AnimationItem.prototype.advanceTime = function (value) {
  if (this.isPaused === true || this.isLoaded === false) {
    return;
  }
 
  // 计算理论下一帧
  // this.frameMult = this.animationData.fr / 1000;
  // this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
  var nextValue = this.currentRawFrame + value * this.frameModifier;
    
  // 根据计算出的理论下一帧与总帧数、是否循环播放，得出实际的下一帧
  ...
  this.setCurrentRawFrameValue(nextValue);
  }
};

AnimationItem.prototype.setCurrentRawFrameValue = function (value) {
  this.currentRawFrame = value;
  // 渲染下一帧
  this.gotoFrame();
};

```

lottie支持使用`fr`字段自定义帧率，而`requestAnimationFrame()`的理论帧率为60fps，lottie通过比例的形式得出当前帧的时间，自动补足当前帧。显然，在某些时候，比如设计师给出的设计稿帧率已经足够满足需求，这种自动补帧是非常耗费资源的。

lottie提供了一个`setSubframe()`方法来维持原有帧率。

> setSubframe(useSubFrames)
>
> - `useSubFrames`: If false, it will respect the original AE fps. If true, it will update on every requestAnimationFrame with intermediate values. Default is true.

```js
AnimationItem.prototype.gotoFrame = function () {
  // isSubframeEnabled为false的时候，向下取整，忽略补帧
  this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame; // eslint-disable-line no-bitwise

  if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
    this.currentFrame = this.timeCompleted;
  }
  this.trigger('enterFrame');
  // 快乐渲染！
  this.renderFrame();
};
```

## 实践问题

使用时设计师导出的lottie缺失径向渐变背景，与设计期望效果有距离。

根据官网[lottie支持的AE特性](http://airbnb.io/lottie/#/supported-features)，lottie本身是支持导出径向渐变图层的。因此试图用修改`json`的方式解决这个问题。

详细的字段名称及其枚举、初始值，官方在[lottie-web/docs/json](https://github.com/airbnb/lottie-web/tree/master/docs/json)中有详细的陈述，简单介绍一下：

```js
{
    "v": "5.6.10", // Bodymovin版本
    "fr": 25, // 帧率
    "ip": 0, // 初始帧
    "op": 61, // 结束帧
    "w": 1208, // width
    "h": 744, //height
    "nm": "预合成", // name
    "ddd": 0, // 是否有3d图层
    "assets": [], // 资源文件，比如layers中某个图层引用了一张图片，则放在assets中
  	"layers": [], // 图层信息
}
```

其中`layers`包含了动画图层及其动效的参数，`layers`下的`shapes`有个`ty: 'gf'`的图形，是渐变图层。通过`t`字段可以指定径向渐变、线性渐变。

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    ...
    "t": {
      "title": "Type",
      "description": "Gradient Type",
      "oneOf": [
        {
          "standsFor": "Linear",
          "value": 1
        },
        {
          "standsFor": "Radial",
          "value": 2
        }
      ],
      "type": "object"
    },
    "g": {
      "title": "Gradient Colors",
      "description": "Gradient Colors",
      "type": "object"
    }
    ...
  }
}
```

如果设计师导出的渐变颜色不对，只需要通过字段`g`或者`ty: 'gf'`就可以快速定位，修改`g`中的`k`值。`k`值中字段含义可以参考：[json](https://github.com/airbnb/lottie-web/blob/master/docs/json/properties/offsetKeyframe.json)

举个🌰：

线性渐变颜色缺失

![](/Users/xo/Documents/before.png)



根据`ty: 'gf'`定位到问题：

```json
{
  "ty": "gf",
  "o": {
    "a": 0,
    "k": 100,
    "ix": 10
  },
  "r": 1,
  "bm": 0,
  "g": { // 渐变颜色
    "p": 3,
    "k": {
      "a": 0,
      "k": [
        0, // 渐变位置
        1, // value = r / 255   --->  正常颜色 = 正常颜色r / 255 = 0
        1, // value = b / 255   --->  正常颜色 = 正常颜色b / 255 = 1
        1, // value = g / 255   --->  正常颜色 = 正常颜色g / 255 = 0.52
        0.5, // 渐变位置
        0,
        0,
        0,
        1, // 渐变位置
       	0,
        0,
        0
      ],
      "ix": 9
    }
  },
```

将颜色恢复正常后效果如下：

![](/Users/xo/Documents/after.png)

成功修复！

由于项目中遇到的情况是设计师没有导出渐变层，而不是导出失败，因此可以通过[lottiefiles](https://lottiefiles.com/)直接下载一个径向渐变文件，找到`ty: 'gf'`这层的shapes，调整大小颜色后直接拼接入了`json`中。

## 性能对比

选取同一段简单loading的lottie、gif、css来进行对比，每个页面加载300个相同的动画时各项指标：

|        | 资源大小                                 | 白屏时间 | CPU占用率     | gpu占用 |
| ------ | ---------------------------------------- | -------- | ------------- | ------- |
| lottie | lottie-web: 242.kb /  json文件：2k ✖️ 300 | 2ms      | 71.1 ~ 80.5%  | 50.3M   |
| gif    | 7k ✖️ 300                                 | 25ms     | 0.1% ~ 0.3%   | 32.5M   |
| css    | 0                                        | 2ms      | 59.8% ~ 60.8% | 38.3M   |

选取同一段复杂的lottie、gif来进行对比，每个页面加载10个相同的动画时各项指标：

|        | 资源大小                                 | 白屏时间 | CPU占用率    | gpu占用 |
| ------ | ---------------------------------------- | -------- | ------------ | ------- |
| lottie | lottie-web: 242.kb /  json文件：89k ✖️ 10 | 0ms      | 31.5 ~ 37.5% | 5.2M    |
| gif    | 356k ✖️ 10                                | 2ms      | 0.1%         | 6.3M    |

页面展示简单动画时，css白屏时间短，gpu占用低，更能胜任这项任务。

复杂动画时，`lottie`支持事件响应和监听，资源较小，页面体验流畅，gpu占用低。

反观gif，资源较大，白屏时间较长，但由于其文件的特殊性，尺寸的大小调整需要设计师多次配合。

显然，便捷的使用不可避免的带来了性能上的消耗。因此，大家可以结合自己自身场景的需要选择动画方案。

## 总结

1. 网页端动画的实现方式多种多样，gif、css动画、序列帧、canvas等都可以满足日常开发需求，但对于复杂动画而言，使用css动画、canvas开发成本过高，视频、gif资源过大，而`lottie`避免了这两个问题，同时可以完美还原设计需求，高效实现了设计到web端的动画呈现。
2. `lottie`使用`window.requestAnimationFrame`进行动效控制，会默认补帧。在某些的情况下会影响性能，大部分情况下可以通过`setSubframe()`方法阻止补帧，提升性能。同时，应该在界面动画不可见时，及时执行`lottie.destroy()`或暂停动画等，避免`window.requestAnimationFrame`无效调用。

