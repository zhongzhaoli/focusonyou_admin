<template class="w-100 h-100">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light max-400-column">
      <router-link to="/index">
        <div class="navbar-brand">FocusOnYou 管理员后台</div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="/index">
            <li class="nav-item active">
              <a class="nav-link" href="javascript:void(0)">首页</a>
            </li>
          </router-link>
          <router-link to="/appeal">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">上诉管理</a>
            </li>
          </router-link>
          <router-link to="/proposal">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">上诉反馈</a>
            </li>
          </router-link>
          <router-link to="/takeout">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">周边外卖</a>
            </li>
          </router-link>
          <router-link to="/treehold">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">树洞管理</a>
            </li>
          </router-link>
          <router-link to="/mother">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">母亲节</a>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>
    <div class="text-center loading_bg" v-if="loading">
      <img class="loading" src="../../assets/loading.gif" alt>
    </div>
    <div class="container mt-5">
      <div class="alert alert-info d-flex justify-content-between" role="alert">
        <div>
          管理员：
          <span style="color: red;">{{ name }}</span> 你好！
        </div>
        <div class="logout" @click="logout()">退出登录</div>
      </div>
    </div>
    <div class="container mt-5 h-100 index_div text-center">
      <router-link to="/appeal">
        <div class="fun_div d-flex align-items-center justify-content-center flex-column">
          <img src="../../assets/admin_index_1.png" alt>
          <div>上诉管理</div>
        </div>
      </router-link>
      <router-link to="/proposal">
        <div class="fun_div d-flex align-items-center justify-content-center flex-column">
          <img src="../../assets/admin_index_2.png" alt>
          <div>上诉反馈</div>
        </div>
      </router-link>
      <router-link to="/takeout">
        <div class="fun_div d-flex align-items-center justify-content-center flex-column">
          <img src="../../assets/admin_index_3.png" alt>
          <div>周边外卖</div>
        </div>
      </router-link>
      <router-link to="/treehold">
        <div class="fun_div d-flex align-items-center justify-content-center flex-column">
          <img src="../../assets/admin_index_4.png" alt>
          <div>树洞管理</div>
        </div>
      </router-link>
      <router-link to="/mother">
        <div class="fun_div d-flex align-items-center justify-content-center flex-column">
          <img src="../../assets/admin_index_5.png" alt>
          <div>母亲节</div>
        </div>
      </router-link>
      <div class="mb-5"></div>
    </div>
  </div>
</template>
<style lang="less">
@import "./index.less";
</style>
<script>
import { setCookie, delCookie } from "../../assets/js/cookie";
export default {
  data() {
    return {
      loading: false,
      name: ""
    };
  },
  created() {
    this.loading = true;
    let that = this;
    this.$get("/isadmin").then(mes => {
      that.loading = false;
      that.name = mes;
    });
  },
  methods: {
    logout() {
      delCookie("api_token");
      this.$router.push("/login");
    }
  }
};
</script>
