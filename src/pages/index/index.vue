<template>
  <div class="container">
    <div class="home-top">
      <div class="home-top-search">
        <div class="logo">
          <nut-image src="@/assets/images/logo.png" width="100" height="100" round></nut-image>
        </div>
        <div class="search">
          <nut-searchbar v-model="searchValue">
            <template v-slot:leftin>
              <nut-icon size="14" name="search2"></nut-icon>
            </template>
          </nut-searchbar>
        </div>
      </div>
      <div class="home-top-slide"></div>
      <div class="home-top-service"></div>
      <div class="home-top-modules"></div>
    </div>
    <div class="home-recommend"></div>
    <div class="home-products"></div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      searchValue: ''
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped></style>
