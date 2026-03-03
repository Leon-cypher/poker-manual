import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "樂玩德州撲克",
  description: "內部訓練與營運手冊",
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
          { text: '有效行動 (SA) 定義', link: '/有效行動（SA）定義' },
          { text: '50% 規則：不足最小加注', link: '/50規則：不足最小加注怎麼判？' },
          { text: '多顆籌碼下注判定', link: '/多顆籌碼下注（Multi-chip）判定：先看能不能拿掉最小顆' },
          { text: '一次動作原則', link: '/一次動作原則（下注不可反悔）' },
          { text: '短碼 All-in 重開加注？', link: '/短碼 All-in：什麼時候不會重新打開加注？' },
          { text: '錯發 (Misdeal) 規定', link: '/錯發（Misdeal）何時不能宣告？' },
          { text: '攤牌順序：誰先亮牌？', link: '/攤牌順序：誰先亮牌？' },
        ]
      }
    ],

    search: {
      provider: 'local'
    }
  }
})