module.exports = {
  title: "XO'S BLOG",
  description: '',
  base: '/xo-blog/',
  head: [
    ['link', {rel: 'icon', href: '/logo.svg'}]
  ],
  port: 8787,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Github', link: 'https://github.com/Hellottxo' },
      { text: 'XO-UI', link: 'http://xo.silenttt.top/xo-ui' },
      { text: 'leetcode-records', link: 'http://xo.silenttt.top/leetcode-records' },
    ],
    sidebar: [
      {
        title: 'js',
        collapsable: false,
        children: [
          '/js/this',
          '/js/variable',
          '/js/prototype',
          '/js/inheritance',
          '/js/handleWrite',
          '/js/promise'
        ]
      },
      {
        title: 'css',
        collapsable: false,
        children: [
          '/css/transform',
        ],
      },
      {
        title: '浏览器',
        collapsable: false,
        children: [
          '/browser/eventloop',
          '/browser/cache'
        ]
      },
      {
        title: '算法',
        collapsable: false,
        children: [
          '/algorithm/sort',
          '/algorithm/subject'
        ]
      }
    ],
    lastUpdated: 'Last Updated',
  },
};
