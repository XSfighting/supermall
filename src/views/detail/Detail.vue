<template>
<div id="detail">
  <detail-nav-bar/>
  <scroll class="content" ref="scroll">
    <detail-swiper :topImages="topImages"/>
    <detail-base-info :goodsInfo="goodsInfo"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
    <detail-params-info :param-info="paramInfo"/>
  </scroll>
</div>

</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamsInfo from "@/views/detail/childComps/DetailParamsInfo";
import Scroll from "@/components/common/scroll/Scroll";


import {getDetail,GoodsInfo,Shop,GoodsParams} from "@/network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    }
  },
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid
    console.log(this.iid);
    // 2.根据iid请求详情页数据
    getDetail(this.iid).then((res)=> {
      // 1.获取顶部的图片轮播数据
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.获取商品详情图片
      this.detailInfo = data.detailInfo

      // 5. 获取参数信息
      this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc( 100% - 44px );
}
</style>