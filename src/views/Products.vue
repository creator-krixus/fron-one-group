<template>
    <div class="contenedor">
        <router-link to="/admin" variant="primary">Administrar Productos</router-link>
        <div class="contenedor__producto">
            <div v-for="item in data" :key="item._id" class="contenedor__producto--card">
                <Card :item="item" />
            </div>
        </div>
    </div>
</template>
<script>

import Card from '../components/Card.vue'

export default {
    data(){
        return{
            data : []
        } 
    },
    components: {
        Card
    },
    methods: {
        async getProducts(){
            let response = await this.$store.dispatch("products/getProducts");
            this.data = response
        }
    },
    created(){
        this.getProducts()
    }
}
</script>

<style lang="scss" scoped>
.contenedor{
    padding: 1.5%;

    a{
        text-decoration: none;
        border-radius: 5px;
        padding: 1%;
        color: #fff;
        background: #0275d8;
    }

    &__producto{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around; 
        margin-top: 1%;
    }
}

</style>
