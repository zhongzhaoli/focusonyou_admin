<template class="w-100 h-100">
  <div class="container d-flex align-items-center justify-content-center h-100 flex-column">
    <div class="">
      <h2 class="title text-center">FocusOnYou管理员系统</h2>
      <div class="mt-4">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="手机号" v-model="name">
          <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="密码" v-model="password">
          <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
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
  export default {
    data() {
      return {
        name: "",
        password: ""
      }
    },
    created() {
      this.name = "";
      this.password = "";
    },
    methods: {
      login() {
        this.$post('/login', {
          'name': this.name,
          'password': this.password
        }).then((mes) => {
          console.log(mes);
        });
      }
    }
  }

</script>
