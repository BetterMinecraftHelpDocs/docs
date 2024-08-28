import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "BetterMinecraftHelpDocs",
  description: "更好的Minecraft帮助文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
