import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
  base: '/My_Blog/',
  lang: 'zh-CN',
  title: '一只攻城狮',
  description: '谁在怀念 怀念从前',
  head: [['link', { rel: 'icon', href: '/My_Blog/images/favicon.ico' }]],

  theme: defaultTheme({
    // logo: '/images/leo.jpeg',
    navbar: [
      { text: '首页', link: '/' },
      { text: '前端积累', link: '/accumulation/' },
      { text: '博客文章', link: '/article/' },
      { text: '文案收集', link: '/diary' },
      { text: '关于狮子', link: '/about' }
    ],
    // 侧边栏对象 - 不用页面配置不同的
    sidebar: {
      '/accumulation/': [
        {
          text: 'css',
          collapsible: true, // 可折叠
          children: [],
        },
        {
          text: 'html',
          collapsible: true,
          children: [],
        },
        {
          text: 'js',
          collapsible: true,
          children: [],
        },
        {
          text: 'vue',
          collapsible: true,
          children: [],
        },
      ],
      '/article/': [
        {
          text: '开源工具',
          collapsible: true,
          children: [],
        },
      ],
    },
    editLinkText: '帮助我改善这个页面',
    docsRepo: 'https://github.com/leoleor/My_Blog',
    docsBranch: 'master',
    docsDir: 'docs',
    lastUpdatedText: '最后更新时间',
    contributors: true,
    contributorsText: '文档贡献者',
    notFound: ['未知页面'],
    backToHome: '返回首页',
    toggleColorMode: '切换颜色模式'
  }),

  plugins: [
    searchPlugin({
      // 配置
    }),
  ],
}