// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  // 確保此分支已在 GitHub 中推送
  clientId: "90c014e0-1b7a-426f-a5a4-122106c653b8",
  // 您的 Tina Client ID
  token: "30c390f6bad7148ce73f8c820b49cfec169972a5",
  // 您的 Tina Token
  build: {
    outputFolder: "admin",
    // 後台管理介面的路徑
    publicFolder: "docs/public"
    // 調整為 docs/public，讓 VitePress 自動處理
  },
  media: {
    tina: {
      mediaRoot: "docs/public",
      // 圖片上傳的路徑
      publicFolder: "docs"
    }
  },
  schema: {
    collections: [
      {
        name: "manual",
        label: "\u{1F4D6} \u6838\u5FC3\u624B\u518A",
        path: "docs",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u6A19\u984C",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "body",
            label: "\u5167\u5BB9",
            isBody: true,
            ui: {
              component: "textarea"
            }
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
