import { defineConfig } from "tinacms";

// TinaCMS 配置 - 樂玩德州撲克內部手冊
export default defineConfig({
  branch: "main", // 確保此分支已在 GitHub 中推送
  clientId: "9cbfef65-81b5-498f-85dc-9744a88824d1", // 您的 Tina Client ID
  token: "39301ee276b5e52ccd0eec5a26af0318b18b2343", // 您的 Tina Token
  build: {
    outputFolder: "admin", // 後台管理介面的路徑
    publicFolder: "docs/public", // 調整為 docs/public，讓 VitePress 自動處理
  },
  media: {
    tina: {
      mediaRoot: "docs/public", // 圖片上傳的路徑
      publicFolder: "docs",
    },
  },
  schema: {
    collections: [
      {
        name: "manual",
        label: "📖 核心手冊",
        path: "docs",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "標題",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "內容",
            isBody: true,
          },
        ],
      },
    ],
  },
});
