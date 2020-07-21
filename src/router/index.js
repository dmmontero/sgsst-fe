import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginUser from "../views/LoginUser.vue";
import CategoriaDocumento from "../views/CategoriaDocumento.vue";
import UploadDocumento from "../views/UploadDocumento.vue";
import Unauthorized from "../views/Unauthorized.vue";
import store from "../store/index";

Vue.use(VueRouter);
const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/login", name: "LoginUser", component: LoginUser },
	{
		path: "/categoria",
		name: "CategoriaDocumento",
		component: CategoriaDocumento
	},
	{
		path: "/upload/:idCategoria",
		name: "UploadDocumento",
		component: UploadDocumento,
		meta: { requiresAuth: true }
	},
	{ path: "/unauthorized", name: "Unauthorized", component: Unauthorized },
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});
/*** * Verificar cada ruta */
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters.isLogged) {
			next();
			return;
		}
		next("/unauthorized");
	} else {
		next();
	}
});
export default router;
