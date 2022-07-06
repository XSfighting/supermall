import Vue from 'vue'
import Vuex from 'vuex'
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建store对象
const store =  new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  getters,
  actions,
  modules: {
  }
})

// 3. 导出store  挂载到Vue实例上
export default store
