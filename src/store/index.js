import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import auth from "./modules/auth";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
	modules: { auth },
	plugins: [new VuexPersistence().plugin],
	strict: debug
});
