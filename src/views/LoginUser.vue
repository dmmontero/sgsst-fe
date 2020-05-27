<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-alert type="error" v-if="message">{{ message }}</v-alert>
          <v-form>
            <v-text-field
              prepend-icon="person"
              name="login"
              label="Login"
              id="login"
              v-model="login"
              type="text"
            ></v-text-field>
            <v-text-field
              prepend-icon="lock"
              name="password"
              label="Password"
              id="password"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="primary" v-on:click="authenticate">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="js">

  import { loginUser } from '../api/user.api';

  export default  {
    name: 'login-user',
    props: {
      role: String
    },
    mounted () {
    },
    data () {
      return {
        login: '',
        password: '',
        message:'',
      }
    },
    methods: {
      authenticate: function(){
        this.message = '';
          loginUser(this.login,this.password)
          .then( result => {
             localStorage.setItem("token",result.data.token);
             this.$store.commit('updateIsLogged',true);
            //  localStorage.setItem("loggedIn", true);
             //emitir evento al loguearse
            //  this.$isLogged.value = true;
            //  this.$emit('updateRole',result.data.Usuario.role)
             this.$router.push('/categoria');
          })
          .catch( error => {
            this.message = error.response.data.err.message
          });
      }
    }
}
</script>
<style scoped></style>
