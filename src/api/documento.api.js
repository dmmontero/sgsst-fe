/* eslint-disable prettier/prettier */
import httpClient from "./httpClient";
const qs = require("querystring");
const END_POINT = "/documento";
const config = {
	headers: { "content-type": "application/x-www-form-urlencoded;charset=utf-8" }
};
const createDocumento = documento =>
	httpClient.post(END_POINT, qs.stringify(documento), config);
export { createDocumento };
