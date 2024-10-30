import axios from "axios";

const baseURL =
  process.env.REACT_APP_BACKEND_URL || "https://api.lwl8.com";
const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

axiosInstance.defaults.withCredentials = true;
export default axiosInstance;