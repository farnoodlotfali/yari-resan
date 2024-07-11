import axios from "axios";

const USER_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

const onError = (error) => {
  const e = error;
  const msg = e.response.data.message;

  throw error;
};

const AuthorizationConfig = () => {
  AxiosInstance.defaults.headers.Authorization = `Bearer ${USER_TOKEN}`;
};

const responseBody = (response) => response.data;

// with token
const fetcher = {
  get: (url, configs = {}) => {
    AuthorizationConfig();
    return AxiosInstance.get(url, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
  post: (url, body = {}, configs = {}) => {
    AuthorizationConfig();
    return AxiosInstance.post(url, body, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
  put: (url, body = {}, configs = {}) => {
    AuthorizationConfig();
    return AxiosInstance.put(url, body, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
  patch: (url, body = {}, configs = {}) => {
    AuthorizationConfig();

    return AxiosInstance.patch(url, body, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
  delete: (url, configs = {}) => {
    AuthorizationConfig();
    return AxiosInstance.delete(url, configs)
      .then(responseBody)
      .catch((e) => onError(e));
  },
};

export { fetcher };
