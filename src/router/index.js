import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("@/views/home/Home");
// import Category from "@/views/category/Category";
const Category = ()=> import("@/views/category/Category")
// import Cart from "@/views/cart/Cart";
const Cart = () => import("@/views/cart/Cart")
// import Profile from "@/views/profile/Profile";
const Profile = () => import("@/views/profile/Profile")
const Detail = () => import("@/views/detail/Detail")

// 1. 安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'Home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

// 2.创建路由对象
const router = new VueRouter({
  routes,
  // mode: 'history'
})

// 3.导出router
export default router
