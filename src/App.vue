<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url('./assets/world.jpg'); */
  height: 100vh;
}

</style>
