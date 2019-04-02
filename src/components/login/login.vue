<template class="w-100 h-100">
  <div class="container d-flex align-items-center justify-content-center h-100 flex-column">
    <div class="">
      <h2 class="title text-center">FocusOnYou管理员系统</h2>
      <div class="mt-4">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="用户名" v-model="name">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="密码" v-model="password">
          <small id="password" class="form-text text-danger">{{ error_name_password }}</small>
        </div>
        <div class="form-group">
          <button class="btn btn-primary w-100" @click="login()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @import "./login.less";

</style>
<script>
  import { setCookie } from '../../assets/js/cookie';

  export default {
    data() {
      return {
        name: "",
        password: "",
        error_name_password: ""
      }
    },
    created() {
      this.name = "";
      this.password = "";
    },
    methods: {
      init() {
        this.error_name_password = "";
      },
      login() {
        this.init();
        const that = this;
        this.$post('/login', {
          'name': this.name,
          'password': this.password
        }).then(mes => {
          setCookie('api_token', mes.message.token);
          this.$router.push('/index');
        }, mes => {
          that.error_name_password = "账号不存在或账号密码错误";
        });
      }
    }
  }

</script>
