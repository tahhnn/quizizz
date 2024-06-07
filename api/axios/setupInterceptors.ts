import { AxiosInstance } from "axios";
import { onErrorResponse } from "./handleErrorResponse";
import { onRequest } from "./handleRequest";
import { onResponse } from "./handleResponse";
import { API_BASE_URL } from "@/utils/config";

export const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.defaults.baseURL = API_BASE_URL + "/rest/v1";

    instance.defaults.paramsSerializer = (params) => {
      return Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
    };
    instance.interceptors.request.use(onRequest, onErrorResponse);
    instance.interceptors.response.use(onResponse, onErrorResponse);
  
    return instance;
  };