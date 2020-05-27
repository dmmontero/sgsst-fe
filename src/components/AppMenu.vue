<template>
  <div>
    <v-toolbar dense>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" exact>Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            v-show="isLoggedIn"
            small
            @click="logout"
            color="primary"
            fab
            light
            v-on="on"
          >
            <v-icon>mdi-account-arrow-right</v-icon>
          </v-btn>
        </template>
        <span>Salir ...</span>
      </v-tooltip>
      <v-btn v-show="!isLoggedIn" small to="/login" color="primary" fab dark>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- Start of mobile side menu -->
    <v-navigation-drawer app v-model="drawer" left>
      <v-toolbar flat="">
        <v-toolbar-items>
          <v-btn text to="/" exact>Home</v-btn>
          <v-btn text to="/about">About</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-navigation-drawer>
  </div>
</template>

<script lang="js">

export default  {
  name: 'app-menu',
  data() {
      return {
        drawer: false, // Hide mobile side menu by default
      };
  },
  methods: {
    logout: function () {
      this.$store.commit('updateIsLogged',false);
      this.$router.push('/');

    }
  },
  // watch: {
  //   role: function (val) {
  //     console.log(val);
  //     // this.isLogged = this.$isLogged.value;
  //      this.isLogged = localStorage.loggedIn.toLowerCase() === 'true';
  //   }
  // },
  computed:{
      isLoggedIn(){
        return this.$store.state.isLogged;
      }
  }
}
</script>

<style scoped></style>
