<template>
  <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
    <p>刷新次数: {{ getcount }}</p>
    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
    <img
      class="doge"
      slot="pulling"
      slot-scope="props"
      src="https://img.yzcdn.cn/vant/doge.png"
      :style="{ transform: `scale(${props.distance / 80})` }"
    >
      <!-- 释放提示 -->
    <img
      class="doge"
      slot="loosing"
      src="https://img.yzcdn.cn/vant/doge.png"
    >
    <!-- 加载提示 -->
    <img
      class="doge"
      slot="loading"
      src="https://img.yzcdn.cn/vant/doge-fire.jpg"
    >
    <div v-text="count"></div>
    <div>doneTodosCount{{doneTodosCount}}</div>
  </van-pull-refresh>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { Toast } from 'vant';

export default {
  data() {
    return {
      getcount: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      console.log(this.isLoading)
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        // this.$store.commit('incrementAsync',{
        //   amount:10
        // })
        // this.incrementAsync({
        //   amount:10
        // })
        this.increment()
        console.log(this.$store.state.count)
        console.log("onRefresh -> this.store.getters.getTodoById(2)", this.$store.getters.getTodoById(2))
        this.getcount++;
      }, 1000);
    },
    ...mapMutations([
      'increment'
    ]),
    ...mapActions([
      'increment'
    ])
  },
  computed:mapState({
    count:function(){
      return this.$store.state.count
    },
    ...mapGetters([
      'doneTodosCount'
    ])
  }),
  created(){
    console.log(this.$store.getters.doneTodosCount)
  }
}
</script>

<style>
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>