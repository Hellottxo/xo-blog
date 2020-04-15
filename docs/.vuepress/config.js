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
      { text: 'XO-UI', link: 'http://xo.silenttt.top/xo-blog' },
    ],
    sidebar: [
      {
        title: 'css',
        collapsable: false,
        children: [
          '/css/transform'
        ],
      },
    ],
    lastUpdated: 'Last Updated',
  },
};
