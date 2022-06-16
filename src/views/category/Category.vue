<template>
  <div>
    <nav-bar class="cate-nav"><div slot="center">商品分类</div></nav-bar>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
import navBar from "@/components/common/navbar/NavBar";
export default {
  name: "Category",
  components: {
    navBar
  },
  data() {
    return {
    }
  },


}
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: pink;
  overflow: hidden;
  /*overflow-y: scroll;*/
}
.cate-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: var(--color-tint);
  color: white;
}
</style>