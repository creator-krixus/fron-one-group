<template>
    <div class="contenedor">
        <div class="contenedor__form">
            <b-form @submit.prevent="onSubmit">
                <b-form-group
                id="input-group-1"
                label="Email Address"
                label-for="input-1"
                class="mb-3"
                >
                <b-form-input
                    id="input-1"
                    v-model="usuario.email"
                    type="email"
                    placeholder="Enter your email"
                    required
                ></b-form-input>
                </b-form-group>

                <b-form-group
                id="input-group-2"
                label="Your Password"
                label-for="input-1"
                class="mb-3"
                >
                <b-form-input
                    id="input-2"
                    v-model="usuario.password"
                    type="password"
                    placeholder="Enter your password"
                    required
                ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" class="contenedor__form--button">Submit</b-button>
            </b-form>
        </div>
        <div class="contenedor__img">
            <img src="../assets/Negro.png" alt="">
        </div>
    </div> 
</template>

<script>

  export default {
    data() {
      return {
        usuario: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
    async onSubmit() {
        await this.$store.dispatch("login/login", this.usuario);
        if(localStorage.getItem('token') != null){
          this.$router.push({ name: "Products" });
        }
        this.usuario.email= '',
        this.usuario.password= ''
      }
      
    }
  }
</script>

<style lang="scss" scoped>

.contenedor{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10%;
    background: lightcyan;

    &__form{
        border-radius: 15px;
        border: solid 1px black;
        padding: 3%;
        margin-bottom: 5%;
    }

    &__img img{
        max-width: 600px;
        max-height: 500px;
        width: 100%;
        height: 100%;
    }
}

</style>