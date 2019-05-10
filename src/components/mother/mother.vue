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
            <li class="nav-item">
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
            <li class="nav-item active">
              <a class="nav-link" href="javascript:void(0)">母亲节</a>
            </li>
          </router-link>
        </ul>
      </div>
    </nav>
    <div class="text-center loading_bg" v-if="loading">
      <img class="loading" src="../../assets/loading.gif" alt>
    </div>
    <div class="container d-flex h-100 flex-column" v-if="!loading">
      <div class="text-center mt-4">
        <span>母亲节短信数量：<b style="color: red">{{ mes_length }}条</b></span>
        <br>
        <span>生成海报数量：<b style="color: red">{{ mes.poster }}张</b></span>
      </div> 
      <div class="card mt-4" v-for="i in mes.mes">
        <div class="card-header flex_space">
          <span>{{ i.nickname }}</span>
          <span>{{ i.create_time }}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title music">短信类型：{{ type[i.type] }}</h5>
          <h5 class="card-title music">{{ (i.phone) ? "联系方式：" + i.phone : "联系方式：无" }}</h5>
          <span>想说的话：{{ (i.remark) ? i.remark : '空' }}</span>
        </div>
      </div>
      <div class="mb-5"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      mes: {},
      mes_length: 0,
      type: ["占位符", "早安问候", "晚安陪伴", "触及真心"]
    };
  },
  created() {
    const that = this;
    this.loading = true;
    this.$get("/mother_data").then(mes => {
      this.mes = mes;
      this.mes_length = mes.mes.length;
      this.loading = false;
    });
  }
};
</script>
<style>
@import "./mother.less";
</style>

