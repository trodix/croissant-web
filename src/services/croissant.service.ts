import axios from '../config/axios.config';
import { apiUrls } from '../config/env';
import { AxiosResponse } from 'axios';
import { Player, Team } from '../types';

class Croissant {

  fetchPlayerList(): Promise<Player[]> {
    return axios.get(apiUrls.getTeam())
      .then((response: AxiosResponse ) => (response.data.users) as Player[]);
  }

  incrementCounter(userId: number, ruleId: number): Promise<Player> {
    console.log("#service.before");
    return axios.put(apiUrls.increment(userId, ruleId));
  }

}

export const croissantService = new Croissant();