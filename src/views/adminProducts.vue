<template>
    <div class="contenedor">
        <h1 class="mb-4">Registrar nuevo producto</h1>
        <div class="contenedor__form">
            <b-form @submit.prevent="saveProduct">
                <b-form-group
                    id="input-group-1"
                    label="Imagen"
                    label-for="input-1"
                    class="mb-3"
                >
                <b-form-input
                    id="input-1"
                    v-model="producto.imagen"
                    type="text"
                    placeholder="Direccion http imagen"
                    required
                    
                ></b-form-input>
                </b-form-group>

                <b-form-group 
                    id="input-group-2" 
                    label="Nombre" 
                    label-for="input-2">

                <b-form-input
                    id="input-2"
                    v-model="producto.nombre"
                    placeholder="Nombre"
                    required
                    class="mb-3"
                ></b-form-input>
                </b-form-group>

                <b-form-group 
                    id="input-group-3" 
                    label="Valor" 
                    label-for="input-3">
                
                <b-form-input
                    id="input-3"
                    v-model="producto.valor"
                    placeholder="Valor"
                    type="number"
                    required
                    class="mb-3"
                ></b-form-input>
                </b-form-group>

                <b-form-group 
                    id="input-group-4" 
                    label="Calificacion" 
                    label-for="input-3">
                
                <b-form-select 
                    v-model="producto.calificacion" 
                    :options="options"
                    class="mb-3"
                    size="l"
                    required
                ></b-form-select>
                </b-form-group>


                <b-button type="submit" variant="primary" >Save</b-button>
            </b-form>
        </div>
        <div class="contenedor__table">
            <b-table striped hover :items="items" ></b-table>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [],
        producto: {
            imagen: null,
            nombre: null,
            valor: null,
            calificacion: null,
        },  
        options: [
          { value: null, text: 'Please select some item' },
          { value: 'Una estrella', text: 'Una estrella' },
          { value: 'Dos estrellas', text: 'Dos estrellas' },
          { value: 'Tres estrellas', text: 'Tres estrellas' },
          { value: 'Cuatro estrellas', text: 'Cuatro estrellas'},
          { value: 'Cinco estrellas', text: 'Cinco estrellas' }
        ]
      }
    },
    methods: {
        async saveProduct(){       
            this.producto = {
                imagen: this.producto.imagen,
                nombre: this.producto.nombre,
                valor: parseInt(this.producto.valor),
                calificacion: this.producto.calificacion
            }     
            await this.$store.dispatch("products/registerProduct", this.producto);
        },
        async getProducts(){
            let response = await this.$store.dispatch("products/getProducts");
            this.items = response
        }
    },
    created(){
        this.getProducts()
    }
  }
</script>

<style lang="scss" scoped>
.contenedor{
    padding: 2%;

    &__form{
        max-width: 500px;
        width: 100%;
        padding: 3%;
        border: solid 1px black ;
        border-radius: 5px;
        margin: 0 auto;
    }

}
</style>
