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
      <v-btn small to="/login" color="primary" fab dark>
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
  props:{
    role:String
  },
  data() {
      return {
        drawer: false // Hide mobile side menu by default
      };
  },
  watch: {
    role: function (val) {
      console.log(val);
    }
  }
}
</script>

<style scoped></style>
