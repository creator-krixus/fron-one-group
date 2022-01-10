<template>
  <div class="contenedor">

    <div class="contenedor__registro mb-3">
      <img src="../assets/Negro.png" alt="logo">
    </div>

    <div class="contenedor__registro--form">
      <b-form @submit.prevent="onSubmit" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email Address"
          label-for="input-1"
          description="We'll never share your email with anyone else."
          class="mb-3"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            required
            
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-2" 
          label="Your Name" 
          label-for="input-2">

          <b-form-input
            id="input-2"
            v-model="form.nombre"
            placeholder="Enter your name"
            required
            class="mb-3"
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-3" 
          label="Your Password" 
          label-for="input-3">
          
          <b-form-input
            id="input-3"
            v-model="form.password"
            placeholder="Enter your Password"
            type="password"
            required
            class="mb-3"
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-4" 
          label="Confirm your Password" 
          label-for="input-3">
          
          <b-form-input
            id="input-4"
            v-model="form.confirmPassword"
            placeholder="Confirm your Password"
            type="password"
            required
            class="mb-3"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="contenedor__registro--button">Submit</b-button>
        
      </b-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          nombre: '',
          password: '',
          confirmPassword: '',
        },
        show: true
      }
    },
    methods: {
    async  onSubmit() {
        if(this.form.password === this.form.confirmPassword){
          await this.$store.dispatch("register/register", this.form);
          this.form.email = ''
          this.form.nombre = ''
          this.form.password = ''
          this.form.confirmPassword = ''
        }else{
          alert('Uno o varios campos no corresponden')
          this.form.email = ''
          this.form.nombre = ''
          this.form.password = ''
          this.form.confirmPassword = ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.contenedor{
  margin: 0;
  padding: 3%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  &__registro{
    padding: 2%;

    img{
      max-width: 600px;
      max-height: 500px;
      width: 100%;
      height: 100%;
    }
  }

  &__registro--form{
    border-radius: 15px;
    margin: auto; 
    padding: 3%;
    border: solid 1px black;
  }

  &__registro--button {
    margin: 20px;
  }
}


    

</style>
