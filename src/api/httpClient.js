/* eslint-disable prettier/prettier */
import axios from "axios";
import store from "@/store";
import router from "@/router";
const httpClient = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
	headers: {
		"Content-Type": "application/json"
		// anything you want to add to the headers
	}
});
/** * Inject Authotization Header */
const authInterceptor = config => {
	let token = store.getters.getToken;
	if (token) config.headers["token"] = token;

	return config;
};
const _error = err => {
	return Promise.reject(err);
};

httpClient.interceptors.request.use(authInterceptor, _error);

httpClient.interceptors.response.use(null, error => {
	if (error.response.status === 401) {
		store.dispatch("logout");
		router.push({ path: "/unauthorized", name: "Unauthorized" });
	}
	return Promise.reject(error);
});

export default httpClient;
