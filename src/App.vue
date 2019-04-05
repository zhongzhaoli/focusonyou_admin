<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  .loading {
    max-width: 50px;
  }
  .loading_bg{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0; 
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
