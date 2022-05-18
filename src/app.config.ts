const subpackages = [
  // {
  //   root: 'user',
  //   pages: [
  //     'pages/layout/index', 
  //   ]
  // }
];

export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subpackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
