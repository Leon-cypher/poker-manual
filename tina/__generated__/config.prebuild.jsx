// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  // 確保此分支已在 GitHub 中推送
  clientId: "9cbfef65-81b5-498f-85dc-9744a88824d1",
  // 您的 Tina Client ID
  token: "39301ee276b5e52ccd0eec5a26af0318b18b2343",
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
            type: "rich-text",
            name: "body",
            label: "\u5167\u5BB9",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
