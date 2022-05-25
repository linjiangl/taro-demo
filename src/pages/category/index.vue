<template>
  <view class="container">
    <view id="search">
      <SearchBar
        v-model="searchValue"
        @search="onSearch"
        background="linear-gradient(to right, #9866F0, #EB4D50)"
        input-background="#fff"
      ></SearchBar>
    </view>

    <view class="main">
      <Category :category="category" @change="change">
        <CategoryPane :categoryChild="categoryChild" @onChange="onChange">
        </CategoryPane>
      </Category>
    </view>
  </view>
</template>

<script lang="ts">
import { Category, CategoryPane, SearchBar } from "@nutui/nutui-taro";
import { reactive, toRefs, onMounted } from "vue";
import list from "./index.json";

export default {
  components: {
    Category,
    CategoryPane,
    SearchBar
  },
  setup() {
    const data = reactive({
      categoryInfo: {},
      category: [{}],
      categoryChild: [{}],
      searchValue: ""
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

    const onSearch = val => {
      console.log(val);
    };

    return {
      onChange,
      change,
      onSearch,
      ...toRefs(data)
    };
  }
};
</script>

<style lang="scss"></style>
