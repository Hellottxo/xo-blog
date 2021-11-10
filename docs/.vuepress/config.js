module.exports = {
  title: "XO'S BLOG",
  description: '',
  base: '/xo-blog/',
  port: 8787,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/Hellottxo' },
      { text: 'XO-UI', link: 'http://xo.silenttt.top/xo-ui' },
      { text: 'leetcode-records', link: 'http://xo.silenttt.top/leetcode-records' }
    ],
    sidebar: [
      {
        title: 'js',
        key: 'js',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/js/this',
          '/js/variable',
          '/js/prototype',
          '/js/inheritance',
          '/js/handleWrite',
          '/js/promise',
          '/js/implicitConversion',
          '/js/event',
          '/js/numInJs'
        ]
      },
      {
        title: 'css',
        key: 'css',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/css/transform',
          '/css/loading-animation',
          '/css/css'
        ],
      },
      {
        title: 'html',
        key: 'html',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/html/h5',
        ],
      },
      {
        title: 'Vue',
        key: 'Vue',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/Vue/frame',
          '/Vue/lifecycle',
          '/Vue/computed',
          '/Vue/desginPattern'
        ]
      },
      {
        title: '浏览器',
        key: 'browser',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/browser/eventloop',
          '/browser/cache',
          '/browser/reflow'
        ]
      },
      {
        title: '计算机基础',
        key: 'computer',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/computer/http',
          '/computer/howNetworkConnect'
        ]
      },
      {
        title: '算法',
        key: 'algorithm',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '/algorithm/sort',
          '/algorithm/subject'
        ]
      }
    ],
    lastUpdated: 'Last Updated',
  },
};
