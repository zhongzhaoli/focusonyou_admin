<template class="w-100 h-100">
  <div class="container d-flex align-items-center justify-content-center h-100 flex-column">
    <div class="">
      <h2 class="title text-center">FocusOnYou管理员系统</h2>
      <div class="mt-4">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="用户名" v-model="name">
          <small id="username" class="form-text text-danger">{{ error_name }}</small>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="密码" v-model="password">
          <small id="password" class="form-text text-danger">{{ error_password }}</small>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="确认密码" v-model="c_password">
          <small id="c_password" class="form-text text-danger">{{ error_c_password }}</small>
        </div>
        <div class="form-group">
          <button class="btn btn-primary w-100" @click="register()">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @import "./register.less";

</style>
<script>
  export default {
    data() {
      return {
        password: "",
        c_password: "",
        name: "",
        error_name: "",
        error_password: "",
        error_c_password: "",
      }
    },
    created() {
      this.password = "";
      this.c_password = "";
      this.name = "";
    },
    methods: {
      init() {
        this.error_name = "";
        this.error_password = "";
        this.error_c_password = "";
      },
      register() {
        this.init();
        const that = this;
        this.$post('/register', {
          'password': this.password,
          'c_password': this.c_password,
          'name': this.name,
        }).then(mes => {
          this.$router.push('/login');
        }, mes => {
          for (var i in mes.data) {
            that["error_" + i] = mes.data[i][0];
          }
        })
      }
    }
  }

</script>
