<template lang="html">
	<v-layout justify-center fill-height>
		<v-flex xs12 sm6 md6>
			<v-alert lg5 prominent type="error">
				<h2>Acceso no autorizado</h2>
			</v-alert>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	name: "unauthorized",
	props: [],
	mounted() {},
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>

<style scoped lang="css"></style>
