<template>
<div v-if="Object.keys(goodsInfo).length !==0" class="base-info">
  <div class="info-title">{{goodsInfo.title}}</div>
  <div class="info-price">
    <span class="n-price">{{goodsInfo.newPrice}}</span>
    <span class="o-price">{{goodsInfo.oldPrice}}</span>
    <span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span>
  </div>
  <div class="info-other">
    <span>{{goodsInfo.columns[0]}}</span>
    <span>{{goodsInfo.columns[1]}}</span>
    <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
  </div>
  <div class="info-service">
    <span class="info-service-item" v-for="index in goodsInfo.services.length-1" :key="index">
      <img :src="goodsInfo.services[index-1].icon" alt="">
      <span>{{goodsInfo.services[index-1].name}}</span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailBase",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  padding: 10px;
}
.info-title {
  margin-top: 10px;
  color: #222;
}
.info-price {
  margin-top: 15px;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 14px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-other {
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-top: 20px;
  font-size: 13px;
  color: #999;

}
.info-service {
  display: flex;
  font-size: 12px;
  padding: 10px 4px;
  justify-content:  space-between;
  border-bottom: 2px solid #ededed;
}
.info-service img {
  height: 12px;
  width: 12px;
  vertical-align: middle;

}
.info-service span  {
  font-size: 12px;
  vertical-align: middle;
}
.discount {
  color: #fff;
  font-size: 8px;
  border-radius: 100px;
  background-color: var(--color-high-text);
  text-align: center;
  line-height: 18px;
  padding:0 5px;
  height: 18px;
  margin-top:2px;
}

</style>