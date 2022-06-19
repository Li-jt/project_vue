<template>
  <div>
    <jt-bg />
    <div class="login">
      <p class="title">登录</p>
      <div class="cont">
        <div class="username">
          <ui-input v-model="username" placeholder='请输入账户' />
          <!-- <el-input v-model="username" placeholder="请输入账户"></el-input> -->
        </div>
        <div class="password">
          <ui-input type="password" v-model="password" placeholder='请输入密码' />
          <!-- <el-input type="password" v-model="password" placeholder="请输入密码" :show-password="true"></el-input> -->
        </div>
        <div class="login_button">
          <UiButton @click="login">登录</UiButton>
          <!-- <el-button>登录</el-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JtBg from '@/components/JtBg'
import UiInput from '@/components/UI/UiInput'
import UiButton from '@/components/UI/UiButton'
import * as userType from '@/store/user/types'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  components: { JtBg, UiInput, UiButton },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    ...mapMutations('userOptions', [userType.SETTOKEN]),
    login() {
      this[userType.SETTOKEN]('uuid-123');
      this.$router.replace({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 350px;
  // height: 400px;
  padding-bottom: 80px;
  background-color: rgba($color: #fff, $alpha: 0.5);
  position: fixed;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  border-radius: 10px;

  .title {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin-top: 20px;
  }

  .cont {
    margin-top: 50px;

    .username {
      width: 80%;
      height: 40px;
      margin: 0 auto;
    }

    .password {
      width: 80%;
      height: 40px;
      margin: 0 auto;
      margin-top: 20px;
    }

    .login_button {
      width: 80%;
      height: 40px;
      margin: 0 auto;
      margin-top: 20px;
      border-radius: 40px;
      // overflow: hidden;
    }
  }
}
</style>