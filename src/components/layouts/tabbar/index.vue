<template>
  <nut-tabbar
    :bottom="true"
    :safeAreaInsetBottom="true"
    v-model:visible="active"
    @tab-switch="tabSwitch"
    v-if="0"
  >
    <nut-tabbar-item tab-title="首页" icon="home" to=""></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import Taro from "@tarojs/taro";

export default {
  props: ["active"],
  setup(props) {
    const data = reactive({
      active: props.active
    });

    onMounted(() => {
      // data.active = Taro.getStorageSync("222") ? Taro.getStorageSync("222") : 0;
    });

    const tabSwitch = (_item, index) => {
      let url = "/pages/index/index";
      switch (index) {
        case 1:
          url = "/pages/category/index";
          break;
        case 4:
          url = "/pages/user/index";
          break;
      }

      Taro.setStorage({
        key: "222",
        data: index,
        success: () => {
          Taro.switchTab({
            url
          });
        }
      });
    };

    return {
      tabSwitch,
      ...toRefs(data)
    };
  }
};
</script>
