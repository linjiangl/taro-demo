<template>
  <view class="container">
    <view class="cart">
      <view v-for="item in products" :key="item.id">
        <nut-row type="flex" wrap="nowrap">
          <nut-col :span="2">
            <nut-checkbox v-model="item.checked" icon-size="12"></nut-checkbox>
          </nut-col>
          <nut-col :span="20">
            <nut-card
              :img-url="item.imgUrl"
              :title="item.title"
              :price="item.price"
              :vipPrice="item.vipPrice"
              :shopDesc="item.shopDesc"
              :delivery="item.delivery"
              :shopName="item.shopName"
            >
            </nut-card>
          </nut-col>
        </nut-row>
      </view>
    </view>

    <view class="recommend"></view>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const data = reactive({
      products: [
        {
          id: 1,
          imgUrl:
            "https://img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg",
          title:
            "活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水",
          price: "388",
          vipPrice: "378",
          shopDesc: "自营",
          delivery: "厂商配送",
          shopName: "阳澄湖大闸蟹自营店>",
          checked: false
        },
        {
          id: 2,
          imgUrl:
            "https://m.360buyimg.com/n2/jfs/t1/35828/26/5078/324781/5cbea100Eb22bb637/4d2d5e3bcd86fba4.jpg",
          title: "数码相机 索尼相机",
          price: "1388",
          vipPrice: "1378",
          shopDesc: "自营",
          delivery: "厂商配送",
          shopName: "阳澄湖大闸蟹自营店>",
          checked: true
        }
      ]
    });

    return {
      ...toRefs(data)
    };
  }
};
</script>

<style lang="scss">
.cart {
  margin-top: 20px;
}
</style>
