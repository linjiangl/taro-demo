export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/category/index",
    "pages/user/index",
    "pages/user/address/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#000000",
    backgroundColor: "#000000",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        pagePath: "pages/category/index",
        text: "分类"
      },
      {
        pagePath: "pages/user/index",
        text: "我的"
      }
    ]
  }
});
