import axios from "axios";

const api = axios.create({
  baseURL: "localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
