<template>
<div class="cart-bottom-bar">

  <div class="check-content" >
    <check-button class="check-all" :is-checked="isSelectAll" @click.native="selectAll"></check-button>
    <span>全选</span>
  </div>

  <div class="price">合计:￥{{totalPrice}}</div>

  <div class="calculate">
    去结算({{checkLength}})
  </div>


</div>
</template>

<script>
import { mapGetters} from "vuex";
import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  methods: {
    selectAll() {
      if (this.isSelectAll) {
        this.$store.commit('notSelectAll')
      } else {
        this.$store.commit('selectAll')
      }
    }
  },
  computed: {
    ...mapGetters['cartList'],
    totalPrice() {
      return this.$store.state.cartList.filter(item => item.checked
      ).reduce((preValue,item)=> {
       return preValue + item.realPrice * item.count
      },0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item=> item.checked).length
    },
    isSelectAll() {
      return this.$store.state.cartList.every(item => item.checked)
    }

  }

}
</script>

<style scoped>
.cart-bottom-bar {
  position: relative;
  bottom: 44px;
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: #eee;
  font-size: 14px;

}
.check-content {
  display: flex;
  align-items: center;
  margin: 0 10px;
  width: 80px;

}
.check-all {
  width: 22px;
  height: 22px;
  line-height: 22px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 80px;
  background-color: var(--color-tint);
  text-align: center;

}
</style>