import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://taurus-blog.onrender.com/api/users',
});


axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); 

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
