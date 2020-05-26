<template lang="html">
  <v-layout row wrap>
    <v-flex xs12 md6 lg3 v-for="doc in categorias" :key="doc._id">
      <v-card min-height="120" shaped>
        <v-card-title primary-title>
          {{ doc.nombre }}
        </v-card-title>
        <v-card-actions>
          <v-btn color="orange" text>Listen Now</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="js">
import { getAlltegoriasDocumento } from '../api/categoria-documento.api'

  export default  {
    name: 'categoria-documento',
    props: [],
    mounted () {
       getAlltegoriasDocumento()
       .then( result => {
             this.categorias = result.data.categorias;
          })
          .catch( error => {
            this.message = error.response.data.err.message
          });
    },
    data () {
      return {
        categorias:null,
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped></style>
