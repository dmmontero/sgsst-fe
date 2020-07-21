<template lang="html">
	<v-container>
		<v-row justify="center">
			<v-layout justify-center fill-height>
				<v-flex xs12 sm12 md8>
					<v-form ref="form" v-model="valid" @submit.prevent="upload">
						<v-row>
							<v-col xs12 sm6 md6>
								<v-textarea
									label="Descripción:"
									hint="Sescripción del documento"
									v-model="documento.descripcion"
									:rules="documento.descripcionRules"
								></v-textarea>
							</v-col>
						</v-row>
						<v-row>
							<v-col xs12 sm12 md8>
								<v-file-input
									:rules="documento.chosenFileRules"
									v-model="documento.chosenFile"
									show-size
									counter
									label="Documento"
								></v-file-input>
							</v-col>
						</v-row>
						<v-row justify-center>
							<v-col xs12 sm12 md8>
								<v-btn
									color="success"
									class="mr-4"
									:disabled="!valid"
									type="submit"
								>
									Guardar
								</v-btn>
								<v-btn color="error" class="mr-4" @click="reset">Borrar</v-btn>
								<v-btn color="success" class="mr-4" @click="descargar"
									>Descargar</v-btn
								>
							</v-col>
						</v-row>
					</v-form>
				</v-flex>
			</v-layout>
		</v-row>
	</v-container>
</template>

<script>
import { Dropbox } from "dropbox/lib/index";

export default {
	name: "upload-documento",
	props: {
		token: String
	},
	mounted() {},
	data() {
		return {
			valid: true,
			lazy: true,
			documento: {
				chosenFile: null,
				chosenFileRules: [v => !!v || "Archivo es requerido"],
				descripcion: "",
				descripcionRules: [v => !!v || "Descripción es requerida"]
			}
		};
	},
	methods: {
		upload: function() {
			if (!this.$refs.form.validate()) return;

			var dbx = new Dropbox({
				accessToken:
					"uJl6NGMoNF4AAAAAAAADx8FXadtNa1An67KI19h4BYi82MewhiEVEV2G04ITwD8Q"
			});

			dbx
				.filesUpload({
					path: "/categoria/" + this.documento.chosenFile.name,
					contents: this.documento.chosenFile
				})
				.then(response => {
					let documento = {
						categoria: this.$route.params.idCategoria,
						descripcion: this.documento.descripcion,
						ruta: response.path_display,
						activo: true,
						usuarioCreador: "dmontero"
					};

					this.$api
						.createDocumento(documento)
						.then(result => {
							console.log(`Documento creado ${result}`);
						})
						.catch(err => {
							console.error(err);
						});
				})
				.catch(function(error) {
					console.error("Error", error);
				})
				.finally(() => {});
		},
		reset: function() {
			this.$refs.form.reset();
		},
		descargar: () => {
			var dbx = new Dropbox({
				accessToken:
					"uJl6NGMoNF4AAAAAAAADx8FXadtNa1An67KI19h4BYi82MewhiEVEV2G04ITwD8Q"
			});

			dbx
				.filesDownload({
					path: "/categoria/comprobante_162020.pdf"
				})
				.then(function(data) {
					// console.log(data);
					// Create an object URL for the blob object
					const url = URL.createObjectURL(data.fileBlob);
					// Create a new anchor element
					const a = document.createElement("a");

					a.href = url;
					a.download = data.name || "download";
					const clickHandler = () => {
						setTimeout(() => {
							URL.revokeObjectURL(url);
							a.removeEventListener("click", clickHandler);
						}, 100);
					};
					a.addEventListener("click", clickHandler, false);
					a.click();

					// var downloadUrl = URL.createObjectURL(data.fileBlob);
					// var downloadButton = document.createElement('a');
					// downloadButton.setAttribute('href', downloadUrl);
					// downloadButton.setAttribute('download', data.name);
					// downloadButton.setAttribute('class', 'button');
					// downloadButton.innerText = 'Download: ' + data.name;
					// document.getElementById('results').appendChild(downloadButton);
				})
				.catch(function(error) {
					console.error(error);
				});
		}
	},
	computed: {}
};
</script>

<style scoped></style>
