<template>
	<v-app>
		<app-menu></app-menu>
		<!-- fill-height permite completar verticalmente para centrar-->
		<v-content>
			<v-container bg grid-list-md text-xs-center>
				<router-view></router-view>
			</v-container>
			<!-- <v-container bg grid-list-md text-xs-center>
        <v-row justify="center">
          <router-view @updateRole="updateRole"></router-view>
        </v-row>
      </v-container> -->
		</v-content>
	</v-app>
</template>
<script>
import AppMenu from "@/components/AppMenu.vue";
export default {
	components: {
		AppMenu
	},
	data() {
		return {};
	},
	methods: {},
	created: function() {
		this.$store.dispatch("logout").then(() => {});
	}
};
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
