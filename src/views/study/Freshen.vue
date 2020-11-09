<template>
  <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
    <p>刷新次数: {{ count }}</p>
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
  </van-pull-refresh>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      console.log(this.isLoading)
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
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