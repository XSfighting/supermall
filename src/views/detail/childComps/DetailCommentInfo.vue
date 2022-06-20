<template>
<div v-if="Object.keys(commentInfo !== 0)" class="comment-info">
  <div class="info-header">
    <div class="header-title">用户评价</div>
    <div class="header-more" @click="seeMoreComents">
      更多
    <i class="arrow-right"></i>
    </div>
  </div>

  <div class="user-info">
    <img :src="commentInfo.user.avatar" alt="">
    <span>{{commentInfo.user.uname}}</span>
  </div>

  <div class="info-detail">
    <p>{{commentInfo.content}}</p>
    <div class="info-other">
      <span class="date">{{commentInfo.created | showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="info-img">
      <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
    </div>
  </div>
</div>
</template>

<script>
import {formatDate} from "@/components/common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      // const year = date.getFullYear()
      // const month = date.getMonth() + 1
      // const day =date.getDate()
      // return `${year}-${month}-${day}`
      return formatDate(date,'yyyy-MM-dd')
      }
  },
  methods: {
    seeMoreComents() {
      this.$router.push()
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.header-title {
  font-size: 15px;
}
.header-more {
  font-size: 13px;
}
.user-info {
  margin-top: 10px;
}
.user-info img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
}
.user-info span {
  margin-left: 10px;
  font-size: 15px;
  vertical-align: middle;
}
.info-detail {
  padding: 5px 5px 15px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-right: 8px;
}
.info-img {
  margin-top: 10px;
}
.info-img img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>