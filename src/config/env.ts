import { NextPaymentDate } from "../types";

export const apiConfig = {
  protocol: 'http',
  host: 'localhost',
  port: '5000'
};

export const baseURL = `${apiConfig.protocol}://${apiConfig.host}:${apiConfig.port}/api`;

export const apiUrls = {
  getAllPlayers: () => '/user',
  getTeam: () =>'/team/1',
  increment: (userId: number, ruleId: number) => `/user/${userId}/rule/${ruleId}/increment`,
  updatePayday: (userId: number) => `/user/${userId}/payday`,
  resetCounterRules: (userId: number) => `/user/${userId}/reset`
};