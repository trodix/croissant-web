import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { baseURL } from './env';
import { authenticationService as AuthService} from '../services/authentication.service';

const authToken: string = AuthService.getCurrentUser()?.jwtToken;

const axiosConfig: AxiosRequestConfig = { baseURL, headers: {
  Authorization: `Bearer ${authToken}`
}};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);

export default axiosInstance;