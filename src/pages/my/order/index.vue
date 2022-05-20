<template>
  <view>消息列表</view>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data)
    };
  }
};
</script>

<style lang="scss"></style>
