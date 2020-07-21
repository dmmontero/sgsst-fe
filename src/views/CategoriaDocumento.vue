<template lang="html">
	<v-layout row wrap>
		<v-flex xs12 md6 lg3 v-for="cat in categorias" :key="cat._id">
			<v-card min-height="120" max-width="400" color="indigo lighten-5" outline>
				<v-card-subtitle primary-title>
					<strong>{{ cat.nombre }}</strong>
				</v-card-subtitle>
				<v-card-actions>
					<!-- cat.documentos[0].descripcion -->
					<v-btn color="orange accent-4" text v-if="cat.documentos.length > 0">Ver</v-btn>
					<v-btn text color="orange accent-4">
						Administrar
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	name: "categoria-documento",
	props: [],
	mounted() {
		this.$api
			.getAlltegoriasDocumento()
			.then(result => {
				this.categorias = result.data.categorias;
			})
			.catch(error => {
				this.message = error.response.data.err.message;
			});
	},
	data() {
		return {
			categorias: null
		};
	},
	methods: {},
	computed: {}
};
</script>

<style scoped></style>
