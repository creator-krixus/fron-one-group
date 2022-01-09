<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/"><img src="../assets/Negro.png" alt="logo" class="logo"></router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
            <router-link to="/" v-if="this.$route.path !== '/productos'">Home</router-link>
            <router-link to="/login" v-if="this.$route.path === '/productos'">Logout</router-link>
            <router-link to="/login" v-if="this.$route.path !== '/productos'">Login</router-link>
            <router-link to="/register" v-if="this.$route.path !== '/productos'">Registrar</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>

a {
    color: #fff;
    margin-right: 2rem;
    text-decoration: none;
}

.logo{
    width: 60px;
    height: 30px;
}

</style>