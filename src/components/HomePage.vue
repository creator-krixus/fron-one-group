<template>
  <div class="contenedor">
    <div class="contenedor__img">
      <img src="../assets/Negro.png" alt="logo" class="contenedor__img--logo">
    </div>
    <div class="contenedor__text">
      <h1 class="mb-3">We help you<br>to boost your<br>business</h1>
      <p class="mb-4">Use content and social media<br> marketing to your advantage</p>
      <router-link to="/register" variant="primary">Get Started</router-link>
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

  &__img--logo{
    max-width: 800px;
    width: 100%;
    margin-top: 20px;
  }

  &__text{
    padding: 2%;
    margin-top: 80px;
    a {
        text-decoration: none;
        border-radius: 5px;
        padding: 4%;
        color: #fff;
        background: #0275d8;
    }
  }
}
</style>
