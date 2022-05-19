import { createApp } from 'vue'
import { Button, Toast, Tabbar, TabbarItem, Icon, Navbar, Category, CategoryPane } from '@nutui/nutui-taro';

import './app.scss'

const App = createApp({
  onShow(options) {
    console.log(options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast).use(Tabbar).use(TabbarItem).use(Icon).use(Navbar).use(Category).use(CategoryPane)

export default App
