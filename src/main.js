/* eslint-disable prettier/prettier */
// import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
// import Vuex from "vuex";
// import VuexPersistence from "vuex-persist";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
import ApiPlugIn from "./api/plugin-api";
import "@babel/polyfill";
import "@mdi/font/css/materialdesignicons.css";

// Vue.use(Vuex);

Vue.use(ApiPlugIn, "$api");

Vue.config.productionTip = false;

/*
const store = new Vuex.Store({
	state: {
		token: localStorage.getItem("user-token") || "",
		isLogged: false,
		user: {}
	},
	mutations: {
		updateIsLogged(state, isLogged) {
			state.isLogged = isLogged;
		},
		updateUser(state, _user) {
			state.user = _user;
			localStorage.setItem("user-token", _user ? _user.token : null);
		}
	},
	actions: {
		updateIsLogged({ commit }, isLogged) {
			commit("updateIsLogged", isLogged);
		},
		updateUser({ commit }, user) {
			commit("updateUser", user);
		}
	},
	getters: {
		isLogged(state) {
			return state.isLogged;
		},
		getRole(state) {
			if (state.isLogged) return state.user.role;

			return "anonimo";
		},
		getUser(state) {
			return state.user;
		},
		getToken(state) {
			return state.user.token || null;
		}
	},
	plugins: [new VuexPersistence().plugin]
});
*/

new Vue({
	router,
	vuetify,
	store,
	render: h => h(App)
}).$mount("#app");
