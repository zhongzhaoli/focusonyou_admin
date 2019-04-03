<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  @import "./assets/css/bootstrap.min.css";

  .loading {
    max-width: 200px;
  }

  .float-right {
    float: right;
  }

</style>
<script>
  export default {
    name: 'App',
    created() {}
  }

</script>
