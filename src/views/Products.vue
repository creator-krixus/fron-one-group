<template>
    <div class="contenedor">
<!--         <b-input-group class="mt-3 w-50 ms-auto p-4">
            <b-form-input v-on:keyup.enter="searchData" v-model="search"></b-form-input>
            <b-input-group-append>
                <b-button variant="outline-success" v-on:click="searchData">Search</b-button>
            </b-input-group-append>
        </b-input-group> -->
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
   

    &__producto{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
    }
}

</style>
