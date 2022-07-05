export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/product/index',
    'pages/cart/index',
    'pages/my/index',
    'pages/my/address/index',
    'pages/my/order/index',
    'pages/my/message/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#fa2c19',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home-hover.png',
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        iconPath: 'assets/images/tabbar/category.png',
        selectedIconPath: 'assets/images/tabbar/category-hover.png',
        pagePath: 'pages/category/index',
        text: '分类'
      },
      {
        iconPath: 'assets/images/tabbar/cart.png',
        selectedIconPath: 'assets/images/tabbar/cart-hover.png',
        pagePath: 'pages/cart/index',
        text: '购物车'
      },
      {
        iconPath: 'assets/images/tabbar/my.png',
        selectedIconPath: 'assets/images/tabbar/my-hover.png',
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  }
})
