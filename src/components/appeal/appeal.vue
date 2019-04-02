<template class="w-100 h-100">
  <div>
    <div class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        FocusOnYou 上诉管理
      </a>
    </div>
    <div class="container mt-5 d-flex h-100">
      <div class="card" v-for="i in mes">
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
  </div>
</template>
<style lang="less">
  @import "./appeal.less";

</style>
<script>
  export default {
    data() {
      return {
        mes: {}
      }
    },
    created() {
      const that = this;
      this.$get('/appeal/appeal').then(mes => {
        that.mes = mes;
      })
    },
    methods: {}
  }

</script>
