require('dotenv').config();
import axios from 'axios';

// Tạo instance axios
const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || 'http://localhost:3001',
  timeout: 10000
});

// Interceptor request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor response
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
