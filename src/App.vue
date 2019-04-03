<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  .loading {
    max-width: 200px;
  }

  .float-right {
    float: right;
  }

  @media (max-width: 400px){
  .max-400-column{
    flex-direction: column;
  }
}

</style>
<script>
  export default {
    name: 'App',
    created() {}
  }

</script>
