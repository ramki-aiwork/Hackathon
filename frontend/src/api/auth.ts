import axios from 'axios';

// Connect to API Gateway port
export const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginCall = async (credentials: any) => {
  const { data } = await api.post('/auth/login', credentials);
  return data;
};

export const registerCall = async (userData: any) => {
  const { data } = await api.post('/auth/register', userData);
  return data;
};
