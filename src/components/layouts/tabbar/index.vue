<template>
  <nut-tabbar :bottom="true" :safeAreaInsetBottom="true" v-model:visible="active" @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
import Taro from '@tarojs/taro'

export default {
  setup() {
    const data = reactive({
      options: {
        home: "home",
        category: "catetory",
        cart: "cart",
        my: "my",
      },
      active: 1,
    });

    const tabSwitch = (_item, index) => {
      let url = '/pages/index/index'
      switch(index) {
        case 1:
          url = '/pages/category/index'
          break;
      }
      Taro.switchTab({
        url
      })
    };

    return {
      tabSwitch,
      ...toRefs(data),
    };
  },
};
</script>

