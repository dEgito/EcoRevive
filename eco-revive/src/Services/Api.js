import axios from "axios";

export const api = axios.create({
  baseURL: "https://ecorevivebackend.onrender.com",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((e) => {
  const token = localStorage.getItem("token");
  if (token) {
    e.headers = {
      ...e.headers,
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
    };
  }
  return e;
});

api.interceptors.response.use((response) => {
  return response;
});
