import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginUser from "../views/LoginUser.vue";
import CategoriaDocumento from "../views/CategoriaDocumento.vue";
import UploadDocumento from "../views/UploadDocumento.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "LoginUser",
    component: LoginUser
  },
  {
    path: "/categoria",
    name: "CategoriaDocumento",
    component: CategoriaDocumento
  },
  {
    path: "/upload/:idCategoria",
    name: "UploadDocumento",
    component: UploadDocumento
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
