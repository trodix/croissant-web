import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { baseURL, apiUrls } from './env';
import { authenticationService as AuthService} from '../services/authentication.service';
import history from "../history";

const authToken: String = AuthService.getCurrentUser()?.jwtToken;

const axiosConfig: AxiosRequestConfig = { baseURL, headers: {
  Authorization: `Bearer ${authToken}`
}};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use(undefined, error => {

  const originalRequest = error.config;

  if (error.response.status === 401 && originalRequest.url === apiUrls.refreshToken()) {
    history.push('/login');
    return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) {

    originalRequest._retry = true;
    return axiosInstance.post('/authentication/refresh-token', { refreshToken: AuthService.getCurrentUser()?.refreshToken })
    .then(response => {
      if (response.status === 201) {
        // 1) put token to LocalStorage
        AuthService.setCurrentUser(response.data);

        // 2) Change Authorization header
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${AuthService.getCurrentUser()?.jwtToken}`;

        // 3) return originalRequest object with Axios.
        return axiosInstance(originalRequest);
      }
    })
  }
  // return Error object with Promise
  return Promise.reject(error);
});

export default axiosInstance;