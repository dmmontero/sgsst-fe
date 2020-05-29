<template lang="html">
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-file-input show-size counter label="Documento"></v-file-input>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Guardar
    </v-btn>
    <v-btn color="error" class="mr-4" @click="reset">
      Borrar
    </v-btn>
  </v-form>
</template>

<script lang="js">

  export default  {
    name: 'upload-documento',
    props: {
      token: String
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped></style>
