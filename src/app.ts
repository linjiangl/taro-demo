import { createApp } from "vue";
import {
  Row,
  Col,
  Button,
  Toast,
  Tabbar,
  TabbarItem,
  Icon,
  Navbar,
  Card,
  Tag,
  Price,
  Category,
  CategoryPane,
  SearchBar,
  Checkbox,
  CheckboxGroup
} from "@nutui/nutui-taro";

import "./app.scss";

const App = createApp({
  onShow(options) {
    console.log(options);
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(Row)
  .use(Col)
  .use(Button)
  .use(Toast)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Navbar)
  .use(Card)
  .use(Tag)
  .use(Price)
  .use(Category)
  .use(CategoryPane)
  .use(SearchBar)
  .use(Checkbox)
  .use(CheckboxGroup);

export default App;
