import { defineConfig } from "tinacms";

// 定義我們的內容模型 (Collections)
export default defineConfig({
  branch: "main", // 我們推送到 GitHub 的分支
  clientId: "9cbfef65-81b5-498f-85dc-9744a88824d1", // 您的 Tina Client ID
  token: process.env.TINA_TOKEN || "", // 之後註冊 Tina Cloud 時會拿到
  build: {
    outputFolder: "admin", // 後台管理介面的路徑
    publicFolder: "docs/.vitepress/dist", // 靜態檔案存放路徑
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
