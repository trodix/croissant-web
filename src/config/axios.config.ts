import axios, { AxiosInstance } from 'axios';
import { baseURL } from '../config/env';

const axiosConfig: AxiosInstance = axios.create({
  baseURL
});

export default axiosConfig;