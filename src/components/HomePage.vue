<template>
  <div class="contenedor">
    <div class="contenedor__img">
      <img src="../assets/Negro.png" alt="logo" width="800px">
    </div>
    <div class="contenedor__text">
      <h1>We help you<br>to boost your<br>business</h1>
      <p>Use content and social media marketing to your advantage</p>
      <b-button href="#" variant="primary">Get Started</b-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contenedor{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 3%;

  &__text{
    padding: 2%;
  }
}
</style>
