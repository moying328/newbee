<template>
  <div class="login">
    <img class="logo" src="//s.weituibao.com/1582958061265/mlogo.png" alt="">
    <div v-if="type=='login'" class="login-body login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{required:true,message:'请填写用户名'}]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="verify">
          <Verify ref="loginVerifyRef" @error="error" :showButton="false" @success="success" :width="'100%'" :height="'40px'" :fontSize="'16px'" :type="2"></Verify>
        </div>
        <div style="margin: 16px;">
          <van-button round block type="info" color="#1baeae" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div v-else class="login-body register">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username1"
          name="username1"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password1"
          type="password"
          name="password1"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="verify">
          <Verify ref="registerVerifyRef" @error="error" :showButton="false" @success="success" :width="'100%'" :height="'40px'" :fontSize="'16px'" :type="2"></Verify>
        </div>
        <div style="margin: 16px;">
          <div class="link-login" @click="toggle('login')">已有登录账号</div>
          <van-button round block type="info" color="#1baeae" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 添加登录和注册接口
import {login,register} from '../service/user'
// 本地存储函数
import { setLocal, getLocal } from '@/common/js/utils'
import { Toast } from 'vant'
import Verify from 'vue2-verify'
export default {
  data(){
    return{
      username: '',
      password: '',
      username1: '',
      password1: '',
      type: 'login',
      verify: false, // 此变量判断验证码输入是否正确
    }
  },
  components:{
    Verify, // 记得验证码组件是需要注册的，否则直接使用会报错
  }
}
</script>

<style lang="less" scoped>

</style>