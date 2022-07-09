<template>
<div class="back-top" @click="backTop">
  <img src="@/assets/img/common/top.png" alt="">
</div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backTop() {
      this.$emit('backClick')
    }
  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 55px;
}
.back-top img {
  height: 43px;
  width: 43px;
}
</style>