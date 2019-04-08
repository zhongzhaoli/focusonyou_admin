<template class="w-100 h-100">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light max-400-column">
      <a class="navbar-brand" href="#">FocusOnYou 管理员后台</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="/index">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">首页</a>
            </li>
          </router-link>
          <router-link to="/appeal">
            <li class="nav-item active">
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
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">树洞管理</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="text-center loading_bg" v-if="loading">
      <img class="loading" src="../../assets/loading.gif" alt="">
    </div>
    <div class="container d-flex h-100 flex-column">
      <div class="card mt-4" v-for="i in mes">
        <div class="card-header flex_space">
          <span>{{ (i.nickname) ? i.nickname : "匿名用户" }}</span>
          <span>{{ i.create_time }}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title music">{{ (i.music) ? "音乐：" + i.music : "音乐：无" }}</h5>
          <h5 class="card-title music">{{ (i.contact) ? "联系方式：" + i.contact : "联系方式：无" }}</h5>
          <p class="card-text">{{ i.story }}</p>
        </div>
      </div>
    </div>
    <div class="mb-5"></div>
  </div>
</template>
<style lang="less">
  @import "./appeal.less";

</style>
<script>
  export default {
    data() {
      return {
        mes: {},
        loading: false
      }
    },
    created() {
      const that = this;
      this.loading = true;
      this.$get('/appeal/appeal').then(mes => {
        that.mes = mes;
        this.loading = false;
      })
    },
    methods: {}
  }

</script>
