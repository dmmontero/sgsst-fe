<template>
	<v-container bg grid-list-md text-xs-center>
		<v-row justify="center">
			<v-layout justify-center fill-height>
				<v-flex xs12 sm8 md4>
					<v-form ref="form" v-model="valid" @submit.prevent="authenticate">
						<v-card class="elevation-12">
							<v-toolbar dark color="primary">
								<v-toolbar-title>Iniciar Sesión</v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<v-alert type="error" v-if="message">{{ message }}</v-alert>
								<v-text-field
									prepend-icon="person"
									name="login"
									label="Login"
									id="login"
									v-model="auth.login"
									type="text"
								></v-text-field>
								<v-text-field
									prepend-icon="lock"
									name="password"
									label="Password"
									id="password"
									:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
									:type="show1 ? 'text' : 'password'"
									@click:append="show1 = !show1"
									v-model="auth.password"
									v-on:keyup.enter="authenticate"
								></v-text-field>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn dark color="primary" type="submit">Login</v-btn>
							</v-card-actions>
						</v-card>
					</v-form>
				</v-flex>
			</v-layout>
		</v-row>
	</v-container>
</template>
<script>
// import axios from "axios";
export default {
	name: "login-user",
	props: {
		role: String
	},
	mounted() {},
	data() {
		return {
			valid: true,
			show1: false,
			auth: {
				login: "",
				password: ""
			},
			message: ""
		};
	},
	methods: {
		authenticate: function() {
			this.message = "";
			const { login, password } = this.auth;

			// axios
			// .post('http://localhost:8088/login',{ login, password })
			// .then(() => {
			// 	this.$router.push('/categoria')
			// })
			// .catch( error => {
			// 	this.message = error.response.data.error.mensaje;
			// });

			this.$store
				.dispatch("login", { login, password })
				.then(() => {
					this.$router.push("/categoria");
				})
				.catch(error => {
					this.$store.dispatch("updateUser", null);
					this.message = error.response.data.error.mensaje;
				});
		}
	}
};
</script>
<style scoped></style>
