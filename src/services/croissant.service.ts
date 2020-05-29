import axios from '../config/axios.config';
import { apiUrls } from '../config/env';
import { AxiosResponse } from 'axios';
import { Player, NextPaymentDate } from '../types';

class Croissant {

  fetchPlayerList(): Promise<Player[]> {
    return axios.get(apiUrls.getTeam())
      .then((response: AxiosResponse ) => (response.data.users) as Player[]);
  }

  incrementCounter(userId: number, ruleId: number): Promise<Player> {
    return axios.put(apiUrls.increment(userId, ruleId))
      .then((response: AxiosResponse) => {
        const res: Player = response.data;
        res.birthDate = new Date(res.birthDate);
        return res;
    });
  }

  updateNextPaymentDate(user: Player, nextPaymentDate: Date): Promise<Player> {
    const nextPaymentBody = { nextPaymentDate } as NextPaymentDate
    return axios.put(apiUrls.updatePayday(user.id), nextPaymentBody)
      .then((response: AxiosResponse) => {
        const res: Player = response.data;
        res.birthDate = new Date(res.birthDate);
        return res;
    });
  }

  resetCounterRules(user: Player): Promise<Player> {
    return axios.put(apiUrls.resetCounterRules(user.id))
      .then((response: AxiosResponse) => {
        const res: Player = response.data;
        res.birthDate = new Date(res.birthDate);
        return res;
      })
  }

}

export const croissantService = new Croissant();