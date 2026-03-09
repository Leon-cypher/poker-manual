import { defineConfig } from "tinacms";

// TinaCMS 配置 - 樂玩德州撲克內部手冊
export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "90c014e0-1b7a-426f-a5a4-122106c653b8",
  token: process.env.TINA_TOKEN || "",
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
