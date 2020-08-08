import axios from '../config/axios.config';
import { apiUrls } from '../config/env';
import { AxiosResponse } from 'axios';
import { AuthenticatedUser } from '../types';

class AuthService {

  async login(username: string, password: string): Promise<any> {
    
    const response: AxiosResponse<any> = await axios.post(apiUrls.signin(), { username, password });

    if (response.data.jwtToken) {
      this.setCurrentUser(response.data);
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

  getCurrentUser(): AuthenticatedUser {
    return JSON.parse(localStorage.getItem('user') as string);;
  }

  setCurrentUser(user: AuthenticatedUser) {
    localStorage.setItem("user", JSON.stringify(user));
  }

}

export const authenticationService = new AuthService();