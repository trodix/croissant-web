export const apiConfig = {
  protocol: 'http',
  host: 'localhost',
  port: '5000'
};

export const baseURL = `${apiConfig.protocol}://${apiConfig.host}:${apiConfig.port}/api`;

export const apiUrls = {
  getAllPlayers: '/user',
  getTeam: '/team/1'
};