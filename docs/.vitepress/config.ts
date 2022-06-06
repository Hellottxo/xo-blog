import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...
  title: "XO'S BLOG",
  description: "",
  base: "/xo-blog/",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Github", link: "https://github.com/Hellottxo" },
      { text: "XO-UI", link: "http://xo.silenttt.top/xo-ui" },
      {
        text: "leetcode-records",
        link: "http://xo.silenttt.top/leetcode-records",
      },
    ],
    sidebar: [
      {
        text: '性能优化',
        children: [
          { text: '性能优化指标', link: "/performance/vitals" }
        ]
      },
      {
        text: 'js',
        children: [
          { text: 'this的指向', link: "/js/this" },
          { text: '变量和类型', link: "/js/variable" },
          { text: '原型和原型链', link: "/js/prototype" },
          { text: '继承', link: "/js/inheritance" },
          { text: '手写系列', link: "/js/handleWrite" },
          { text: '手写Promise', link: "/js/promise" },
          { text: '隐式转换', link: "/js/implicitConversion" },
          { text: '事件委托', link: "/js/event" },
          { text: '小数精度丢失的原因', link: "/js/numInJs" },
          { text: 'lottie-web实践与分析', link: "/js/lottie-web" },
          { text: 'Vue/React', link: "/Vue/frame" },
          { text: '从源码看生命周期LifeCycle', link: "/Vue/lifecycle" },
          { text: '从源码看watch和computed', link: "/Vue/computed" },
        ]
      },
      {
        text: 'css',
        children: [
          { text: '用css实现视差效果', link: "/css/transform" },
          { text: 'loading动画', link: "/css/loading-animation" },
          { text: 'css基础', link: "/css/css-base" },
          { text: '响应式布局', link: "/css/response" },
          { text: 'html5', link: "/html/h5" },
        ]
      },
      {
        text: '浏览器',
        children: [
          { text: '事件循环', link: "/browser/eventloop" },
          { text: '浏览器缓存策略', link: "/browser/cache" },
          { text: '回流和重绘', link: "/browser/reflow" },
          { text: 'http', link: "/computer/http" },
        ]
      },
      {
        text: '算法',
        children: [
          // { text: 'Vue中的设计模式', link: "/Vue/desginPattern" },

          // { text: '《网络是怎样连接的》', link: "/computer/howNetworkConnect" },
          { text: '排序算法', link: "/algorithm/sort" },
          { text: '算法题记录', link: "/algorithm/subject" }
        ]
      }
    ],
    lastUpdated: "Last Updated",
  },
})
