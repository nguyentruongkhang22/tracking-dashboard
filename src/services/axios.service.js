import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3003"
    : "https://api.lackadaisical.net";

const ax = axios.create({
  baseURL,
  withCredentials: true,
});

ax.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default ax;
