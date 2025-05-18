// src/api.js
import axios from 'axios';

const api = axios.create({
 baseURL: import.meta.env.VITE_API_URL || "http://192.168.1.9:8000/",// fallback
  //withCredentials: true // optional: include cookies if your server uses them
});

export default api;
