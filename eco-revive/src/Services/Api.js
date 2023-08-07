import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8081",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((emilly) => {
  const token = localStorage.getItem("token");
  if (token) {
    emilly.headers = {
      ...emilly.headers,
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
    };
  }
  return emilly;
});

api.interceptors.response.use((response) => {
  return response;
});
