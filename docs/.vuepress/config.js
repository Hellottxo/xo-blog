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
    ],
    sidebar: [
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
          '/browser/eventloop'
        ]
      }
    ],
    lastUpdated: 'Last Updated',
  },
};
