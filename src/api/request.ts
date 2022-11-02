import axios from "axios";
import { MessagePlugin } from "tdesign-vue-next";
import type { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import type { ErrorResponse } from "@/type/loginType";
const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (err: AxiosError<ErrorResponse>) => {
    const responseData: ErrorResponse | undefined = err.response?.data;
    responseData && (await MessagePlugin.error(responseData?.message));
    return Promise.reject(err);
  }
);
export default instance;
