<template>
  <div class="home">
    <van-button type="primary">默认按钮</van-button>
    <div class="hi">你好</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
  .hi{
    color:red;
    background: yellow;
    width: 75px;
    height: 75px;
    font-size: 18PX;
  }
</style>
