import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "科技语者",
  description: "科技语者",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/examples/' },
      {
        text: '与我相关',
        items: [
          {
            text: '哔哩哔哩',
            link: 'https://space.bilibili.com/3546643693570855'
          },
          {
            text: '抖音',
            link: 'https://www.douyin.com/user/MS4wLjABAAAALubM7FDQUdxuoyirKerFkZ3OivcQFbJC0Yfa3mDYSco-fvaFO0kax9l9ixPtRfyH?from_tab_name=main'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/Technologylinguists'
          },
          {
            text: 'CNB',
            link: 'https://cnb.cool/kejiyuzhe'
          },
          {
            text: '稀土掘金',
            link: 'https://juejin.cn/user/2021343348396172'
          },
          {
            text: 'CSND',
            link: 'https://blog.csdn.net/2302_81075415?spm=1000.2115.3001.5343'
          }
        ]
      }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '个人简介', link: '/examples/' },
          { text: '开源项目库', link: '/examples/op' }
        ]
      },
      {
        text: '开源项目',
        items: [
          { text: '科技骰子点名宝（Dice-Roll-Call）', link: '/project/Dice-Roll-Call' },
          { text: '智域扫雷（Smart-Mine-Hunt）', link: '/project/Smart-Mine-Hunt' },
          { text: '语创科技白板（Yuchuang-SmartBoard）', link: '/project/Yuchuang-SmartBoard' }
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Technologylinguists' }
    ]
  }
})