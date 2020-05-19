import httpClient from "./httpClient";
const qs = require("querystring");

const END_POINT = "/users";

const config = {
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8"
  }
};

/**
 *
 * @param {User name} username
 * @param {Password} password
 */
const loginUser = (username, password) => {
  let _data = {
    username, // This is the body part
    password
  };

  return httpClient.post("/login", qs.stringify(_data), config);
};

const getAllUsers = () => httpClient.get(END_POINT);

// you can pass arguments to use as request parameters/data
const getUser = user_id => httpClient.get(END_POINT, { user_id });
// maybe more than one..
const createUser = (username, password) =>
  httpClient.post(END_POINT, { username, password });

export { getAllUsers, getUser, createUser, loginUser };
