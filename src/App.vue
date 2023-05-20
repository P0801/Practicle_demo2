<template>
  <div id="app">
  <mainView />
  
  </div>
</template>

<script>

import mainView from './views/mainView.vue';

export default {
  name: 'App',
  components: {
    mainView
  }
}
</script>

<style>
@import "./../node_modules/vue-material/dist/vue-material.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
