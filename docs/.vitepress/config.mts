import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "樂玩德州撲克",
  description: "內部訓練與營運手冊",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '荷官手冊', link: '/荷官手冊' },
      { text: '培訓課表', link: '/day1-schedule' }
    ],

    sidebar: [
      {
        text: '📖 核心手冊',
        items: [
          { text: '荷官手冊', link: '/荷官手冊' },
          { text: '服務 (智)', link: '/服務_ 智' },
          { text: '外場工作 (亮)', link: '/外場工作_ 亮' },
          { text: '櫃檯場控 (佑恩)', link: '/櫃檯場控／佑恩' },
        ]
      },
      {
        text: '🗓️ 培訓課表',
        items: [
          { text: 'DAY 1｜培訓課表', link: '/day1-schedule' },
          { text: 'DAY 2｜培訓課表', link: '/day2-schedule' },
          { text: 'DAY 3｜培訓課表', link: '/day3-schedule' },
          { text: 'DAY 4｜培訓課表', link: '/day4-schedule' },
          { text: 'DAY 5｜培訓課表', link: '/day5-schedule' },
        ]
      },
      {
        text: '📚 專業教材',
        items: [
          { text: 'DAY 1｜洗牌', link: '/day1-shuffling' },
          { text: 'DAY 1｜射牌', link: '/day1-pitching' },
          { text: 'DAY 1｜遊戲規則入門', link: '/day1-rules' },
          { text: 'DAY 2｜下注級距', link: '/day2-betting' },
          { text: 'DAY 2｜點碼', link: '/day2-chips' },
          { text: 'DAY 3｜比賽類型 資訊', link: '/day3-tournaments' },
          { text: 'DAY 3-4｜主邊池', link: '/day3-4-pots' },
          { text: 'DAY 4｜犯規處理／叫 Floor', link: '/day4-floor' },
          { text: 'DAY 4｜錯誤發牌／有效行動', link: '/day4-misdeal' },
          { text: 'DAY 5｜外場工作', link: '/day5-floor-work' },
        ]
      },
      {
        text: '⚖️ 判決與規則 (TDA)',
        items: [
          { text: '規則快速參考', link: '/規則快速參考' },
          { text: '如何成為一個好的裁判', link: '/floor-judge-guide' },
        ]
      }
    ],

    search: {
      provider: 'local'
    }
  }
})