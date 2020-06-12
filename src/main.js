// import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import ApiPlugIn from "./api/plugin-api";
import "@babel/polyfill";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuex);

Vue.use(ApiPlugIn, "$api");

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    isLogged: false,
    user: null
  },
  mutations: {
    updateIsLogged(state, isLogged) {
      state.isLogged = isLogged;
    },
    updateUser(state, _user) {
      state.user = _user;
    }
  },
  plugins: [new VuexPersistence().plugin]
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
