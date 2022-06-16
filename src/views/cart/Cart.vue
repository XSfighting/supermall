<template>
  <nav-bar class="cart-nav"><div slot="center">购物车</div></nav-bar>

</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
export default {
  name: "Cart",
  components: {
    navBar
  },

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
</style>