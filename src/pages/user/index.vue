<template>
  <view>用户中心</view>
  <navigator url="/pages/user/address/index">收货地址</navigator>
  <Tabber :active="4" />
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
import Tabber from "@/components/layouts/tabbar/index.vue";

export default {
  components: {
    Tabber
  },
  setup() {
    const data = reactive({
      categoryInfo: {},
      category: [{}],
      categoryChild: [{}]
    });

    return {
      ...toRefs(data)
    };
  }
};
</script>

<style lang="scss"></style>
