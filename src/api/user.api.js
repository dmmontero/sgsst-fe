import httpClient from "./httpClient";
const qs = require("querystring");
const END_POINT = "/users";
const config = {
	headers: {
		"content-type": "application/x-www-form-urlencoded;charset=utf-8"
	}
};
const loginUser = (username, password) => {
	let _data = { username, password };
	return httpClient.post("/login", qs.stringify(_data), config);
};
const getAllUsers = () => httpClient.get(END_POINT);
const getUser = user_id => httpClient.get(END_POINT, { user_id });
const createUser = (username, password) =>
	httpClient.post(END_POINT, { username, password });
export { getAllUsers, getUser, createUser, loginUser };
