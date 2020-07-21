/* eslint-disable prettier/prettier */
import httpClient from "./httpClient";
const qs = require("querystring");
const END_POINT = "/categoria";
const config = {
	headers: { "content-type": "application/x-www-form-urlencoded;charset=utf-8" }
};
const getAlltegoriasDocumento = () => httpClient.get(END_POINT + "/documentos");
const creategoriaDocumento = categoria =>
	httpClient.post(END_POINT, qs.stringify(categoria), config);
export { getAlltegoriasDocumento, creategoriaDocumento };
