import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "前端笔记",
  description: "一个自用的前端笔记",
  pagePatterns: ["**/*.md", "!README.md", "!.vuepress", "!node_modules"],
  locales: { "/": { lang: "zh-CN" } },
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Leechiyan",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/fromleechiyan/frontend-nodes",
    docsBranch: "main",
    docsDir: "",
    lastUpdatedText: "",
    series: {
      "/docs/interview/": [
        {
          text: "基础",
          children: ["html"],
        },
        {
          text: "进阶",
          children: [],
        },
      ],
      "/docs/notes/": [
        {
          text: "随笔",
          children: [],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        children: [
          { text: "面试", link: "/docs/interview/" },
          { text: "笔记", link: "/docs/notes/" },
        ],
      },
    ],
    bulletin: false,
  }),
});
