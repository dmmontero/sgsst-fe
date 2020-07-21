import { loginUser } from "@/api/user.api";
const state = {
	token: localStorage.getItem("user-token"),
	isLogged: false,
	user: {}
};
const mutations = {
	updateIsLogged(state, isLogged) {
		state.isLogged = isLogged;
	},
	updateUser(state, _user) {
		state.user = _user ? _user.Usuario : null;
		state.isLogged = _user ? true : false;
		localStorage.setItem("user-token", _user ? _user.token : null);
	}
};
const actions = {
	updateIsLogged({ commit }, isLogged) {
		commit("updateIsLogged", isLogged);
	},
	updateUser({ commit }, user) {
		commit("updateUser", user);
	},
	login({ commit }, user) {
		return loginUser(user.login, user.password).then(result => {
			commit("updateUser", result.data);
		});
	},
	logout({ commit }) {
		localStorage.removeItem("user-token");
		commit("updateUser", null);
	}
};
const getters = {
	isLogged: state => {
		return state.isLogged;
	},
	getRole: state => {
		if (state.isLogged) return state.user.role;
		return "anonimo";
	},
	getUser: state => {
		return state.user;
	},
	getToken: state => {
		return state.token || null;
	}
};
export default { state, mutations, actions, getters };
