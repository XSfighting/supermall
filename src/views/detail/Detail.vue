<template>
<div id="detail">
  <detail-nav-bar ref="nav" @titleClick="titleClick"/>
  <scroll class="content" ref="scroll" :probe-type="3"  @scroll="contentScroll">
    <detail-swiper :topImages="topImages"/>
    <detail-base-info :goodsInfo="goodsInfo"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
    <detail-params-info ref="params" :param-info="paramInfo"/>
    <detail-comment-info ref="comment" :comment-info="commentInfo"/>
    <goods-list ref="recommend" :goods="recommends"/>
  </scroll>
  <detail-bottom-bar class="detail-bottom-bar" @addToCart="addToCart"/>
  <back-top @click.native="backClick" v-show="isShowBackTop"/>
  <toast></toast>
</div>

</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamsInfo from "@/views/detail/childComps/DetailParamsInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import BackTop from "@/components/content/backtop/BackTop";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";
import Toast from "@/components/common/toast/Toast";

import {getDetail, getRecommend, GoodsInfo,Shop, GoodsParams} from "@/network/detail";
import {itemListenerMixin} from "@/components/common/mixin";
import {debounce} from "@/components/common/utils";


export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast,
    Scroll
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {
        user: {
          avatar: ''
        }
      },
      recommends: [],
      // itemImgListener: null,
      themeTopY: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBackTop: false,
    }
  },
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid
    // console.log(this.iid);

    // 2.根据iid请求详情页数据
    getDetail(this.iid).then((res)=> {
      // 1.获取顶部的图片轮播数据
      // console.log(res);
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

      // 6.获取评论信息
      if (data.rate.cRate !==0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    // 3.请求推荐数据
    getRecommend().then(res=> {
      // console.log(res);
      this.recommends = res.data.list
    }),

    // 4.给getThemeTopY赋值
    this.getThemeTopY = debounce(()=> {
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)
      console.log(this.themeTopY);
    },1000)
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index) {
    this.$refs.scroll.scrollTo(0,-this.themeTopY[index],200)
    },
    contentScroll(position) {
      // 1. 判断backTop是否显示
      this.isShowBackTop = -position.y > 1000
      // 1. 获取y值
      const positionY = -position.y
      let length = this.themeTopY.length
      // 2. positionY和主题中的值进行判断
      for (var i=0; i < length-1; i++) {
        // if (positionY > this.themeTopY[i+0] && positionY < this.themeTopY[i-0+1]) {
        //   console.log(i);
        // }
        if (this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])) {
          this.currentIndex = i
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }


    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
    addToCart() {
     // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goodsInfo.title
      product.desc = this.goodsInfo.desc
      product.price = this.goodsInfo.newPrice
      product.realPrice = this.goodsInfo.realPrice
      product.iid = this.iid

      // 将商品加入到购物车
      this.$store.dispatch('addCart', product).then(res=> {
       this.$toast.show(res)
      })
    }
  }
}
</script> // 将商品加入到购物车
this.$store.dispatch('addCart', product).then(res=> {
this.$toast.show(res)
})

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