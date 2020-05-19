import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json"
    // anything you want to add to the headers
  }
});

/**
 * Token
 */
const getAuthToken = () => localStorage.getItem("token");

/**
 * Inject Authotization Header
 */
const authInterceptor = config => {
  config.headers["Authorization"] = getAuthToken();
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
