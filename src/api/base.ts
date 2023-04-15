import axios from "axios";
import { errorHandler, requestHandler, responseHandler } from "./interceptors";

const BASE_URL = "http://127.0.0.1:4000";

const token = localStorage.getItem("token") ?? ""

const apiInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const apiInstanceFormData = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});

apiInstance.interceptors.request.use(requestHandler, errorHandler);
apiInstance.interceptors.response.use(responseHandler, errorHandler, {});
apiInstanceFormData.interceptors.request.use(requestHandler, errorHandler);
apiInstanceFormData.interceptors.response.use(
  responseHandler,
  errorHandler,
  {}
);

export default apiInstance;
