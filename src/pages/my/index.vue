<template>
  <view>用户中心</view>
  <navigator url="/pages/user/address/index">收货地址</navigator>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";

export default {
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
