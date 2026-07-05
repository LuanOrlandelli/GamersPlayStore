import axios from "axios";

const api = axios.create({
  baseURL: "https://6a4a9865edfa6a2b5fd8037b.mockapi.io",
});

export default api;