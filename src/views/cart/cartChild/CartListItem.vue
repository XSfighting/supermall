<template>
<div class="cart-item">
  <div class="item-selector">
  <CheckButton :is-checked="itemInfo.checked" @click.native="checkClick"/>
  </div>

  <div class="item-img">
    <img :src="itemInfo.image" alt="商品图片">
  </div>

  <div class="item-info">
    <div class="item-title">{{itemInfo.title}}</div>
    <div class="item-desc">{{itemInfo.desc}}</div>
    <div class="item-bottom">
      <div class="item-price">￥{{itemInfo.realPrice}}</div>
      <div class="item-count">x{{itemInfo.count}}</div>
    </div>
  </div>

</div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  methods: {
    checkClick() {
      this.$store.commit('changeCheckedState',this.itemInfo)
      // this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style scoped>
.cart-item {
  width: 100%;
  font-size: 0;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,.item-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.item-bottom {
  display: flex;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.item-bottom .item-price {
  color: orangered;
  flex: 1;
}
</style>