const subpackages = [
  // {
  //   root: 'category',
  //   pages: [
  //     'pages/category/index',
  //   ]
  // }
];

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index'
  ],
  subpackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
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
      }
    ]
  }
})
