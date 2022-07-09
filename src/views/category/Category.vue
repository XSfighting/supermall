<template>
<<<<<<< HEAD
  <div>
    <nav-bar class="cate-nav"><div slot="center">商品分类</div></nav-bar>

=======
  <div id="category">
    <nav-bar class="cate-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" class="tab-menu"></tab-menu>
      <scroll class ="scroll-content">
        <tab-content :categoriesProduct="categoriesProduct"></tab-content>
        <tab-control :titles="['综合', '新品', '销量']"
                     @tabClick="tabClick"></tab-control>
        <tab-content-detail :categoryDetail="showCategoryDetail"></tab-content-detail>
      </scroll>
    </div>


>>>>>>> category
  </div>
</template>

<script>
<<<<<<< HEAD
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


=======
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabControl/TabControl";

import TabMenu from "@/views/category/ChildComps/TabMenu";
import TabContent from "@/views/category/ChildComps/TabContent";
import TabContentDetail from "@/views/category/ChildComps/TabContentDetail";

import {getCategory, getSubcategory, getCategoryDetail} from "@/network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    Scroll,
    TabControl,
    TabMenu,
    TabContent,
    TabContentDetail

  },
  data() {
    return {
      categories: [],
      currentIndex: 0,
      categoryData: [],
      categoriesProduct: [],
      currentType: 'pop'
    }
  },
  created() {
    // 请求分类数据
    this._getCategory()

  },
  mounted() {

  },
  methods: {
    // 获取分类数据
    _getCategory() {
      getCategory().then(res => {
        // console.log(res.
        // data.category);
        this.categories = res.data.category.list

        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 请求默认显示的分类子数据
        this._getSubcategory(0);
      })
    },
    // 获取分类子数据
    _getSubcategory(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoriesProduct = res.data.list;
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this._getCategoryDetail('pop')
        this._getCategoryDetail('new')
        this._getCategoryDetail('sell')
        console.log(this.categoryData[index]);
      })
    },
    // 获取分类详情数据
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = {...this.categoryData};
      });
    },
    selectItem(index) {
      this._getSubcategory(index);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }
  },
  computed: {
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      // console.log(this.categoryData[this.currentIndex].categoryDetail[this.currentType])
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
>>>>>>> category
}
</script>

<style scoped>
<<<<<<< HEAD
.wrapper {
  height: 200px;
  background-color: pink;
  overflow: hidden;
  /*overflow-y: scroll;*/
=======
#category {
  position: relative;
  height: 100vh;
>>>>>>> category
}
.cate-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
<<<<<<< HEAD
  z-index: 999;
  background-color: var(--color-tint);
  color: white;
}
=======
  z-index: 99;
  background-color: var(--color-tint);
  color: white;
}

.content {
  margin-top: 44px;
  display: flex;
}

.scroll-content {
  overflow: hidden;
  flex: 1;
  height: calc( 100% - 44px );

}
>>>>>>> category
</style>