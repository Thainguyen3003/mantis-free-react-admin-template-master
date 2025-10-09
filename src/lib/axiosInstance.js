require('dotenv').config();
import axios from 'axios';

// Sửa lại hàm handleLogout để đảm bảo sync
const handleLogout = () => {
  return new Promise((resolve) => {
    try {
      // Clear tất cả localStorage liên quan
      window.localStorage.clear(); // Clear tất cả để đảm bảo

      // Thêm một chút delay để đảm bảo localStorage được clear
      setTimeout(() => {
        window.location.replace('/login');
        resolve();
      }, 100);
    } catch (error) {
      console.error('Logout failed:', error);

      // Force reload trang login nếu có lỗi
      window.location.replace('/login');
      resolve();
    }
  });
};

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
    if (error.response?.status === 401) {
      try {
        handleLogout();
      } catch (error) {
        console.error('Force logout due to error:', error);
        window.localStorage.clear();
        window.location.replace('/login');
      }
    }
    console.error('API Error:', error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
