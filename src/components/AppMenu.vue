<template>
	<div>
		<v-navigation-drawer app v-model="drawer" disable-resize-watcher>
			<v-list>
				<v-list-item><v-btn text to="/" exact>Home</v-btn></v-list-item>
				<v-list-item><v-btn text to="/about">About</v-btn></v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar dense dark>
			<v-app-bar-nav-icon
				class="hidden-md-and-up"
				@click="drawer = !drawer"
			></v-app-bar-nav-icon>
			<v-btn small to="/" color="primary" fab dark>
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<v-menu
				transition="slide-x-reverse-transition"
				v-for="(x, index) in items"
				:key="index"
				top
				offset-y
				dark
				small
			>
				<template v-slot:activator="{ attrs, on }">
					<v-btn class="text-none" v-bind="attrs" v-on="on" text normal>
						{{ x.title }}
					</v-btn>
				</template>
				<v-list small>
					<v-list-item-group>
						<v-list-item
							v-for="(opt, index) in x.opciones"
							:key="index"
							:to="opt.path"
							link
						>
							<v-list-item-title>{{ opt.title }}</v-list-item-title>
						</v-list-item>
					</v-list-item-group>
				</v-list>
				<v-spacer></v-spacer>
			</v-menu>
			<v-menu transition="slide-x-transition" origin="center center" dark small>
				<template v-slot:activator="{ on, attrs }">
					<v-btn v-bind="attrs" v-on="on" class="text-none">
						Administración
					</v-btn>
				</template>
				<v-list>
					<v-list-item to="/categoria">
						<v-list-item-title>Categoria</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-spacer></v-spacer>
			<v-btn text to="/upload/5ecb2bd9c4ddd335c893235f">Upload</v-btn>
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
	</div>
</template>

<script>
export default {
	name: "app-menu",
	data() {
		return {
			drawer: false, // Hide mobile side menu by default
			appTitle: "sgsst",
			items: [
				{
					title: "Administracion",
					opciones: [
						{ title: "Opcionn 1", path: "/opcion1" },
						{ title: "Opcionn 2", path: "/opcion2" }
					]
				},
				{
					title: "Breakfast",
					opciones: [
						{ title: "Opcion 1", path: "/opcion1" },
						{ title: "Opcion 2", path: "/opcion2" },
						{ title: "Opcion 3", path: "/opcion3" },
						{ title: "Opcion 4", path: "/opcion4" }
					]
				}
			]
		};
	},
	methods: {
		logout: function() {
			this.$store
				.dispatch("logout")
				.then(() => {
					this.$router.push("/");
				})
				.catch(error => {
					this.message = error.response.data.err.message;
				});
		}
	},
	computed: {
		isLoggedIn() {
			return this.$store.state.auth.isLogged;
		}
	}
};
</script>

<style scoped></style>
