import ValidationError from "@/app/exceptions/validationError";
import axios from "axios";

const callApi = (headers = {}) => {
  // const cookie = new Cookies();
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;

      if (config.method === "post") {
        config.headers = {
          ...config.headers,
          ...headers, // هدرهای ورودی
        };
      }
      return config;
    },
    (err) => Promise.reject(err)
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      const res = err?.response;
      if (res) {
        if (res.status === 422) {
          throw new ValidationError(res.data.errors);
        }
        if (res.status === 401) {
          Router.push("/auth/login");
        }
      }

      Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default callApi;
