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
    custom: false,
    color: "#000000",
    selectedColor: "#fa2c19",
    backgroundColor: "#ffffff",
    list: [
      {
        iconPath: "assets/images/tabbar/home.png",
        selectedIconPath: "assets/images/tabbar/home-hover.png",
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        iconPath: "assets/images/tabbar/category.png",
        selectedIconPath: "assets/images/tabbar/category-hover.png",
        pagePath: "pages/category/index",
        text: "分类"
      },
      {
        iconPath: "assets/images/tabbar/cart.png",
        selectedIconPath: "assets/images/tabbar/cart-hover.png",
        pagePath: "pages/user/address/index",
        text: "购物车"
      },
      {
        iconPath: "assets/images/tabbar/my.png",
        selectedIconPath: "assets/images/tabbar/my-hover.png",
        pagePath: "pages/user/index",
        text: "我的"
      }
    ]
  }
});
