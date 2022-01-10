<template>
    <div class="contenedor">
        <b-card
            :title="item.nombre"
            :img-src="item.imagen" 
            img-width="370px" 
            img-height="300px"
            :img-alt="item.nombre"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-1"
        >
            <b-card-text>
              Valor: {{ item.valor }}  <br>
              Calificacion:  {{ item.calificacion }}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped>

.contenedor{
    padding: 4%;
}

</style>