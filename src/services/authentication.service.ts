import axios from '../config/axios.config';
import { apiUrls } from '../config/env';
import { AxiosResponse } from 'axios';

class AuthService {

  async login(username: string, password: string): Promise<any> {
    
    const response: AxiosResponse<any> = await axios.post(apiUrls.signin(), { username, password });

    if (response.data.jwtToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  }

  logout(callback: Function) {
    localStorage.removeItem("user");
    callback();
  }

  async register(username: string, email: string, password: string): Promise<any> {
    return axios.post(apiUrls.signup(), { username, email, password });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') as string);;
  }

}

export const authenticationService = new AuthService();