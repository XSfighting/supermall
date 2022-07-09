<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">超级商城</div></nav-bar>
    <div><user-info class="user-info"/></div>

    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <div class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </div>

    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
    <list-view :list-data="moreList" class="more-list"></list-view>

  </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";

import UserInfo from "@/views/profile/childComps/UserInfo";
import ListView from "@/views/profile/childComps/ListView";

export default {
  name: "Profile",
  components: {
    navBar,
    UserInfo,
    ListView
  },
  data() {
    return {
      orderList: [
        {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
      ],
      moreList:[
        {icon: '#expired', iconColor: '#ff8198', info: '设置'},
        {icon: '#vip', iconColor: '#ff8198', info: '更多'},
      ]
    }
  }
}
</script>

<style scoped>
#profile {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.profile-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: white;
}
.account {
  margin-top: 10px;
  display: flex;
  padding: 15px;
  justify-content: space-evenly;
  text-align: center;
}
.account .account-item {
  font-size: 18px;
}
</style>