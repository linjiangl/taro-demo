<template>
  <nut-category :category="category" @change="change">
    <nut-categorypane :categoryChild="categoryChild" @onChange="onChange">
    </nut-categorypane>
  </nut-category>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import list from "./index.json";

export default {
  setup() {
    const data = reactive({
      categoryInfo: {},
      category: [{}],
      categoryChild: [{}]
    });

    onMounted(() => {
      setTimeout(() => {
        getData();
      }, 500);
    });

    const getData = () => {
      const { categoryInfo, categoryChild } = list;
      data.categoryInfo = categoryInfo;
      data.category = categoryInfo.category;
      data.categoryChild = categoryChild;
    };

    const change = (index: any) => {
      data.categoryChild = [].concat(
        data.categoryInfo["category"][index + 1].children as any
      );
    };
    const onChange = () => {
      console.log("当前分类数据");
    };
    return {
      onChange,
      change,
      ...toRefs(data)
    };
  }
};
</script>
