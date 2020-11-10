<template>
  <div class="cart-box">
    <s-header :title="'购物车'"></s-header>
    <div class="cart-body">
      <van-swipe-cell :right-width="50" v-for="(item,index) in list" :key="index">
        <div class="good-item">
          <van-checkbox :name="item.cartItemId" />
          <div class="good-img"><img :src="prefix(item.goodsCoverImg)" alt=""></div>
          <div class="good-desc">
            <div class="good-title">
              <span>{{ item.goodsName }}</span>
              <span>x{{ item.goodsCount }}</span>
            </div>
            <div class="good-btn">
              <div class="price">¥{{ item.sellingPrice }}</div>
              <van-stepper
                integer
                :min="1"
                :value="item.goodsCount"
                :name="item.cartItemId"
                async-change
                @change="onChange"
              />
            </div>
          </div>
        </div>
        <van-button
          slot="right"
          square
          icon="delete"
          type="danger"
          class="delete-button"
          @click="deleteGood(item.cartItemId)"
        />
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import sHeader from '@/components/SimpleHeader'
import { getCart, deleteCartItem, modifyCart } from '../service/cart'
export default {
  name:'Cart',
  components:{
    sHeader
  },
  data(){
    return{
      list:[],// 购物车商品列表
      result:[],// 选中的购物车商品 id 数组
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    async init(){
      // 加载中禁止点击
      Toast.loading({ message: '加载中...', forbidClick: true });
      //获取购物车商品数据
      const {data}=await getCart({pageNumber:1})
      this.list=data
      this.result=data.map(item=>item.cartItemId)
      Toast.clear()
    },
    goBack(){
      this.$router.go(-1)
    },
    goTo(){
      this.$router.push({path:'home'})
    },
    async onChange(value, detail) {
      if (this.list.filter(item => item.cartItemId == detail.name)[0].goodsCount == value) return
      Toast.loading({ message: '修改中...', forbidClick: true });
      const params = {
        cartItemId: detail.name,
        goodsCount: value
      }
      const { data } = await modifyCart(params)
      this.list.forEach(item => {
        if (item.cartItemId == detail.name) {
          item.goodsCount = value
        }
      })
      Toast.clear();
    },
    async deleteGood(id) {
      const { data } = await deleteCartItem(id)
      this.$store.dispatch('updateCart')
      this.init()
    },
  }
}
</script>

<style lang="less" scoped>
  @import '../common/style/mixin';
  .cart-box {
    .cart-body {
      margin: 60px 0 100px 0;
      padding-left: 10px;
      .good-item {
        display: flex;
        .good-img {
          img {
            .wh(100px, 100px)
          }
        }
        .good-desc {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          padding: 20px;
          .good-title {
            display: flex;
            justify-content: space-between;
          }
          .good-btn {
            display: flex;
            justify-content: space-between;
            .price {
              font-size: 16px;
              color: red;
              line-height: 28px;
            }
            .van-icon-delete {
              font-size: 20px;
              margin-top: 4px;
            }
          }
        }
      }
      .delete-button {
        width: 50px;
        height: 100%;
      }
    }
  }
</style>