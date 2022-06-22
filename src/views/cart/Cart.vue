<template>
  <div class="cart">
    <!--导航-->
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <!--商品列表-->
    <cart-list class="cart-list"/>
    <!--底部汇总-->
    <cart-bottom-bar/>

  </div>


</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/cartChild/CartList";
import CartBottomBar from "@/views/cart/cartChild/CartBottomBar";

import {mapGetters} from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // 两种语法
    ...mapGetters(['cartLength'])
    // ...mapGetters({
    //   length: 'cartLength'})
  }

}
</script>

<style scoped>

.cart-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: var(--color-tint);
  color: white;
}
.cart-list {
  margin-top: 44px;
}

</style>