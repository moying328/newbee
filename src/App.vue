<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view class="router-view"/>
    </transition>
    <nav-bar v-if="isShowNav"></nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
export default {
  data(){
    return{
      transitionName:'slide-left',
      isShowNav:true,
      showMenuList:['/','/home','/category','/cart','/user']
    }
  },
  components:{
    navBar
  },
  watch: {
      $route(to, from) {
        // 通过 ES6 提供的 includes 属性判断 to.path 是否包含在数组内
        if(this.showMenuList.includes(to.path)){
          this.isShowNav=true
        }else{
          this.isShowNav=false
        }
        // 由主级到次级
        // to.meta 能取到 route 路由参数中的 meta 属性
        if (to.meta.index > from.meta.index) {
          // 通过改变变量名称控制左右滑动
          this.transitionName = 'slide-left' // 向左滑动
        } else if (to.meta.index < from.meta.index) {
          // 由次级到主级
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = ''   //同级无过渡效果
        }
      }
    }
}
</script>

<style lang="less">
@import './common/style/mixin';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  //不让页面切换时的平移来把整个页面蹭大
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
}

.router-view{
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter{
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
