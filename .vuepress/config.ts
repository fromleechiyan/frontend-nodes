import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "前端笔记",
  description: "一个自用的前端笔记",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Leechiyan",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    series: {
      "/docs/theme-reco/": [
        {
          text: "第一部分",
          children: ["home", "theme"],
        },
        {
          text: "第二部分",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        children: [
          { text: "html", link: "/docs/theme-reco/theme" },
          { text: "javascript", link: "/docs/other/guide" },
        ],
      },
    ],
    bulletin: false,
  }),
});
