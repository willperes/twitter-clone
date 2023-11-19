import axios, { type AxiosError } from 'axios';
import auth from '@react-native-firebase/auth';

const API_BASE_URL = 'http://localhost:3000/';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  try {
    const user = auth().currentUser;

    if (user) {
      const authToken = await user.getIdToken();
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  } catch (error) {
    return await Promise.reject(error);
  }
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return await Promise.reject(error.response?.data);
  }
);
