import axios from '../config/axios.config';
import { apiUrls } from '../config/env';
import { AxiosResponse } from 'axios';
import { Player } from '../types';

class Croissant {

  fetchPlayerList(): Promise<Player[]> {
    return axios.get(apiUrls.getAllPlayers)
      .then((response: AxiosResponse ) => (response.data) as Player[]);
  }

}

export const croissantService = new Croissant();